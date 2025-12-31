// src/components/syndicate-space/section-chat/ChatClientV2.jsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Send, Paperclip, ArrowLeft, MoreVertical, Plus, Phone, Video, Users, MessageCircle, AlertCircle, Smile } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { STATIC_FILES_URL } from '@/lib/constants';

// Import du nouveau composant Modal
import NewChatModal from './NewChatModal';

// APIs (pour le mode réel)
import {
    getChatMessagesAPI,
    sendChatMessageAPI,
    createChatRoomAPI,
    joinChatRoomAPI,
    markChatMessagesAsReadAPI,
    updateTypingStatusAPI
} from '@/lib/api/chat';

// Mocks (pour la simulation)
import { MOCK_MESSAGES, MOCK_MEMBERS } from '@/lib/fakeData/syndicateSpaceMock';

// Utilitaire d'image
const getAvatarUrl = (url) => {
    if (!url) return null;
    if (url.startsWith('http') || url.startsWith('https')) return url;
    return `${STATIC_FILES_URL}${url}`;
};

const ChatClientV2 = ({ initialChats = [], initialMembers = [] }) => {
    const params = useParams();
    const syndicateId = params.syndicatId;
    const t = useTranslations('chat');

    // --- ÉTATS ---
    const [chats, setChats] = useState(initialChats);
    const [selectedChat, setSelectedChat] = useState(initialChats[0] || null);
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // États UI
    const [searchTerm, setSearchTerm] = useState('');
    const [showMembersList, setShowMembersList] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [partnerTyping, setPartnerTyping] = useState(false);

    // Nouvel état pour la modale de création
    const [isNewChatModalOpen, setIsNewChatModalOpen] = useState(false);

    // Références
    const messagesEndRef = useRef(null);
    const typingTimeoutRef = useRef(null);

    // --- EFFETS ---

    // Charger les messages quand on change de salle
    useEffect(() => {
        if (selectedChat?.id) {
            loadMessages(selectedChat.id);
        }
    }, [selectedChat]);

    // Scroll automatique vers le bas
    useEffect(() => {
        scrollToBottom();
    }, [messages, partnerTyping]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // --- LOGIQUE MÉTIER ---

    const loadMessages = async (roomId) => {
        setIsLoading(true);
        setError(null);
        setMessages([]); // Reset pour effet visuel

        // 1. MODE SIMULATION
        if (syndicateId === 'test-id') {
            setTimeout(() => {
                const mockMsgs = MOCK_MESSAGES[roomId] || [];
                setMessages(mockMsgs);
                setIsLoading(false);
            }, 500);
            return;
        }

        // 2. MODE RÉEL
        try {
            const messagesData = await getChatMessagesAPI(syndicateId, roomId, 0, 50);
            setMessages(messagesData.content || []);
        } catch (error) {
            console.error('Erreur chargement messages:', error);
            setError('Impossible de charger les messages');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendMessage = async () => {
        if (!messageInput.trim()) return;

        const content = messageInput.trim();
        setMessageInput(''); // Clear input immédiat

        // Message temporaire (Optimistic UI)
        const optimisticMessage = {
            id: `temp-${Date.now()}`,
            content: content,
            sender: { id: 'current-user', name: 'Moi' },
            sentAt: new Date().toISOString(),
            isMe: true
        };

        setMessages(prev => [...prev, optimisticMessage]);

        // 1. MODE SIMULATION
        if (syndicateId === 'test-id') {
            simulateBotReply();
            return;
        }

        // 2. MODE RÉEL
        try {
            const messageData = { content, messageType: 'TEXT' };
            const serverMessage = await sendChatMessageAPI(syndicateId, selectedChat.id, messageData);
            await markChatMessagesAsReadAPI(syndicateId, selectedChat.id, serverMessage.id);
        } catch (error) {
            setError("Échec de l'envoi");
            setMessages(prev => prev.filter(m => m.id !== optimisticMessage.id));
        }
    };

    const simulateBotReply = () => {
        setTimeout(() => {
            setPartnerTyping(true);
            scrollToBottom();
        }, 1000);

        setTimeout(() => {
            setPartnerTyping(false);
            const replyMessage = {
                id: `reply-${Date.now()}`,
                content: "C'est noté ! Merci pour l'info 👍",
                sender: { id: 'bot', name: 'Bob Coder', avatar: "https://i.pravatar.cc/150?img=3" },
                sentAt: new Date().toISOString(),
                isMe: false
            };
            setMessages(prev => [...prev, replyMessage]);
            toast.success("Nouveau message de Bob", { icon: '💬' });
        }, 3500);
    };

    // Ouvre la modale de sélection de membre
    const handleCreateRoom = () => {
        setIsNewChatModalOpen(true);
    };

    // Sélection d'un utilisateur depuis la modale
    const handleUserSelect = (user) => {
        setIsNewChatModalOpen(false);

        // Vérifier si une conversation existe déjà
        const existingChat = chats.find(c => c.name === user.userName && c.type === 'PRIVATE');

        if (existingChat) {
            setSelectedChat(existingChat);
            setSearchTerm('');
        } else {
            // Créer une nouvelle conversation (Simulation)
            const newChat = {
                id: `private-${user.userId}-${Date.now()}`,
                name: user.userName,
                avatar: user.userAvatarUrl,
                type: 'PRIVATE',
                lastMessagePreview: "Nouvelle conversation",
                lastMessageAt: new Date().toISOString(),
                unreadCount: 0,
                isGroup: false,
                online: user.status === 'ACTIVE'
            };

            setChats(prev => [newChat, ...prev]);
            setSelectedChat(newChat);
            setMessages([]);

            if (syndicateId !== 'test-id') {
                // TODO: Appel API réel pour créer la room privée
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
        if (!isTyping) {
            setIsTyping(true);
            if (syndicateId !== 'test-id') updateTypingStatusAPI(syndicateId, selectedChat?.id, true);

            if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
            typingTimeoutRef.current = setTimeout(() => {
                setIsTyping(false);
                if (syndicateId !== 'test-id') updateTypingStatusAPI(syndicateId, selectedChat?.id, false);
            }, 2000);
        }
    };

    const formatTime = (dateString) => {
        if (!dateString) return '';
        return new Date(dateString).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    };

    // --- SOUS-COMPOSANTS ---

    const ChatListItem = ({ chat, isActive }) => {
        const isGroup = chat.type !== 'PRIVATE';
        return (
            <div
                onClick={() => setSelectedChat(chat)}
                className={`flex items-center p-3 mx-2 cursor-pointer rounded-xl mb-1 transition-all duration-200 ${isActive ? 'bg-blue-100 dark:bg-blue-900/40 border-l-4 border-blue-600' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
            >
                <div className="relative flex-shrink-0">
                    {isGroup ? (
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-sm">
                            <Users className="text-white w-6 h-6" />
                        </div>
                    ) : (
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 dark:border-gray-700">
                            <Image src={getAvatarUrl(chat.avatar) || "/default-avatar.png"} alt={chat.name} width={48} height={48} className="object-cover" />
                        </div>
                    )}
                    {chat.unreadCount > 0 && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
                            <span className="text-white text-[10px] font-bold">{chat.unreadCount}</span>
                        </div>
                    )}
                </div>
                <div className="ml-3 flex-grow overflow-hidden">
                    <div className="flex justify-between items-center mb-1">
                        <h3 className={`font-semibold text-sm truncate ${isActive ? 'text-blue-900 dark:text-blue-100' : 'text-gray-800 dark:text-white'}`}>
                            {chat.name}
                        </h3>
                        <span className="text-[10px] text-gray-400 flex-shrink-0">
                            {chat.lastMessageAt ? formatTime(chat.lastMessageAt) : ''}
                        </span>
                    </div>
                    <p className={`text-xs truncate ${isActive ? 'text-blue-700 dark:text-blue-300' : 'text-gray-500 dark:text-gray-400'}`}>
                        {chat.lastMessagePreview || 'Aucun message'}
                    </p>
                </div>
            </div>
        );
    };

    const MessageBubble = ({ message }) => {
        const isMe = message.isMe || message.sender?.id === 'current-user';

        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 my-3 ${isMe ? 'justify-end' : 'justify-start'}`}
            >
                {!isMe && (
                    <div className="flex-shrink-0 self-end mb-1">
                        {message.sender?.avatar ? (
                            <Image src={getAvatarUrl(message.sender.avatar)} alt={message.sender.name} width={32} height={32} className="w-8 h-8 rounded-full object-cover shadow-sm" />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
                                {message.sender?.name?.charAt(0)}
                            </div>
                        )}
                    </div>
                )}

                <div className={`max-w-[75%] md:max-w-[60%] flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                    {!isMe && <span className="text-xs text-gray-500 ml-1 mb-1">{message.sender?.name}</span>}

                    <div className={`px-4 py-2.5 rounded-2xl shadow-sm text-sm whitespace-pre-wrap leading-relaxed ${isMe
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-bl-none'
                        }`}>
                        {message.content}
                    </div>

                    <span className="text-[10px] text-gray-400 mt-1 px-1">
                        {formatTime(message.sentAt)}
                    </span>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="h-[calc(100vh-140px)] flex bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">

            {/* --- LISTE DES CHATS (Sidebar) --- */}
            <div className="w-80 border-r border-gray-200 dark:border-gray-700 flex flex-col bg-gray-50 dark:bg-gray-900/50">
                <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t('title')}</h2>
                        <button onClick={handleCreateRoom} className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 transition-colors">
                            <Plus size={20} />
                        </button>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder={t('search_placeholder')}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar space-y-1 pb-2">
                    {chats.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map(chat => (
                        <ChatListItem key={chat.id} chat={chat} isActive={selectedChat?.id === chat.id} />
                    ))}
                </div>
            </div>

            {/* --- ZONE DE CONVERSATION --- */}
            <div className="flex-1 flex flex-col bg-slate-50 dark:bg-gray-900 relative">
                {selectedChat ? (
                    <>
                        {/* Header Chat */}
                        <div className="h-16 px-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-between shadow-sm z-10">
                            <div className="flex items-center gap-3">
                                {selectedChat.type === 'GENERAL' ? (
                                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600"><Users size={20} /></div>
                                ) : (
                                    <Image src={getAvatarUrl(selectedChat.avatar) || "/default-avatar.png"} alt="Avatar" width={40} height={40} className="rounded-full" />
                                )}
                                <div>
                                    <h3 className="font-bold text-gray-800 dark:text-white">{selectedChat.name}</h3>
                                    <div className="flex items-center text-xs text-green-500">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                                        En ligne
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500">
                                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><Phone size={20} /></button>
                                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><Video size={20} /></button>
                                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><MoreVertical size={20} /></button>
                            </div>
                        </div>

                        {/* Zone Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-2 bg-[url('/chat-bg.png')] bg-repeat opacity-95">
                            {isLoading ? (
                                <div className="flex justify-center py-10"><div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>
                            ) : messages.length === 0 ? (
                                <div className="text-center py-20 text-gray-400">
                                    <MessageCircle size={48} className="mx-auto mb-4 opacity-30" />
                                    <p>Commencez la discussion !</p>
                                </div>
                            ) : (
                                messages.map((msg) => <MessageBubble key={msg.id} message={msg} />)
                            )}

                            {/* Indicateur "En train d'écrire" de l'autre personne */}
                            {partnerTyping && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-gray-500 text-xs ml-4">
                                    <div className="flex space-x-1 bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-full">
                                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-75"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                                    </div>
                                    Bob Coder écrit...
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Zone Input */}
                        <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-end gap-2 bg-gray-100 dark:bg-gray-700/50 p-2 rounded-2xl">
                                <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-white dark:hover:bg-gray-600 rounded-xl transition-all">
                                    <Paperclip size={20} />
                                </button>
                                <textarea
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder={t('message_placeholder')}
                                    className="flex-1 bg-transparent border-none focus:ring-0 resize-none py-2 px-2 max-h-32 min-h-[44px] text-gray-800 dark:text-white"
                                    rows="1"
                                />
                                <button className="p-2 text-gray-500 hover:text-yellow-500 hover:bg-white dark:hover:bg-gray-600 rounded-xl transition-all">
                                    <Smile size={20} />
                                </button>
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!messageInput.trim()}
                                    className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-md transition-all"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                        <MessageCircle size={64} className="mb-4 opacity-20" />
                        <p>Sélectionnez une conversation</p>
                    </div>
                )}
            </div>

            {/* MODALE NOUVELLE DISCUSSION */}
            <NewChatModal
                isOpen={isNewChatModalOpen}
                onClose={() => setIsNewChatModalOpen(false)}
                users={syndicateId === 'test-id' ? MOCK_MEMBERS : (initialMembers || [])}
                onSelectUser={handleUserSelect}
            />
        </div>
    );
};

export default ChatClientV2;