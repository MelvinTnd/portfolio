# Portfolio Moderne

Un portfolio moderne et responsive développé avec React, Bootstrap et Framer Motion.

## 🚀 Fonctionnalités

- **Design moderne et épuré** avec des animations fluides
- **Responsive** - Compatible avec tous les appareils
- **Sections complètes** :
  - Hero avec animation de texte
  - À propos avec timeline interactive
  - Compétences avec graphiques animés
  - Projets avec filtres et modales
  - Contact avec formulaire fonctionnel
- **Animations** avec Framer Motion
- **Optimisé** pour le déploiement GitHub Pages

## 🛠️ Technologies utilisées

- **React 19** - Framework JavaScript
- **Bootstrap 5** - Framework CSS
- **React Bootstrap** - Composants Bootstrap pour React
- **Framer Motion** - Animations
- **React Icons** - Icônes
- **CSS3** - Styles personnalisés

## 📦 Installation

1. Clonez le repository :
```bash
git clone https://github.com/votrenom/portfolio.git
cd portfolio
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm start
```

Le site sera accessible sur `http://localhost:3000`

## 🚀 Déploiement sur GitHub Pages

1. Installez gh-pages :
```bash
npm install --save-dev gh-pages
```

2. Déployez :
```bash
npm run deploy
```

## 📁 Structure du projet

```
src/
├── components/
│   ├── common/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   └── sections/
│       ├── Hero.js
│       ├── About.js
│       ├── Skills.js
│       ├── Projects.js
│       └── Contact.js
├── assets/
├── App.js
├── App.css
├── index.js
└── index.css
```

## 🎨 Personnalisation

### Couleurs
Modifiez les variables CSS dans `src/index.css` :
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  /* ... */
}
```

### Contenu
- **Hero** : Modifiez le nom et la description dans `src/components/sections/Hero.js`
- **À propos** : Personnalisez le contenu dans `src/components/sections/About.js`
- **Projets** : Ajoutez vos projets dans `src/components/sections/Projects.js`
- **Contact** : Mettez à jour les informations de contact dans `src/components/sections/Contact.js`

### Images
Placez vos images dans le dossier `src/assets/images/` et mettez à jour les références dans les composants.

## 📱 Responsive Design

Le portfolio est entièrement responsive et s'adapte à :
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## ⚡ Performance

- Optimisé pour le chargement rapide
- Images optimisées
- Code minifié en production
- Lazy loading des composants

## 🔧 Scripts disponibles

- `npm start` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm test` - Lance les tests
- `npm run deploy` - Déploie sur GitHub Pages

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commit vos changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📞 Contact

- Email : contact@votrenom.com
- LinkedIn : [Votre profil LinkedIn]
- GitHub : [Votre profil GitHub]

---

Fait avec ❤️ par [Melvin]