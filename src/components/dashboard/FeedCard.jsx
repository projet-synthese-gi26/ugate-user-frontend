"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { formatDistanceToNow, format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Clock, Heart, MessageCircle, Share2, MapPin, User } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import FeedItemHeader from './FeedItemHeader';
import { SyndicatDefaultAvatar } from '../shared/SyndicatDefaultAvatar';
import { STATIC_FILES_URL } from '@/lib/constants';

const ActionButton = ({ icon: Icon, text, onClick, active, activeColor = 'text-red-500' }) => (
    <motion.button
        onClick={onClick}
        className={`flex items-center justify-center w-full gap-2 py-2.5 rounded-lg transition-all duration-200 ${
            active
                ? `${activeColor.replace('text-', 'bg-').replace('-500', '-100')} dark:${activeColor.replace('text-', 'bg-').replace('-500', '-900/50')} ${activeColor}`
                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        <Icon size={18} fill={active ? 'currentColor' : 'none'} />
        <span className="font-medium text-sm">{text}</span>
    </motion.button>
);

export default function FeedCard({ item }) {
    const t = useTranslations('common');
    const [liked, setLiked] = useState(false);
    const dateToUse = item.createdAt || item.startDate;
    const timeAgo = dateToUse ? formatDistanceToNow(new Date(dateToUse), { addSuffix: true, locale: fr }) : t('unknown_date');
    const imageUrl = item.image && item.image.startsWith('/') ? `${STATIC_FILES_URL}${item.image}` : item.image;

    if (item.type === 'publication') {
        const authorAvatarUrl = item.author.avatar && item.author.avatar.startsWith('/') ? `${STATIC_FILES_URL}${item.author.avatar}` : item.author.avatar;
        return (
            <div className="bg-white dark:bg-gray-800/60 rounded-2xl shadow-xl border border-gray-200/50 dark:border-white/10 overflow-hidden">
                <FeedItemHeader syndicat={item.syndicat} branch={item.branch} />
                <div className="p-5 sm:p-6">
                    <div className="flex items-start gap-4 mb-4">
                        {authorAvatarUrl ? (
                            <Image src={authorAvatarUrl} alt={item.author.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover ring-2 ring-white/50 dark:ring-white/10" />
                        ) : (
                            <SyndicatDefaultAvatar name={item.author.name} size={48} />
                        )}
                        <div>
                            <p className="font-bold text-gray-900 dark:text-white">{item.author.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                                <Clock size={12} /> {timeAgo}
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-5 whitespace-pre-wrap text-base leading-relaxed">{item.content}</p>
                    {imageUrl && (
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <Image src={imageUrl} alt="Contenu" width={800} height={500} className="w-full h-auto" />
                        </div>
                    )}
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 my-4">
                        <span>
                            {item.likes} {t('likes__one', { count: item.likes })}
                        </span>
                        <span>
                            {item.comments?.length || 0} {t('comments_one', { count: item.comments?.length || 0 })}
                        </span>
                    </div>
                    <div className="flex items-center justify-around border-t border-gray-100 dark:border-gray-700/50 pt-3 gap-2">
                        <ActionButton icon={Heart} text={t('like')} onClick={() => setLiked(!liked)} active={liked} activeColor="text-red-500" />
                        <ActionButton icon={MessageCircle} text={t('comment')} activeColor="text-blue-500" />
                        <ActionButton icon={Share2} text={t('share')} activeColor="text-green-500" />
                    </div>
                </div>
            </div>
        );
    }

    if (item.type === 'event') {
        const startDate = new Date(dateToUse);
        return (
            <div className="bg-white dark:bg-gray-800/60 rounded-2xl shadow-xl border border-gray-200/50 dark:border-white/10 overflow-hidden">
                <FeedItemHeader syndicat={item.syndicat} branch={item.branch} />
                {imageUrl && (
                    <div className="relative h-52 group">
                        <Image src={imageUrl} alt={item.title} fill style={{ objectFit: 'cover' }} className="transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-5">
                            <h3 className="text-2xl font-bold text-white drop-shadow-lg">{item.title}</h3>
                            <p className="text-sm text-white/90 drop-shadow-md">{item.description}</p>
                        </div>
                    </div>
                )}
                <div className="p-5 sm:p-6">
                    <div className="grid grid-cols-3 gap-4 text-center mb-5">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
                            <p className="text-xl font-bold text-blue-600 dark:text-blue-300">{format(startDate, 'dd')}</p>
                            <p className="text-xs font-semibold text-blue-500 dark:text-blue-400 uppercase">{format(startDate, 'MMM', { locale: fr })}</p>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-900/40 rounded-lg col-span-2">
                            <p className="font-semibold text-green-700 dark:text-green-300">{format(startDate, 'EEEE', { locale: fr })}</p>
                            <p className="text-xs text-green-600 dark:text-green-400">{format(startDate, 'HH:mm')}</p>
                        </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2 mb-6">
                        <p className="flex items-center gap-2">
                            <MapPin size={16} className="text-purple-500" /> {item.location}
                        </p>
                        <p className="flex items-center gap-2">
                            <User size={16} className="text-purple-500" /> Organisé par <strong>{item.author.name}</strong>
                        </p>
                    </div>
                    <motion.button
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {t('see_and_join')} ({item.participants?.length || 0} {t('participants')})
                    </motion.button>
                </div>
            </div>
        );
    }

    return null;
}
