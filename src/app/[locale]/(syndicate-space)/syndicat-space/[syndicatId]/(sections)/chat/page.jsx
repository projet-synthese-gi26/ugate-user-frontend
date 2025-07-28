// src/app/(syndicate-space)/syndicat-space/[syndicatId]/(sections)/chat/page.jsx
import {getTranslations} from 'next-intl/server';
import ChatClientV2 from "@/components/syndicate-space/section-chat/ChatClientV2";
import { getChatRoomsAPI, getChatRoomMembersAPI } from "@/lib/api/chat";

async function getChatData(syndicatId) {
    try {
        console.log(`Récupération des données de chat pour le syndicat ${syndicatId}...`);
        
        // Récupérer les salles de chat du syndicat
        const chatRooms = await getChatRoomsAPI(syndicatId);
        
        // Pour l'instant, créer une salle par défaut si aucune n'existe
        let rooms = chatRooms || [];
        if (rooms.length === 0) {
            rooms = [{
                id: 'general',
                name: 'Général',
                description: 'Discussion générale du syndicat',
                type: 'GENERAL',
                isPrivate: false,
                memberCount: 0,
                unreadCount: 0,
                lastMessageAt: null,
                lastMessagePreview: null,
                hasNotifications: true
            }];
        }
        
        // Récupérer les membres de la première salle pour l'affichage initial
        let members = [];
        if (rooms.length > 0) {
            try {
                members = await getChatRoomMembersAPI(syndicatId, rooms[0].id);
            } catch (error) {
                console.warn('Impossible de récupérer les membres:', error);
                members = [];
            }
        }
        
        return { 
            chats: rooms,
            messages: [], // Les messages seront chargés dynamiquement par room
            members: members
        };
    } catch (error) {
        console.error(`Erreur lors de la récupération des données de chat pour ${syndicatId}:`, error);
        
        // Fallback vers une salle par défaut en cas d'erreur
        return {
            chats: [{
                id: 'general',
                name: 'Général',
                description: 'Discussion générale du syndicat',
                type: 'GENERAL',
                isPrivate: false,
                memberCount: 0,
                unreadCount: 0,
                lastMessageAt: null,
                lastMessagePreview: 'Aucun message pour le moment',
                hasNotifications: true
            }],
            messages: [],
            members: []
        };
    }
}

export default async function ChatPage({ params }) {
    const { locale, syndicatId } = await params;
    const t = await getTranslations();
    const chatData = await getChatData(syndicatId);

    return (
        // Le layout de l'espace syndicat a déjà un padding, on enlève celui du composant principal
        <div className="h-full">
            <ChatClientV2 
                initialChats={chatData.chats}
                initialMembers={chatData.members}
            />
        </div>
    );
}