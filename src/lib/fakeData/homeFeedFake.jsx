// src/lib/fakeData/homeFeedFake.js

// Données factices pour le fil d'actualité de la page d'accueil.
// Chaque item a maintenant un type ('publication' ou 'event') et un contexte (syndicat/branch).

export const homeFeedFakeData = [
  {
    type: 'publication',
    id: 'pub1',
    syndicat: {
      id: 'syn1',
      name: 'Syndicat National des Développeurs',
      logoUrl: null, // Test du fallback avatar
    },
    branch: {
      id: 'branch1',
      name: 'Antenne de Douala'
    },
    author: {
      name: 'Jean Dupont',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    content: "Excellente nouvelle ! Suite à nos discussions avec le GICAM, nous avons obtenu une revalorisation significative de la grille salariale pour les développeurs juniors et intermédiaires. Plus de détails seront partagés lors de la réunion de vendredi.",
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&q=80&w=800',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // Il y a 2 heures
    likes: 128,
    comments: 15,
  },
  {
    type: 'event',
    id: 'evt1',
    syndicat: {
      id: 'syn2',
      name: 'Union des Travailleurs de la Santé',
      logoUrl: '/syndicate-logos/logo-uts.png', // Chemin d'image exemple
    },
    branch: {
      id: 'branch3',
      name: 'Hôpital Laquintinie'
    },
    title: "Assemblée Générale Annuelle",
    description: "Ordre du jour : élection du nouveau bureau, bilan financier de l'année écoulée et perspectives pour 2026. Votre présence est cruciale pour l'avenir de notre union.",
    startDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // Dans 5 jours
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000).toISOString(), // Durée de 3h
    location: "Salle de conférence, Hôpital Laquintinie",
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&q=80&w=800',
    author: { name: 'Marie Claire N.', avatar: 'https://i.pravatar.cc/150?img=5' },
    participants: 76,
  },
  {
    type: 'publication',
    id: 'pub2',
    syndicat: {
      id: 'syn3',
      name: 'Fédération des Enseignants du Supérieur',
      logoUrl: '/syndicate-logos/logo-fes.png',
    },
    branch: {
      id: 'branch5',
      name: 'Université de Yaoundé I'
    },
    author: {
      name: 'Prof. Anicet K.',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    content: "Rappel : La date limite pour la soumission des dossiers de candidature pour les bourses de recherche est fixée au 30 juillet 2025. Aucun dossier ne sera accepté après cette date. Encourageons nos jeunes chercheurs !",
    image: null, // Publication sans image
    createdAt: new Date(Date.now() - 22 * 60 * 60 * 1000).toISOString(), // Il y a 22 heures
    likes: 45,
    comments: 7,
  },
  {
    type: 'event',
    id: 'evt2',
    syndicat: {
      id: 'syn1',
      name: 'Syndicat National des Développeurs',
      logoUrl: null,
    },
    branch: {
      id: 'branch2',
      name: 'Antenne de Yaoundé'
    },
    title: "Workshop : Introduction à Rust & WebAssembly",
    description: "Découvrez la puissance de Rust pour le développement web haute performance. Cet atelier pratique vous guidera à travers la création de votre premier module WebAssembly.",
    startDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000).toISOString(), // Dans 12 jours
    endDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000).toISOString(),
    location: "ActivSpaces, Bonanjo",
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&q=80&w=800',
    author: { name: 'Cédric T.', avatar: 'https://i.pravatar.cc/150?img=8' },
    participants: 32,
  },
  {
    type: 'publication',
    id: 'pub3',
    syndicat: {
      id: 'syn2',
      name: 'Union des Travailleurs de la Santé',
      logoUrl: '/syndicate-logos/logo-uts.png',
    },
    branch: {
      id: 'branch4',
      name: 'Hôpital Général de Douala'
    },
    author: {
      name: 'Dr. Elise F.',
      avatar: 'https://i.pravatar.cc/150?img=25'
    },
    content: "Une nouvelle prime de risque a été validée pour le personnel soignant en contact direct avec les zones d'épidémie. C'est une victoire pour notre sécurité et une reconnaissance de notre engagement.",
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&q=80&w=800',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // Il y a 2 jours
    likes: 250,
    comments: 41,
  },
].sort((a, b) => new Date(b.createdAt || b.startDate) - new Date(a.createdAt || a.startDate));
// On trie par date pour que le fil soit chronologique