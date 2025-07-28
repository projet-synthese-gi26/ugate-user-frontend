// src/components/syndicate-space/section-chat/ChatClient.jsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Send, Paperclip, Mic, ArrowLeft, MoreVertical, Plus, Phone, Video, Lock, Users, MessageCircle, RefreshCw, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import { useErrorHandler, useApiWithRetry } from '@/hooks/useErrorHandler';
import { ErrorState, EmptyState, InlineError } from '../ErrorStates';
import ErrorBoundary from '../ErrorBoundary';
import { sendMessageAPI, getChatMessagesAPI } from '@/lib/api/chat';

// --- SOUS-COMPOSANTS DE STYLE AMÉLIORÉS ---

const ChatListItem = ({ chat, onClick, isActive }) => {
    // Distinction visuelle pour le chat de groupe
    const isGroup = chat.isGroup;
    const activeClasses = 'bg-blue-100 dark:bg-blue-900/50';
    const hoverClasses = 'hover:bg-gray-100 dark:hover:bg-gray-700/50';

    return (
        <div onClick={onClick} className={`flex items-center p-3 cursor-pointer rounded-xl mb-1 transition-colors duration-200 ${isActive ? activeClasses : hoverClasses}`}>
            <div className="relative flex-shrink-0">
                {isGroup ? (
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        <Users className="text-white" />
                    </div>
                ) : (
                    <>
                        <Image src={chat.avatar} alt={chat.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                        {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>}
                    </>
                )}
            </div>
            <div className="ml-3 flex-grow overflow-hidden">
                <div className="flex justify-between items-center">
                    <h3 className={`font-semibold truncate ${isGroup ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-white'}`}>{chat.name}</h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2">{chat.lastMessageTime}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{chat.lastMessage}</p>
            </div>
        </div>
    );
};

const Message = ({ msg, isSent, isGroup }) => (
    <div className={`flex items-end gap-2 my-2 ${isSent ? 'justify-end' : 'justify-start'}`}>
        {!isSent && <Image src={msg.avatar} alt={msg.sender} width={32} height={32} className="w-8 h-8 rounded-full object-cover self-start" />}
        <div className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${isSent ? 'bg-blue-600 text-white rounded-br-lg' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-lg'}`}>
            {!isSent && isGroup && <p className="text-xs font-semibold text-blue-500 dark:text-blue-400 mb-1">{msg.sender}</p>}
            <p className="whitespace-pre-wrap">{msg.text}</p>
            <div className={`text-xs mt-1 text-right ${isSent ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>{msg.time}</div>
        </div>
    </div>
);


// --- COMPOSANT PRINCIPAL ---
function ChatClientInner({ initialChats = [], initialMessages = {}, initialMembers = [], syndicatId }) {
    const t = useTranslations('chat');
    const { handleError, clearError, hasError, getError } = useErrorHandler();
    const { executeWithRetry, loading: apiLoading } = useApiWithRetry();
    
    const [view, setView] = useState('list');
    const [chats, setChats] = useState(initialChats || []);
    const [messages, setMessages] = useState(initialMessages || {});
    const [activeChat, setActiveChat] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoadingMessages, setIsLoadingMessages] = useState(false);
    const [isSendingMessage, setIsSendingMessage] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => { 
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); 
    }, [messages, activeChat]);
    
    // Charger les messages d'un chat
    const loadChatMessages = async (chatId) => {
        if (messages[chatId]) return; // Déjà chargé
        
        setIsLoadingMessages(true);
        try {
            await executeWithRetry(async () => {
                const chatMessages = await getChatMessagesAPI(syndicatId, chatId);
                setMessages(prev => ({
                    ...prev,
                    [chatId]: chatMessages || []
                }));
                clearError(`messages-${chatId}`);
            }, `load-messages-${chatId}`, {
                maxRetries: 2
            });
        } catch (error) {
            // L'erreur est déjà gérée par executeWithRetry
        } finally {
            setIsLoadingMessages(false);
        }
    };
    
    const handleSendMessage = async () => {
        if (!newMessage.trim() || !activeChat || isSendingMessage) return;
        
        const messageText = newMessage.trim();
        setNewMessage('');
        setIsSendingMessage(true);
        
        // Message optimiste
        const tempMessage = {
            id: Date.now(),
            text: messageText,
            sender: 'Vous',
            time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
            avatar: 'https://i.pravatar.cc/150?img=1'
        };
        
        setMessages(prev => ({
            ...prev,
            [activeChat.id]: [...(prev[activeChat.id] || []), tempMessage]
        }));
        
        try {
            await executeWithRetry(async () => {
                await sendMessageAPI(syndicatId, activeChat.id, messageText);
                clearError(`send-message-${activeChat.id}`);
            }, `send-message-${activeChat.id}`, {
                maxRetries: 2,
                onError: () => {
                    // Supprimer le message optimiste en cas d'échec
                    setMessages(prev => ({
                        ...prev,
                        [activeChat.id]: (prev[activeChat.id] || []).filter(msg => msg.id !== tempMessage.id)
                    }));
                }
            });
        } catch (error) {
            // L'erreur est déjà gérée par executeWithRetry
        } finally {
            setIsSendingMessage(false);
        }
    };
    
    const startNewChat = (member) => {
        // Implémentation pour créer un nouveau chat
        console.log('Starting new chat with:', member);
    };
    
    // Charger les messages quand on sélectionne un chat
    useEffect(() => {
        if (activeChat) {
            loadChatMessages(activeChat.id);
        }
    }, [activeChat]);

    const filteredChats = chats.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredMembers = initialMembers.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()) && !chats.some(c => c.id === m.id));

    // Styles pour les bordures subtiles
    const borderStyle = "border-gray-200/80 dark:border-white/10";

    const renderChatMessages = () => {
        if (hasError(`messages-${activeChat.id}`)) {
            return (
                <div className="flex-grow flex items-center justify-center p-8">
                    <ErrorState 
                        error={getError(`messages-${activeChat.id}`)}
                        onRetry={() => loadChatMessages(activeChat.id)}
                        onDismiss={() => clearError(`messages-${activeChat.id}`)}
                        variant="compact"
                    />
                </div>
            );
        }
        
        if (isLoadingMessages) {
            return (
                <div className="flex-grow flex items-center justify-center p-8">
                    <div className="flex items-center gap-3 text-neutral-500">
                        <RefreshCw className="w-6 h-6 animate-spin" />
                        <span>Chargement des messages...</span>
                    </div>
                </div>
            );
        }
        
        const chatMessages = messages[activeChat.id] || [];
        
        if (chatMessages.length === 0) {
            return (
                <div className="flex-grow flex items-center justify-center p-8">
                    <EmptyState
                        icon={MessageCircle}
                        title="Aucun message"
                        description="Commencez la conversation !"
                        className="bg-transparent"
                    />
                </div>
            );
        }
        
        return (
            <div className="flex-grow overflow-y-auto p-4 bg-neutral-50 dark:bg-neutral-800/50">
                {chatMessages.map(msg => (
                    <Message 
                        key={msg.id} 
                        msg={msg} 
                        isSent={msg.sender === 'Vous'} 
                        isGroup={activeChat.isGroup} 
                    />
                ))}
                <div ref={messagesEndRef} />
            </div>
        );
    };

    return (
        <div className="space-y-6">
            {/* Header avec gestion d'erreurs globales */}
            <AnimatePresence>
                {hasError('send-message') && (
                    <InlineError 
                        error={getError('send-message')}
                        className="mb-4"
                    />
                )}
            </AnimatePresence>
            
            <div className={`flex h-[calc(100vh-200px)] bg-white dark:bg-neutral-800 rounded-2xl shadow-soft border border-neutral-200 dark:border-neutral-700 overflow-hidden`}>
            
            {/* --- COLONNE DE GAUCHE (LISTE DES CHATS) --- */}
            <div className={`w-full md:w-1/3 xl:w-1/4 border-r ${borderStyle} flex-col transition-transform duration-300 ${view === 'chat' && !activeChat ? 'flex' : view === 'list' ? 'flex' : 'hidden md:flex'}`}>
                <div className={`p-4 border-b ${borderStyle}`}><div className="relative"><input type="text" placeholder={t("chat.search_placeholder")} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} /></div></div>
                <div className="flex-grow overflow-y-auto p-2">
                    {/* Chat de Groupe mis en avant */}
                    {filteredChats.filter(c => c.isGroup).map(chat => <ChatListItem key={chat.id} chat={chat} onClick={() => { setActiveChat(chat); setView('chat'); }} isActive={activeChat?.id === chat.id} />)}
                    {filteredChats.filter(c => c.isGroup).length > 0 && <hr className={`my-2 ${borderStyle}`} />}
                    {/* Chats privés */}
                    {filteredChats.filter(c => !c.isGroup).map(chat => <ChatListItem key={chat.id} chat={chat} onClick={() => { setActiveChat(chat); setView('chat'); }} isActive={activeChat?.id === chat.id} />)}
                </div>
                <div className={`p-4 border-t ${borderStyle}`}><button onClick={() => setView('search')} className="w-full py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"><Plus size={20} />{t("chat.new_discussion")}</button></div>
            </div>

            {/* --- COLONNE DE DROITE (FENÊTRE DE CHAT OU DE RECHERCHE) --- */}
            <div className={`w-full md:w-2/3 xl:w-3/4 flex flex-col transition-transform duration-300 ${view === 'list' ? 'hidden md:flex' : 'flex'}`}>
                <AnimatePresence mode="wait">
                    {view === 'chat' && activeChat ? (
                        <motion.div key={activeChat.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col bg-white dark:bg-gray-800">
                            <header className={`flex items-center justify-between p-3 border-b ${borderStyle} flex-shrink-0`}>
                                <div className="flex items-center gap-3"><button onClick={() => setActiveChat(null)} className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><ArrowLeft /></button>{activeChat.isGroup ? <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center"><Users size={20} className="text-white"/></div> : <Image src={activeChat.avatar} alt={activeChat.name} width={40} height={40} className="w-10 h-10 rounded-full" />}<div><h2 className="font-semibold text-lg">{activeChat.name}</h2>{activeChat.online && <p className="text-xs text-green-500">En ligne</p>}</div></div>
                                <div className="flex items-center gap-1"><button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><Phone size={20}/></button><button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><Video size={20}/></button><button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><MoreVertical size={20}/></button></div>
                            </header>
                            {renderChatMessages()}
                            <footer className={`p-3 border-t ${borderStyle} bg-white dark:bg-neutral-800 flex-shrink-0`}>
                                <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-700 rounded-full px-2">
                                    <input 
                                        type="text" 
                                        placeholder={t("chat.message_placeholder")} 
                                        value={newMessage} 
                                        onChange={(e) => setNewMessage(e.target.value)} 
                                        onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
                                        className="flex-grow px-2 py-2 bg-transparent focus:outline-none disabled:opacity-50" 
                                        disabled={isSendingMessage}
                                    />
                                    <button 
                                        className="p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-full transition-colors"
                                        disabled={isSendingMessage}
                                    >
                                        <Paperclip size={20}/>
                                    </button>
                                    <button 
                                        onClick={handleSendMessage} 
                                        className="p-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 disabled:bg-neutral-400 transition-colors flex items-center justify-center" 
                                        disabled={!newMessage.trim() || isSendingMessage}
                                    >
                                        {isSendingMessage ? (
                                            <RefreshCw size={18} className="animate-spin" />
                                        ) : (
                                            <Send size={18} />
                                        )}
                                    </button>
                                </div>
                            </footer>
                        </motion.div>
                    ) : view === 'search' ? (
                        <motion.div key="search-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col p-4 bg-white dark:bg-gray-800">
                           {/* ... Vue de recherche ... */}
                        </motion.div>
                    ) : (
                        <motion.div key="placeholder-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex items-center justify-center text-center text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800/50">
                            <EmptyState
                                icon={MessageCircle}
                                title="Sélectionnez une conversation"
                                description="Choisissez un contact ou un groupe pour commencer à discuter"
                                className="bg-transparent"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

// Wrapper avec ErrorBoundary
export default function ChatClient(props) {
    return (
        <ErrorBoundary
            title="Erreur dans la section Chat"
            subtitle="Une erreur s'est produite lors du chargement du chat."
        >
            <ChatClientInner {...props} />
        </ErrorBoundary>
    );
}