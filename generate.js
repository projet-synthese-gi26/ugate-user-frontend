const fs = require('fs');
const path = require('path');

class NextJSContextGenerator {
  constructor(projectRoot = process.cwd()) {
    this.projectRoot = projectRoot;
    this.context = {
      projectInfo: {},
      structure: {},
      components: [],
      pages: [],
      api: [],
      hooks: [],
      utils: [],
      types: [],
      config: {},
      dependencies: {},
      styles: []
    };
  }

  shouldIgnoreFile(filePath) {
    const ignoredPatterns = [
      'node_modules', '.next', '.git', 'dist', 'build', '.DS_Store',
      'coverage', '.nyc_output', '.cache', 'public/static', 'yarn.lock',
      'package-lock.json', '.gitignore', '.eslintcache'
    ];
    return ignoredPatterns.some(pattern => filePath.includes(pattern));
  }

  isRelevantFile(filePath) {
    const relevantExtensions = [
      '.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.css', '.scss',
      '.sass', '.less', '.module.css', '.config.js', '.config.ts',
      '.env.local', '.env.example', '.env'
    ];
    return relevantExtensions.some(ext => filePath.endsWith(ext));
  }

  readFileContent(filePath) {
    try {
      return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
      console.warn(`Impossible de lire le fichier: ${filePath}`);
      return '';
    }
  }

  analyzeProjectStructure(dirPath = this.projectRoot, level = 0) {
    const items = [];
    try {
      const files = fs.readdirSync(dirPath);
      files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const relativePath = path.relative(this.projectRoot, filePath);
        if (this.shouldIgnoreFile(relativePath)) return;
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          items.push({
            type: 'directory',
            name: file,
            path: relativePath,
            children: this.analyzeProjectStructure(filePath, level + 1)
          });
        } else if (this.isRelevantFile(file)) {
          items.push({
            type: 'file',
            name: file,
            path: relativePath,
            size: stat.size,
            extension: path.extname(file)
          });
        }
      });
    } catch (error) {
      console.warn(`Erreur lors de l'analyse du répertoire: ${dirPath}`);
    }
    return items;
  }

  analyzeComponents() {
    const componentDirs = ['components', 'src/components', 'app/components', 'lib/components'];
    componentDirs.forEach(dir => {
      const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {
        this.scanDirectory(fullPath, this.extractComponentInfo.bind(this), this.context.components);
      }
    });
  }

  extractComponentInfo(content, filePath) {
    const relativePath = path.relative(this.projectRoot, filePath);
    const componentNameMatch = content.match(/export\s+(?:default\s+)?(?:function|const)\s+([A-Z]\w*)/) || content.match(/const\s+([A-Z]\w*)\s*=\s*\(/);
    const componentName = componentNameMatch ? componentNameMatch[1] : path.basename(filePath, path.extname(filePath));

    const propsMatch = content.match(/(?:function\s+\w+\s*\(|const\s+\w+\s*=\s*\({?)([^)}\n]*)/);
    const props = propsMatch ? propsMatch[1].trim().replace(/{|}/g, '').trim() : '';
    const imports = (content.match(/import\s+.*?from\s+['"].*?['"]/g) || []);
    const hooks = (content.match(/use[A-Z]\w*/g) || []);
    const isServerComponent = !content.includes('use client');

    return {
      name: componentName,
      path: relativePath,
      props: props || 'N/A',
      imports,
      hooks: [...new Set(hooks)],
      isServerComponent,
      hasState: content.includes('useState') || content.includes('useReducer'),
      hasEffects: content.includes('useEffect') || content.includes('useLayoutEffect'),
      content
    };
  }

  analyzePages() {
    const pageDirs = {
      'app': ['app', 'src/app'],
      'pages': ['pages', 'src/pages']
    };

    pageDirs.app.forEach(dir => {
        const fullPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(fullPath)) {
            this.scanAppRouter(fullPath);
        }
    });

    pageDirs.pages.forEach(dir => {
        const fullPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(fullPath)) {
            this.scanPagesRouter(fullPath, 'pages');
        }
    });
  }
  
  scanAppRouter(dirPath) {
      const files = fs.readdirSync(dirPath);
      files.forEach(file => {
          const filePath = path.join(dirPath, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory()) {
              this.scanAppRouter(filePath);
          } else if (file.match(/^(page|layout|loading|error|not-found|template|default)\.(jsx?|tsx?)$/)) {
              const content = this.readFileContent(filePath);
              this.context.pages.push(this.extractAppRouterPageInfo(content, filePath));
          }
      });
  }

  scanPagesRouter(dirPath, baseDir) {
      const files = fs.readdirSync(dirPath);
      files.forEach(file => {
          const filePath = path.join(dirPath, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory()) {
              // Modifié pour ignorer 'api' dans pages, mais pas dans d'autres structures
              if (path.join(this.projectRoot, baseDir, 'api') !== filePath) {
                this.scanPagesRouter(filePath, baseDir);
              }
          } else if (file.match(/\.(jsx?|tsx?)$/) && !file.startsWith('_')) {
              const content = this.readFileContent(filePath);
              this.context.pages.push(this.extractPagesRouterPageInfo(content, filePath));
          }
      });
  }

  formatRoute(relativePath, baseDir) {
    let route = relativePath
      .replace(new RegExp(`^(${baseDir.replace(/[/\\]/g, '[/\\\\]')}|src[\\/\\\\]${baseDir.replace(/[/\\]/g, '[/\\\\]')})\\/?`), '')
      .replace(/\.(jsx?|tsx?|ts|js)$/, '')
      .replace(/\/index$/, '')
      .replace(/\/page$/, '')
      .replace(/\/layout$/, '')
      .replace(/\/\([^)]+\)/g, '') // Remove route groups
      .replace(/\[\[\.\.\.([^\]]+)\]\]/g, ':[[$1]]') // Optional catch-all
      .replace(/\[\.\.\.([^\]]+)\]/g, ':[...$1]') // Catch-all
      .replace(/\[([^\]]+)\]/g, ':$1'); // Dynamic
    return route === '' ? '/' : `/${route}`;
  }

  extractAppRouterPageInfo(content, filePath) {
    const relativePath = path.relative(this.projectRoot, filePath);
    const route = this.formatRoute(relativePath, 'app');
    const fileType = path.basename(filePath).split('.')[0];
    return {
      path: relativePath,
      route: route,
      type: fileType,
      isAppRouter: true,
      isServerComponent: !content.includes('use client'),
      hasMetadata: content.includes('export const metadata') || content.includes('generateMetadata'),
      hasStaticParams: content.includes('generateStaticParams'),
      content
    };
  }

  extractPagesRouterPageInfo(content, filePath) {
    const relativePath = path.relative(this.projectRoot, filePath);
    const route = this.formatRoute(relativePath, 'pages');
    return {
      path: relativePath,
      route: route,
      type: 'page',
      isAppRouter: false,
      hasGetStaticProps: content.includes('getStaticProps'),
      hasGetServerSideProps: content.includes('getServerSideProps'),
      hasGetStaticPaths: content.includes('getStaticPaths'),
      content
    };
  }

  analyzeAPI() {
    // MODIFICATION 1: Ajout de 'src/lib/api' à la liste des répertoires à scanner.
    const apiDirs = ['pages/api', 'src/pages/api', 'app/api', 'src/app/api', 'src/lib/api'];
    apiDirs.forEach(dir => {
      const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {
        this.scanDirectory(fullPath, this.extractAPIInfo.bind(this), this.context.api);
      }
    });
  }

  extractAPIInfo(content, filePath) {
    const relativePath = path.relative(this.projectRoot, filePath);
    let baseDir = '';

    // MODIFICATION 2: Ajout d'une condition pour votre structure personnalisée.
    // Ceci permet de générer correctement la route (ex: /api/users au lieu de /api/src/lib/api/users)
    if (relativePath.includes('app/api')) {
        baseDir = 'app/api';
    } else if (relativePath.includes('pages/api')) {
        baseDir = 'pages/api';
    } else if (relativePath.includes('src/lib/api')) {
        baseDir = 'src/lib/api';
    }
    
    // Le formatage suppose que tout ce qui est dans '.../api' est préfixé par /api.
    const route = `/api${this.formatRoute(relativePath, baseDir).replace('/route', '')}`;
    
    // Pour les fichiers qui ne sont pas des routes Next.js (comme dans src/lib/api), 
    // on peut chercher les fonctions exportées.
    const methodRegexAppRouter = /export\s+async\s+function\s+(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS)\s*\(/g;
    const methodRegexFunctions = /export\s+(?:async\s+)?(?:function|const)\s+(\w+)\s*=/g;
    
    const methods = [];
    let match;

    while ((match = methodRegexAppRouter.exec(content)) !== null) {
      methods.push(match[1]);
    }
    
    // Si aucune méthode de l'App Router n'est trouvée, on cherche des fonctions exportées classiques
    if (methods.length === 0) {
        while ((match = methodRegexFunctions.exec(content)) !== null) {
          methods.push(match[1]); // ex: 'getUsers', 'createUser'
        }
    }
    
    return { 
        path: relativePath, 
        route: route, // La route peut être conceptuelle ici, représentant le chemin d'accès
        methods: methods.length > 0 ? methods : ['(fonctions exportées)'], 
        content 
    };
  }

  analyzeHooks() {
    const hookDirs = ['hooks', 'src/hooks', 'lib/hooks'];
    hookDirs.forEach(dir => {
      const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {
        this.scanDirectory(fullPath, this.extractHookInfo.bind(this), this.context.hooks, /^use.*\.(js|ts)x?$/);
      }
    });
  }
  
  extractHookInfo(content, filePath) {
      const relativePath = path.relative(this.projectRoot, filePath);
      const hookName = path.basename(filePath, path.extname(filePath));
      return { name: hookName, path: relativePath, content };
  }

  analyzeTypes() {
    const typeDirs = ['types', 'src/types', 'lib/types', 'interfaces'];
    typeDirs.forEach(dir => {
      const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {
        this.scanDirectory(fullPath, (content, filePath) => ({
            name: path.basename(filePath),
            path: path.relative(this.projectRoot, filePath),
            content,
        }), this.context.types, /\.(ts|d\.ts)$/);
      }
    });
  }
  
  analyzeStyles() {
    const styleDirs = ['styles', 'src/styles', 'css', 'app'];
    styleDirs.forEach(dir => {
      const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {
        this.scanDirectory(fullPath, (content, filePath) => ({
            name: path.basename(filePath),
            path: path.relative(this.projectRoot, filePath),
            content,
        }), this.context.styles, /\.(css|scss|sass|less)$/);
      }
    });
  }

  scanDirectory(dirPath, extractor, contextArray, fileRegex = /\.(js|ts)x?$/) {
      if (!fs.existsSync(dirPath)) return;
      const files = fs.readdirSync(dirPath);
      files.forEach(file => {
          const filePath = path.join(dirPath, file);
          const stat = fs.statSync(filePath);
          if (this.shouldIgnoreFile(filePath)) return;
          if (stat.isDirectory()) {
              this.scanDirectory(filePath, extractor, contextArray, fileRegex);
          } else if (file.match(fileRegex)) {
              const content = this.readFileContent(filePath);
              if (content) {
                  const info = extractor(content, filePath);
                  if (info) contextArray.push(info);
              }
          }
      });
  }

  analyzeConfig() {
    const configFiles = [
      'package.json', 'next.config.js', 'next.config.mjs', 'tailwind.config.ts',
      'tailwind.config.js', 'tsconfig.json', '.eslintrc.json', '.eslintrc.js',
      'postcss.config.js', 'prettier.config.js', '.prettierrc'
    ];
    configFiles.forEach(file => {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        this.context.config[file] = this.readFileContent(filePath);
      }
    });
  }
  
  analyzeDependencies() {
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(this.readFileContent(packageJsonPath));
        this.context.dependencies = {
          dependencies: packageJson.dependencies || {},
          devDependencies: packageJson.devDependencies || {}
        };
      } catch (error) {
        console.warn('Erreur lors de l\'analyse du package.json');
      }
    }
  }

  generateStructureText(items, level = 0) {
    let text = '';
    const indent = '  '.repeat(level);
    items.forEach(item => {
      if (item.type === 'directory') {
        text += `${indent}📁 ${item.name}/\n`;
        if (item.children && item.children.length > 0) {
          text += this.generateStructureText(item.children, level + 1);
        }
      } else {
        text += `${indent}${this.getFileEmoji(item.extension)} ${item.name}\n`;
      }
    });
    return text;
  }

  getFileEmoji(extension) {
    const emojiMap = {
      '.js': '📜', '.jsx': '⚛️', '.ts': '📘', '.tsx': '⚛️', '.json': '📋',
      '.md': '📝', '.css': '🎨', '.scss': '🎨', '.sass': '🎨', '.less': '🎨',
      '.env': '🔐', '.config.js': '⚙️', '.mjs': '⚙️', '.ts': '⚙️'
    };
    return emojiMap[extension] || '📄';
  }

  generateMarkdown() {
    let markdown = '# Contexte de l\'application Next.js\n\n';
    markdown += `## Informations générales\n\n- **Date de génération**: ${new Date().toLocaleString()}\n\n`;
    markdown += `## Structure du projet\n\n\`\`\`\n${this.generateStructureText(this.context.structure)}\`\`\`\n\n`;

    if (this.context.dependencies.dependencies) {
      markdown += '## Dépendances\n\n### Dependencies\n';
      Object.entries(this.context.dependencies.dependencies).forEach(([n, v]) => markdown += `- ${n}: ${v}\n`);
      markdown += '\n### Dev Dependencies\n';
      Object.entries(this.context.dependencies.devDependencies).forEach(([n, v]) => markdown += `- ${n}: ${v}\n`);
      markdown += '\n';
    }

    if (Object.keys(this.context.config).length > 0) {
      markdown += '## Fichiers de configuration\n\n';
      Object.entries(this.context.config).forEach(([file, content]) => {
        const lang = file.endsWith('.js') || file.endsWith('.ts') ? 'javascript' : 'json';
        markdown += `### ${file}\n\n\`\`\`${lang}\n${content}\n\`\`\`\n\n`;
      });
    }
    
    const renderPages = (title, pages) => {
        if (pages.length === 0) return;
        markdown += `## ${title}\n\n`;
        pages.forEach(page => {
            markdown += `### ${page.route} (${page.type})\n\n`;
            markdown += `- **Fichier**: \`${page.path}\`\n`;
            if (page.isAppRouter) {
                markdown += `- **Type**: App Router, ${page.isServerComponent ? 'Composant Serveur' : 'Composant Client'}\n`;
                if (page.hasMetadata) markdown += `- **Metadata**: Oui\n`;
            } else {
                markdown += `- **Type**: Pages Router\n`;
                if (page.hasGetStaticProps) markdown += `- **Data-fetching**: getStaticProps\n`;
                if (page.hasGetServerSideProps) markdown += `- **Data-fetching**: getServerSideProps\n`;
            }
            markdown += `\n\`\`\`${page.path.endsWith('tsx') ? 'tsx' : 'jsx'}\n${page.content}\n\`\`\`\n\n`;
        });
    };
    renderPages('Pages, Layouts & Routes', this.context.pages);

    if (this.context.api.length > 0) {
      markdown += '## Routes & Logique API\n\n';
      this.context.api.forEach(api => {
        markdown += `### \`${api.route}\`\n\n- **Fichier**: \`${api.path}\`\n- **Fonctions/Méthodes exportées**: ${api.methods.length > 0 ? api.methods.join(', ') : 'N/A'}\n\n`;
        markdown += `\`\`\`typescript\n${api.content}\n\`\`\`\n\n`;
      });
    }
    
    const renderSection = (title, items, lang, details = () => '') => {
        if (items.length === 0) return;
        markdown += `## ${title}\n\n`;
        items.forEach(item => {
            markdown += `### ${item.name}\n\n- **Fichier**: \`${item.path}\`\n${details(item)}`;
            markdown += `\`\`\`${lang(item)}\n${item.content}\n\`\`\`\n\n`;
        });
    };

    renderSection('Composants', this.context.components, item => item.path.endsWith('tsx') ? 'tsx' : 'jsx', item => `- **Props**: \`${item.props}\`\n- **Hooks**: ${item.hooks.join(', ')}\n`);
    renderSection('Hooks personnalisés', this.context.hooks, item => item.path.endsWith('ts') ? 'typescript' : 'javascript');
    renderSection('Types TypeScript', this.context.types, () => 'typescript');
    renderSection('Fichiers de Style', this.context.styles, () => 'css');

    return markdown;
  }

  async generate() {
    console.log('🚀 Génération du contexte de l\'application Next.js...');
    console.log('📁 Analyse de la structure du projet...');
    this.context.structure = this.analyzeProjectStructure();
    console.log('📦 Analyse des dépendances...');
    this.analyzeDependencies();
    console.log('⚙️ Analyse de la configuration...');
    this.analyzeConfig();
    console.log('📄 Analyse des pages et layouts...');
    this.analyzePages();
    console.log('🔌 Analyse des routes API...');
    this.analyzeAPI();
    console.log('⚛️ Analyse des composants...');
    this.analyzeComponents();
    console.log('🎣 Analyse des hooks personnalisés...');
    this.analyzeHooks();
    console.log('📘 Analyse des types TypeScript...');
    this.analyzeTypes();
    console.log('🎨 Analyse des styles...');
    this.analyzeStyles();
    
    console.log('📝 Génération du fichier markdown...');
    const markdown = this.generateMarkdown();
    const outputPath = path.join(this.projectRoot, 'nextjs-context.md');
    fs.writeFileSync(outputPath, markdown, 'utf8');
    
    console.log(`✅ Contexte généré avec succès: ${outputPath}`);
    console.log('📊 Statistiques:');
    console.log(`   - Pages & Layouts: ${this.context.pages.length}`);
    console.log(`   - Routes API & Logique: ${this.context.api.length}`);
    console.log(`   - Composants: ${this.context.components.length}`);
    console.log(`   - Hooks: ${this.context.hooks.length}`);
    console.log(`   - Fichiers de style: ${this.context.styles.length}`);
    
    return outputPath;
  }
}

if (require.main === module) {
  const generator = new NextJSContextGenerator();
  generator.generate().catch(console.error);
}

module.exports = NextJSContextGenerator;