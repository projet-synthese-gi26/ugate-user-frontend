// src/app/(syndicate-space)/syndicat-space/[syndicatId]/(sections)/chat/page.jsx
import {getTranslations} from 'next-intl/server';
import ChatClient from "@/components/syndicate-space/section-chat/ChatClient";
import { fakeChats, fakeMessages, fakeSyndicateMembers } from '@/lib/fakeData/syndicateDetailsFake';

async function getChatData(syndicatId) {
    console.log(`Récupération des données de chat pour le syndicat ${syndicatId}...`);
    await new Promise(resolve => setTimeout(resolve, 200));
    return { 
        chats: fakeChats, 
        messages: fakeMessages,
        members: fakeSyndicateMembers
    };
}

export default async function ChatPage({ params }) {
    const { locale, syndicatId } = params;
    const t = await getTranslations();
    const chatData = await getChatData(syndicatId);

    return (
        // Le layout de l'espace syndicat a déjà un padding, on enlève celui du composant principal
        <div className="h-full">
            <ChatClient 
                initialChats={chatData.chats}
                initialMessages={chatData.messages}
                initialMembers={chatData.members}
            />
        </div>
    );
}