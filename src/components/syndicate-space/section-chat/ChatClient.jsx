// src/components/syndicate-space/section-chat/ChatClient.jsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Send, Paperclip, Mic, ArrowLeft, MoreVertical, Plus, Phone, Video, Lock, Users, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

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
export default function ChatClient({ initialChats, initialMessages, initialMembers }) {
    const { t } = useTranslation();
    const [view, setView] = useState('list');
    const [chats, setChats] = useState(initialChats);
    const [messages, setMessages] = useState(initialMessages);
    const [activeChat, setActiveChat] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, activeChat]);
    
    const handleSendMessage = () => { /* ... */ };
    const startNewChat = (member) => { /* ... */ };

    const filteredChats = chats.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredMembers = initialMembers.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()) && !chats.some(c => c.id === m.id));

    // Styles pour les bordures subtiles
    const borderStyle = "border-gray-200/80 dark:border-white/10";

    return (
        <div className={`flex h-[calc(100vh-150px)] bg-white dark:bg-gray-800/60 rounded-2xl shadow-2xl border ${borderStyle} overflow-hidden`}>
            
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
                            <div className="flex-grow overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800/50">{messages[activeChat.id]?.map(msg => <Message key={msg.id} msg={msg} isSent={msg.sender === 'Vous'} isGroup={activeChat.isGroup} />)}<div ref={messagesEndRef} /></div>
                            <footer className={`p-3 border-t ${borderStyle} bg-white dark:bg-gray-800 flex-shrink-0`}><div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-full px-2"><input type="text" placeholder={t("chat.message_placeholder")} value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} className="flex-grow px-2 py-2 bg-transparent focus:outline-none" /><button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full"><Paperclip size={20}/></button><button onClick={handleSendMessage} className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-400" disabled={!newMessage.trim()}><Send size={18} /></button></div></footer>
                        </motion.div>
                    ) : view === 'search' ? (
                        <motion.div key="search-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col p-4 bg-white dark:bg-gray-800">
                           {/* ... Vue de recherche ... */}
                        </motion.div>
                    ) : (
                        <motion.div key="placeholder-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex items-center justify-center text-center text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50">
                            <div className="flex flex-col items-center gap-2"><MessageCircle size={48} className="text-gray-300 dark:text-gray-600" /><p className="font-medium">{t("chat.select_conversation")}</p></div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}