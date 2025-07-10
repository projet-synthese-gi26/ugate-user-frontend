# === Étape 1: Installation des dépendances ===
# On utilise une image node complète pour éviter les problèmes de compilation de certaines dépendances
FROM node:18-alpine AS deps
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer TOUTES les dépendances (y compris devDependencies pour le build)
# On utilise npm ci pour une installation rapide et reproductible
RUN npm ci

# === Étape 2: Build de l'application ===
# On utilise une nouvelle étape pour le build, en copiant les dépendances de l'étape précédente
FROM node:18-alpine AS builder
WORKDIR /app

# Copier les dépendances installées depuis l'étape 'deps'
COPY --from=deps /app/node_modules ./node_modules
# Copier le reste du code de l'application
COPY . .

# Lancer le build de Next.js.
# Tailwind, PostCSS etc. sont maintenant disponibles
RUN npm run build


# === Étape 3: Étape de production finale ===
# On repart d'une image alpine fraîche pour une taille minimale
FROM node:18-alpine AS runner
WORKDIR /app

# Créer un utilisateur non-root pour la sécurité
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copier les fichiers nécessaires depuis l'étape 'builder'
# On copie uniquement ce qui est nécessaire pour l'exécution, pas le code source
COPY --from=builder /app/public ./public
# La configuration `standalone` de Next.js est géniale pour Docker.
# Elle copie le dossier .next/standalone qui contient le serveur et les dépendances nécessaires.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Passer à l'utilisateur non-root
USER nextjs

EXPOSE 3000

# Définir la variable d'environnement pour le port
ENV PORT 3000

# La commande pour démarrer le serveur Next.js en mode standalone
CMD ["node", "server.js"]