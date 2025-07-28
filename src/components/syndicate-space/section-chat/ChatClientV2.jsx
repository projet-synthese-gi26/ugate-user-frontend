// src/components/syndicate-space/section-chat/ChatClientV2.jsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Send, Paperclip, Mic, ArrowLeft, MoreVertical, Plus, Phone, Video, Users, MessageCircle, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { 
    getChatMessagesAPI, 
    sendChatMessageAPI, 
    createChatRoomAPI, 
    joinChatRoomAPI,
    markChatMessagesAsReadAPI,
    updateTypingStatusAPI 
} from '@/lib/api/chat';

const ChatClientV2 = ({ initialChats = [], initialMembers = [] }) => {
    const params = useParams();
    const syndicateId = params.syndicatId;
    const t = useTranslations();
    
    // États principaux
    const [chats, setChats] = useState(initialChats);
    const [selectedChat, setSelectedChat] = useState(initialChats[0] || null);
    const [messages, setMessages] = useState([]);
    const [members, setMembers] = useState(initialMembers);
    const [messageInput, setMessageInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    // États UI
    const [searchTerm, setSearchTerm] = useState('');
    const [showMembersList, setShowMembersList] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [typingUsers, setTypingUsers] = useState([]);
    
    // Références
    const messagesEndRef = useRef(null);
    const typingTimeoutRef = useRef(null);

    // Charger les messages quand une salle est sélectionnée
    useEffect(() => {
        if (selectedChat && selectedChat.id && selectedChat.id !== 'general') {
            loadMessages(selectedChat.id);
        }
    }, [selectedChat]);

    // Faire défiler vers le bas quand de nouveaux messages arrivent
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const loadMessages = async (roomId) => {
        if (!syndicateId || !roomId) return;
        
        setIsLoading(true);
        setError(null);
        
        try {
            const messagesData = await getChatMessagesAPI(syndicateId, roomId, 0, 50);
            setMessages(messagesData.content || []);
        } catch (error) {
            console.error('Erreur lors du chargement des messages:', error);
            setError('Impossible de charger les messages');
            setMessages([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendMessage = async () => {
        if (!messageInput.trim() || !selectedChat || !syndicateId) return;
        
        const messageData = {
            content: messageInput.trim(),
            messageType: 'TEXT'
        };
        
        setIsLoading(true);
        
        try {
            const newMessage = await sendChatMessageAPI(syndicateId, selectedChat.id, messageData);
            
            // Ajouter le nouveau message à la liste
            setMessages(prev => [...prev, newMessage]);
            
            // Vider l'input
            setMessageInput('');
            
            // Marquer comme lu
            if (newMessage.id) {
                await markChatMessagesAsReadAPI(syndicateId, selectedChat.id, newMessage.id);
            }
            
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message:', error);
            setError('Impossible d\'envoyer le message');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreateRoom = async () => {
        if (!syndicateId) return;
        
        const roomData = {
            name: 'Nouvelle Discussion',
            description: 'Salle créée automatiquement',
            type: 'GENERAL',
            isPrivate: false
        };
        
        try {
            const newRoom = await createChatRoomAPI(syndicateId, roomData);
            setChats(prev => [...prev, newRoom]);
            setSelectedChat(newRoom);
        } catch (error) {
            console.error('Erreur lors de la création de la salle:', error);
            setError('Impossible de créer la salle');
        }
    };

    const handleJoinRoom = async (roomId) => {
        if (!syndicateId || !roomId) return;
        
        try {
            await joinChatRoomAPI(syndicateId, roomId);
            // Recharger les salles
            // TODO: Implémenter le refresh des salles
        } catch (error) {
            console.error('Erreur lors de la jonction à la salle:', error);
            setError('Impossible de rejoindre la salle');
        }
    };

    const handleTyping = () => {
        if (!selectedChat || !syndicateId) return;
        
        // Mettre à jour le statut typing local
        if (!isTyping) {
            setIsTyping(true);
            updateTypingStatusAPI(syndicateId, selectedChat.id, true);
        }
        
        // Réinitialiser le timeout
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        
        typingTimeoutRef.current = setTimeout(() => {
            setIsTyping(false);
            updateTypingStatusAPI(syndicateId, selectedChat.id, false);
        }, 2000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        } else {
            handleTyping();
        }
    };

    const formatMessageTime = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleTimeString('fr-FR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    };

    const ChatListItem = ({ chat, onClick, isActive }) => {
        const isGroup = chat.type !== 'PRIVATE';
        const activeClasses = 'bg-blue-100 dark:bg-blue-900/50';
        const hoverClasses = 'hover:bg-gray-100 dark:hover:bg-gray-700/50';

        return (
            <div 
                onClick={onClick} 
                className={`flex items-center p-3 cursor-pointer rounded-xl mb-1 transition-colors duration-200 ${
                    isActive ? activeClasses : hoverClasses
                }`}
            >
                <div className="relative flex-shrink-0">
                    {isGroup ? (
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                            <Users className="text-white w-6 h-6" />
                        </div>
                    ) : (
                        <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                            <MessageCircle className="text-gray-600 dark:text-gray-300 w-6 h-6" />
                        </div>
                    )}
                    {chat.unreadCount > 0 && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                                {chat.unreadCount > 9 ? '9+' : chat.unreadCount}
                            </span>
                        </div>
                    )}
                </div>
                <div className="ml-3 flex-grow overflow-hidden">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold truncate text-gray-800 dark:text-white">
                            {chat.name}
                        </h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2">
                            {chat.lastMessageAt ? formatMessageTime(chat.lastMessageAt) : ''}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                        {chat.lastMessagePreview || 'Aucun message'}
                    </p>
                </div>
            </div>
        );
    };

    const Message = ({ message }) => {
        const isSent = message.sender?.id === 'current-user'; // TODO: Utiliser l'ID utilisateur réel
        
        return (
            <div className={`flex items-end gap-2 my-2 ${isSent ? 'justify-end' : 'justify-start'}`}>
                {!isSent && (
                    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                        {message.sender?.avatar ? (
                            <Image 
                                src={message.sender.avatar} 
                                alt={message.sender.name} 
                                width={32} 
                                height={32} 
                                className="w-8 h-8 rounded-full object-cover" 
                            />
                        ) : (
                            <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
                                {message.sender?.name?.charAt(0) || 'U'}
                            </span>
                        )}
                    </div>
                )}
                <div className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${
                    isSent 
                        ? 'bg-blue-600 text-white rounded-br-lg' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-lg'
                }`}>
                    {!isSent && (
                        <p className="text-xs font-semibold text-blue-500 dark:text-blue-400 mb-1">
                            {message.sender?.name || 'Utilisateur'}
                        </p>
                    )}
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <div className={`text-xs mt-1 text-right ${
                        isSent ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                        {formatMessageTime(message.sentAt)}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="h-full flex bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            {/* Liste des chats */}
            <div className="w-1/3 border-r border-gray-200 dark:border-gray-700 flex flex-col">
                {/* Header avec recherche */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                            {t('chat.title')}
                        </h2>
                        <button
                            onClick={handleCreateRoom}
                            className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-lg transition-colors"
                            title="Créer une nouvelle salle"
                        >
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder={t('chat.search_placeholder')}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Liste des conversations */}
                <div className="flex-1 overflow-y-auto p-2">
                    {chats.length === 0 ? (
                        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                            <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p>Aucune conversation</p>
                            <button
                                onClick={handleCreateRoom}
                                className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                                Créer une salle
                            </button>
                        </div>
                    ) : (
                        chats
                            .filter(chat => 
                                chat.name.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .map((chat) => (
                                <ChatListItem
                                    key={chat.id}
                                    chat={chat}
                                    onClick={() => setSelectedChat(chat)}
                                    isActive={selectedChat?.id === chat.id}
                                />
                            ))
                    )}
                </div>
            </div>

            {/* Zone de conversation */}
            <div className="flex-1 flex flex-col">
                {selectedChat ? (
                    <>
                        {/* Header de la conversation */}
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-3">
                                        <Users className="text-white w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 dark:text-white">
                                            {selectedChat.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {selectedChat.memberCount} membre(s)
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setShowMembersList(!showMembersList)}
                                        className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                        title="Voir les membres"
                                    >
                                        <Users className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                        <MoreVertical className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Zone d'erreur */}
                        {error && (
                            <div className="p-3 bg-red-100 dark:bg-red-900/50 border-b border-red-200 dark:border-red-800">
                                <div className="flex items-center text-red-800 dark:text-red-200">
                                    <AlertCircle className="w-4 h-4 mr-2" />
                                    <span className="text-sm">{error}</span>
                                    <button
                                        onClick={() => setError(null)}
                                        className="ml-auto text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200"
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-2">
                            {isLoading ? (
                                <div className="text-center py-8">
                                    <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                                    <p className="text-gray-500 dark:text-gray-400">Chargement des messages...</p>
                                </div>
                            ) : messages.length === 0 ? (
                                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                                    <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                    <p>Aucun message dans cette conversation</p>
                                    <p className="text-sm mt-2">Soyez le premier à écrire !</p>
                                </div>
                            ) : (
                                messages.map((message) => (
                                    <Message key={message.id} message={message} />
                                ))
                            )}
                            
                            {/* Indicateur de saisie */}
                            {typingUsers.length > 0 && (
                                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                                    <div className="flex space-x-1 mr-2">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    </div>
                                    {typingUsers.join(', ')} {typingUsers.length === 1 ? 'est en train d\'écrire...' : 'sont en train d\'écrire...'}
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Zone de saisie */}
                        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                            <div className="flex items-end space-x-2">
                                <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                    <Paperclip className="w-5 h-5" />
                                </button>
                                <div className="flex-1 relative">
                                    <textarea
                                        value={messageInput}
                                        onChange={(e) => setMessageInput(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder={t('chat.message_placeholder')}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none max-h-32"
                                        rows="1"
                                        disabled={isLoading}
                                    />
                                </div>
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!messageInput.trim() || isLoading}
                                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    /* État vide */
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <h3 className="text-lg font-medium mb-2">Sélectionnez une conversation</h3>
                            <p>Choisissez une conversation dans la liste pour commencer à discuter</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatClientV2;