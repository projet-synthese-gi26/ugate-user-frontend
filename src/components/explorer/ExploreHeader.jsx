// src/components/explorer/ExploreHeader.jsx
import { Sparkles } from "lucide-react";

/**
 * Le header de la page Explorer.
 * C'est un Server Component qui affiche des informations statiques.
 * @param {number} syndicatesCount - Le nombre total de syndicats à afficher.
 * @param {function} t - La fonction de traduction initialisée côté serveur.
 */
export default function ExploreHeader({ syndicatesCount, t }) {
    return (
        <header className="text-center mb-16 relative">
            <div className="max-w-4xl mx-auto relative">
                {/* Effet de lumière décoratif */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-blue-100 dark:bg-blue-900/50 rounded-full blur-3xl opacity-30 -z-10"></div>

                {/* Titre principal */}
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 relative z-10">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {t('explorer_page.title')}
                    </span>
                    <div className="mt-2 w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    {t('explorer_page.description')}
                    <span className="block mt-2 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 mr-2"/>
                        {t('explorer_page.count', { count: syndicatesCount })}
                    </span>
                </p>
            </div>
        </header>
    );
}