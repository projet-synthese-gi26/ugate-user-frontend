// src/components/syndicate-space/section-exprimer/PublicationsFeed.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import Post from "./Post";
import NewPostModal from "./NewPostModal";

export default function PublicationsFeed({ initialPosts }) {
    const { t } = useTranslation();
    const [posts, setPosts] = useState(initialPosts);
    const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);

    const handleUpdatePost = (updatedPost) => {
        setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
    };

    const handleNewPost = (newPostData) => {
        const newPost = {
            id: Date.now(),
            author: { name: "Vous", avatar: "https://i.pravatar.cc/150?img=1" },
            timestamp: "À l'instant",
            createdAt: new Date(),
            likes: 0,
            comments: [],
            ...newPostData
        };
        setPosts([newPost, ...posts]);
        setIsNewPostModalOpen(false);
    };

    return (
        <div>
            {posts.map(post => (
                <Post 
                    key={post.id} 
                    post={post}
                    onUpdatePost={handleUpdatePost}
                />
            ))}

            <motion.button
                className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full p-4 shadow-lg"
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsNewPostModalOpen(true)}
                aria-label={t('express_page.new_post_button')}
            >
                <Plus size={24} />
            </motion.button>
            
            <NewPostModal
                isOpen={isNewPostModalOpen}
                onClose={() => setIsNewPostModalOpen(false)}
                onNewPost={handleNewPost}
            />
        </div>
    );
}