#!/usr/bin/env node

/**
 * Script de génération du contexte complet du projet
 * Usage: node generate-project-context.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
    outputFile: 'PROJECT_CONTEXT.md',
    maxFileSize: 1024 * 1024, // 1MB par fichier
    encoding: 'utf-8',

    // Dossiers à inclure
    includeDirs: [
        'app',
        'components',
        'lib',
        'messages',
        'public'
    ],

    // Dossiers à exclure
    excludeDirs: [
        'node_modules',
        '.next',
        '.git',
        '.idea',
        'dist',
        'build',
        'coverage',
        '.claude'
    ],

    // Extensions de fichiers à inclure
    includeExtensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.json',
        '.css',
        '.scss',
        '.md',
        '.env.example',
        '.gitignore',
        '.eslintrc',
        '.prettierrc'
    ],

    // Fichiers racine importants
    rootFiles: [
        'package.json',
        'tsconfig.json',
        'next.config.js',
        'next.config.mjs',
        'tailwind.config.js',
        'tailwind.config.ts',
        'postcss.config.js',
        'README.md',
        '.env.example',
        '.eslintrc.json',
        'middleware.ts',
        'middleware.js'
    ]
};

class ProjectContextGenerator {
    constructor(config) {
        this.config = config;
        this.projectRoot = process.cwd();
        this.fileCount = 0;
        this.totalSize = 0;
        this.errors = [];
    }

    /**
     * Vérifie si un chemin doit être exclu
     */
    shouldExclude(filePath) {
        const parts = filePath.split(path.sep);
        return this.config.excludeDirs.some(excluded => parts.includes(excluded));
    }

    /**
     * Vérifie si un fichier doit être inclus
     */
    shouldIncludeFile(fileName) {
        // Vérifier l'extension
        const ext = path.extname(fileName);
        if (!ext && !this.config.rootFiles.includes(fileName)) {
            return false;
        }

        return this.config.includeExtensions.some(allowedExt =>
            fileName.endsWith(allowedExt)
        ) || this.config.rootFiles.includes(fileName);
    }

    /**
     * Lit le contenu d'un fichier de manière sécurisée
     */
    readFileSafe(filePath) {
        try {
            const stats = fs.statSync(filePath);

            // Ignorer les fichiers trop volumineux
            if (stats.size > this.config.maxFileSize) {
                this.errors.push(`Fichier trop volumineux ignoré: ${filePath} (${Math.round(stats.size / 1024)}KB)`);
                return null;
            }

            const content = fs.readFileSync(filePath, this.config.encoding);
            this.fileCount++;
            this.totalSize += stats.size;

            return content;
        } catch (error) {
            this.errors.push(`Erreur de lecture: ${filePath} - ${error.message}`);
            return null;
        }
    }

    /**
     * Parcourt récursivement un dossier
     */
    walkDirectory(dir, fileList = []) {
        try {
            const files = fs.readdirSync(dir);

            files.forEach(file => {
                const filePath = path.join(dir, file);

                // Vérifier l'exclusion
                if (this.shouldExclude(filePath)) {
                    return;
                }

                const stat = fs.statSync(filePath);

                if (stat.isDirectory()) {
                    this.walkDirectory(filePath, fileList);
                } else if (this.shouldIncludeFile(file)) {
                    const relativePath = path.relative(this.projectRoot, filePath);
                    fileList.push(relativePath);
                }
            });
        } catch (error) {
            this.errors.push(`Erreur de parcours: ${dir} - ${error.message}`);
        }

        return fileList;
    }

    /**
     * Génère la structure d'arborescence
     */
    generateTree(dir, prefix = '', isLast = true) {
        const items = [];

        try {
            const files = fs.readdirSync(dir).filter(file => {
                const filePath = path.join(dir, file);
                return !this.shouldExclude(filePath);
            });

            files.forEach((file, index) => {
                const filePath = path.join(dir, file);
                const isLastItem = index === files.length - 1;
                const connector = isLastItem ? '└── ' : '├── ';
                const stat = fs.statSync(filePath);

                items.push(`${prefix}${connector}${file}${stat.isDirectory() ? '/' : ''}`);

                if (stat.isDirectory() && this.config.includeDirs.some(d => filePath.includes(d))) {
                    const newPrefix = prefix + (isLastItem ? '    ' : '│   ');
                    items.push(...this.generateTree(filePath, newPrefix, isLastItem));
                }
            });
        } catch (error) {
            // Ignorer les erreurs de lecture de dossier
        }

        return items;
    }

    /**
     * Formate le contenu d'un fichier pour le markdown
     */
    formatFileContent(filePath, content) {
        const ext = path.extname(filePath);
        let language = '';

        // Déterminer le langage pour la coloration syntaxique
        const langMap = {
            '.js': 'javascript',
            '.jsx': 'jsx',
            '.ts': 'typescript',
            '.tsx': 'tsx',
            '.json': 'json',
            '.css': 'css',
            '.scss': 'scss',
            '.md': 'markdown',
            '.env': 'bash',
            '.gitignore': 'text'
        };

        language = langMap[ext] || 'text';

        return `
## 📄 \`${filePath}\`

\`\`\`${language}
${content}
\`\`\`
`;
    }

    /**
     * Génère le contexte complet
     */
    generate() {
        console.log('🚀 Génération du contexte du projet...\n');

        let output = `# 📦 Contexte Complet du Projet U-Gate Premium

> Généré automatiquement le ${new Date().toLocaleString('fr-FR')}

---

## 📊 Informations Générales

- **Nom du projet**: U-Gate Premium
- **Type**: Application Next.js
- **Emplacement**: \`${this.projectRoot}\`

---

## 🌳 Structure du Projet

\`\`\`
${this.projectRoot}
${this.generateTree(this.projectRoot).join('\n')}
\`\`\`

---

## 📋 Fichiers de Configuration

`;

        // Ajouter les fichiers racine
        console.log('📝 Lecture des fichiers de configuration...');
        this.config.rootFiles.forEach(fileName => {
            const filePath = path.join(this.projectRoot, fileName);
            if (fs.existsSync(filePath)) {
                const content = this.readFileSafe(filePath);
                if (content !== null) {
                    output += this.formatFileContent(fileName, content);
                }
            }
        });

        output += `\n---\n\n## 📂 Code Source\n`;

        // Parcourir et ajouter tous les fichiers
        console.log('📁 Parcours des dossiers sources...');
        const allFiles = [];

        this.config.includeDirs.forEach(dir => {
            const dirPath = path.join(this.projectRoot, dir);
            if (fs.existsSync(dirPath)) {
                console.log(`   → ${dir}/`);
                this.walkDirectory(dirPath, allFiles);
            }
        });

        // Trier les fichiers par chemin
        allFiles.sort();

        // Ajouter le contenu de chaque fichier
        console.log(`\n📖 Lecture de ${allFiles.length} fichiers...\n`);

        allFiles.forEach((filePath, index) => {
            const fullPath = path.join(this.projectRoot, filePath);
            const content = this.readFileSafe(fullPath);

            if (content !== null) {
                output += this.formatFileContent(filePath, content);

                // Afficher la progression
                if ((index + 1) % 10 === 0) {
                    console.log(`   ✓ ${index + 1}/${allFiles.length} fichiers traités`);
                }
            }
        });

        // Ajouter les statistiques
        output += `\n---\n\n## 📈 Statistiques

- **Fichiers traités**: ${this.fileCount}
- **Taille totale**: ${Math.round(this.totalSize / 1024)}KB
- **Date de génération**: ${new Date().toLocaleString('fr-FR')}
`;

        // Ajouter les erreurs si présentes
        if (this.errors.length > 0) {
            output += `\n---\n\n## ⚠️ Erreurs et Avertissements\n\n`;
            this.errors.forEach(error => {
                output += `- ${error}\n`;
            });
        }

        // Écrire le fichier de sortie
        const outputPath = path.join(this.projectRoot, this.config.outputFile);
        fs.writeFileSync(outputPath, output, this.config.encoding);

        console.log(`\n✅ Contexte généré avec succès!`);
        console.log(`📄 Fichier: ${outputPath}`);
        console.log(`📊 ${this.fileCount} fichiers traités`);
        console.log(`💾 Taille totale: ${Math.round(this.totalSize / 1024)}KB`);

        if (this.errors.length > 0) {
            console.log(`⚠️  ${this.errors.length} avertissement(s)`);
        }
    }
}

// Exécution du script
try {
    const generator = new ProjectContextGenerator(CONFIG);
    generator.generate();
} catch (error) {
    console.error('❌ Erreur fatale:', error.message);
    process.exit(1);
}