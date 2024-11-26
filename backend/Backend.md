# API Backend Express

Ce projet est une API REST construite avec Express.js, intégrant plusieurs middlewares essentiels pour la sécurité et le développement.

## 📦 Dépendances

### Dépendances Principales

#### Express
- **Package**: `express`
- **Version**: ^4.18.2
- **Description**: Framework web rapide et minimaliste pour Node.js
- **Utilisation**:
  - Gestion des routes API
  - Middleware de parsing (JSON, URL-encoded)
  - Gestion des requêtes HTTP
  - Système de middleware extensible
```javascript
const express = require('express');
const app = express();
app.use(express.json()); // Pour parser le JSON
```

#### Variables d'Environnement
- **Package**: `dotenv`
- **Version**: ^16.0.3
- **Description**: Charge les variables d'environnement depuis un fichier .env
- **Utilisation**:
  - Stockage sécurisé des configurations
  - Séparation des environnements (dev/prod)
  - Protection des informations sensibles
```javascript
require('dotenv').config();
const port = process.env.PORT || 3000;
```

#### Sécurité CORS
- **Package**: `cors`
- **Version**: ^2.8.5
- **Description**: Middleware pour la gestion du Cross-Origin Resource Sharing
- **Utilisation**:
  - Sécurisation des requêtes cross-origin
  - Configuration des domaines autorisés
  - Gestion des en-têtes CORS
```javascript
const cors = require('cors');
app.use(cors()); // Configuration basique
```

#### Protection de l'API
- **Package**: `helmet`
- **Version**: ^6.0.1
- **Description**: Collection de middlewares de sécurité
- **Utilisation**:
  - Protection XSS
  - Sécurisation des en-têtes HTTP
  - Prévention du clickjacking
```javascript
const helmet = require('helmet');
app.use(helmet());
```

#### Logging
- **Package**: `morgan`
- **Version**: ^1.10.0
- **Description**: Middleware de logging HTTP
- **Utilisation**:
  - Journalisation des requêtes
  - Suivi des temps de réponse
  - Debugging en développement
```javascript
const morgan = require('morgan');
app.use(morgan('dev')); // Format de log 'dev'
```

### Dépendances de Développement

#### Nodemon
- **Package**: `nodemon`
- **Version**: ^2.0.20
- **Description**: Utilitaire qui surveille les changements dans les fichiers
- **Utilisation**:
  - Redémarrage automatique du serveur
  - Hot-reloading en développement
  - Amélioration du workflow de développement
```javascript
// Dans package.json
{
  "scripts": {
    "dev": "nodemon src/app.js"
  }
}
```

## 🚀 Installation

1. Cloner le projet
```bash
git clone [url-du-projet]
cd [nom-du-projet]
```

2. Installer les dépendances
```bash
npm install
```

3. Créer un fichier .env
```env
PORT=3000
NODE_ENV=development
```

4. Lancer le serveur
```bash
# Mode développement
npm run dev

# Mode production
npm start
```

## 📁 Structure du Projet

```
.
├── src/
│   ├── controllers/    # Logique métier
│   ├── middleware/     # Middlewares personnalisés
│   ├── routes/         # Définition des routes
│   └── app.js         # Point d'entrée de l'application
├── .env               # Variables d'environnement
└── package.json       # Dépendances et scripts
```

## 🔒 Sécurité

Cette API inclut plusieurs couches de sécurité :
- Protection XSS via Helmet
- Gestion CORS sécurisée
- Variables d'environnement pour les données sensibles
- Validation des entrées (à implémenter selon les besoins)

## 📝 Scripts NPM

- `npm start`: Lance le serveur en mode production
- `npm run dev`: Lance le serveur en mode développement avec nodemon

## Create table 

```
  npm run migrate create user
  npm run migrate up
```