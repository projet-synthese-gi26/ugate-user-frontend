import { redirect } from 'next/navigation';

export default function RootPage() {
  // Le middleware next-intl gère déjà la redirection,
  // mais ce fichier évite tout conflit de routing
  redirect('/fr');
}