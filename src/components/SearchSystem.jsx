import React, { useState, useCallback, useEffect } from 'react';
import { Search, Filter, X, ChevronDown, Loader2 } from 'lucide-react';
import { 
    searchSyndicatesAPI, 
    searchAllPostsAPI, 
    searchAllEventsAPI,
    universalSearchAPI,
    debounce
} from '../lib/api/search';

const SearchSystem = () => {
    const [query, setQuery] = useState('');
    const [searchType, setSearchType] = useState('all'); // all, syndicates, posts, events
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        category: '',
        location: '',
        page: 0,
        size: 20,
        sortBy: 'createdAt',
        sortDirection: 'DESC'
    });

    // Debounced search function
    const debouncedSearch = useCallback(
        debounce(async (searchQuery, searchFilters) => {
            if (!searchQuery.trim()) {
                setResults(null);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                let data;
                
                switch (searchType) {
                    case 'syndicates':
                        data = await searchSyndicatesAPI(
                            searchQuery,
                            searchFilters.category,
                            searchFilters.location,
                            searchFilters.page,
                            searchFilters.size,
                            searchFilters.sortBy,
                            searchFilters.sortDirection
                        );
                        break;
                    case 'posts':
                        data = await searchAllPostsAPI(
                            searchQuery,
                            searchFilters.page,
                            searchFilters.size,
                            searchFilters.sortBy,
                            searchFilters.sortDirection
                        );
                        break;
                    case 'events':
                        data = await searchAllEventsAPI(
                            searchQuery,
                            searchFilters.location,
                            searchFilters.page,
                            searchFilters.size,
                            'startDate',
                            'ASC'
                        );
                        break;
                    default:
                        data = await universalSearchAPI(searchQuery, {
                            page: searchFilters.page,
                            size: searchFilters.size
                        });
                }
                
                setResults(data);
            } catch (err) {
                setError(err.message || 'Erreur lors de la recherche');
                console.error('Search error:', err);
            } finally {
                setLoading(false);
            }
        }, 500),
        [searchType]
    );

    // Effect to trigger search when query or filters change
    useEffect(() => {
        debouncedSearch(query, filters);
    }, [query, filters, debouncedSearch]);

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value,
            page: 0 // Reset page when filters change
        }));
    };

    const clearFilters = () => {
        setFilters({
            category: '',
            location: '',
            page: 0,
            size: 20,
            sortBy: 'createdAt',
            sortDirection: 'DESC'
        });
    };

    const renderResults = () => {
        if (!results) return null;

        if (searchType === 'all') {
            return (
                <div className="space-y-6">
                    {Object.entries(results.results).map(([type, data]) => (
                        <div key={type} className="bg-white rounded-lg shadow p-4">
                            <h3 className="text-lg font-semibold mb-3 capitalize">
                                {type} ({data.totalElements} résultats)
                            </h3>
                            <div className="space-y-2">
                                {data.content.slice(0, 3).map((item, index) => (
                                    <div key={index} className="p-3 border rounded hover:bg-gray-50">
                                        <h4 className="font-medium">
                                            {item.name || item.title || item.content?.substring(0, 100)}
                                        </h4>
                                        {item.description && (
                                            <p className="text-sm text-gray-600 mt-1">
                                                {item.description.substring(0, 150)}...
                                            </p>
                                        )}
                                    </div>
                                ))}
                                {data.totalElements > 3 && (
                                    <p className="text-sm text-blue-600 cursor-pointer hover:underline">
                                        Voir tous les {data.totalElements} résultats
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b">
                    <h3 className="text-lg font-semibold">
                        {results.totalElements || results.content?.length || 0} résultats trouvés
                    </h3>
                </div>
                <div className="divide-y">
                    {(results.content || []).map((item, index) => (
                        <div key={index} className="p-4 hover:bg-gray-50">
                            <h4 className="font-medium text-blue-600">
                                {item.name || item.title || 'Sans titre'}
                            </h4>
                            {item.description && (
                                <p className="text-gray-600 mt-1">
                                    {item.description.substring(0, 200)}
                                    {item.description.length > 200 && '...'}
                                </p>
                            )}
                            {item.content && (
                                <p className="text-gray-600 mt-1">
                                    {item.content.substring(0, 200)}
                                    {item.content.length > 200 && '...'}
                                </p>
                            )}
                            <div className="flex gap-4 mt-2 text-sm text-gray-500">
                                {item.location && <span>📍 {item.location}</span>}
                                {item.category && <span>🏷️ {item.category}</span>}
                                {item.authorName && <span>👤 {item.authorName}</span>}
                                {item.startDate && <span>📅 {new Date(item.startDate).toLocaleDateString()}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    Système de Recherche UGate
                </h1>
                
                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Rechercher des syndicats, publications, événements..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {loading && (
                        <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 animate-spin" />
                    )}
                </div>

                {/* Search Type Tabs */}
                <div className="flex gap-2 mt-4">
                    {[
                        { key: 'all', label: 'Tout' },
                        { key: 'syndicates', label: 'Syndicats' },
                        { key: 'posts', label: 'Publications' },
                        { key: 'events', label: 'Événements' }
                    ].map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setSearchType(key)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                searchType === key
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Filters Toggle */}
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 mt-4 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                    <Filter className="h-4 w-4" />
                    Filtres
                    <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>

                {/* Filters Panel */}
                {showFilters && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {(searchType === 'syndicates' || searchType === 'all') && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Catégorie
                                    </label>
                                    <select
                                        value={filters.category}
                                        onChange={(e) => handleFilterChange('category', e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Toutes les catégories</option>
                                        <option value="Résidentiel">Résidentiel</option>
                                        <option value="Commercial">Commercial</option>
                                        <option value="Mixte">Mixte</option>
                                    </select>
                                </div>
                            )}
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Localisation
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ville, quartier..."
                                    value={filters.location}
                                    onChange={(e) => handleFilterChange('location', e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Trier par
                                </label>
                                <select
                                    value={`${filters.sortBy}-${filters.sortDirection}`}
                                    onChange={(e) => {
                                        const [sortBy, sortDirection] = e.target.value.split('-');
                                        handleFilterChange('sortBy', sortBy);
                                        handleFilterChange('sortDirection', sortDirection);
                                    }}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="createdAt-DESC">Plus récent</option>
                                    <option value="createdAt-ASC">Plus ancien</option>
                                    <option value="name-ASC">Nom A-Z</option>
                                    <option value="name-DESC">Nom Z-A</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={clearFilters}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                            >
                                <X className="h-4 w-4" />
                                Effacer les filtres
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Error Message */}
            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">{error}</p>
                </div>
            )}

            {/* Results */}
            {renderResults()}

            {/* No Results */}
            {!loading && query && results && !results.content?.length && searchType !== 'all' && (
                <div className="text-center py-12">
                    <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun résultat trouvé</h3>
                    <p className="text-gray-600">
                        Essayez d'ajuster vos critères de recherche ou explorez d'autres catégories.
                    </p>
                </div>
            )}

            {/* Development Info */}
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Informations de développement</h4>
                <div className="text-sm text-blue-800 space-y-1">
                    <p>• Toutes les API de recherche sont maintenant implémentées</p>
                    <p>• Pagination automatique avec {filters.size} résultats par page</p>
                    <p>• Cache automatique avec TTL de 5 minutes</p>
                    <p>• Debounce de 500ms pour optimiser les performances</p>
                    <p>• Gestion d'erreur robuste avec retry automatique</p>
                </div>
            </div>
        </div>
    );
};

export default SearchSystem;