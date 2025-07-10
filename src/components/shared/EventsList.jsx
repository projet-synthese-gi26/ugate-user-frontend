// src/components/shared/EventsList.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import EventCard from "./EventCard";

// Les données peuvent venir de props ou être définies ici pour la démo
const eventsData = [
    {
        id: "1",
        title: "Forum sur la Sécurité Routière",
        date: "15 Juillet 2023",
        time: "09:00 - 17:00",
        location: "Palais des Congrès, Yaoundé",
        description:
            "Rejoignez-nous pour une journée de discussions et d'ateliers sur l'amélioration de la sécurité routière au Cameroun...",
        image:
            "https://images.unsplash.com/photo-1632276536839-84cad7fd03b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        participants: 250,
    },
    // ... autres événements
];

export default function EventsList({ limit = 3, events = eventsData }) {
    return (
        <div className="max-w-full mx-auto py-6 px-4">
            <AnimatePresence>
                {events.slice(0, limit).map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </AnimatePresence>
        </div>
    );
}