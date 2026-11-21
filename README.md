CampusMarket – La Marketplace des Étudiants

CampusMarket est une application web qui permet aux étudiants d'acheter et de vendre des articles d'occasion au sein de leur communauté universitaire. Elle centralise les annonces et facilite les échanges entre étudiants.

Présentation du projet

Les étudiants possèdent souvent des objets qu'ils n'utilisent plus, tels que des livres universitaires, des calculatrices, du matériel informatique, des vêtements ou des accessoires.

CampusMarket propose une plateforme simple et intuitive permettant de publier, consulter et gérer des annonces de vente.

Objectifs

- Développer une application Front-End avec Angular.
- Créer un serveur Back-End avec Node.js et Express.js.
- Concevoir une API REST.
- Connecter l'application à MongoDB.
- Implémenter les opérations CRUD.
- Utiliser les formulaires Angular.
- Communiquer avec l'API REST via HttpClient.
- Gérer la validation des données et les erreurs.

Technologies utilisées

Technologie| Rôle
Angular| Interface utilisateur
Node.js| Environnement d'exécution Back-End
Express.js| Création du serveur et des routes API
MongoDB| Base de données
Mongoose| Modélisation et communication avec MongoDB
HttpClient| Communication Angular/API REST
CSS / Bootstrap| Mise en forme de l'interface

Fonctionnalités principales

Affichage des annonces

La page d'accueil affiche les annonces sous forme de cartes contenant :

- Image de l'article.
- Titre de l'annonce.
- Catégorie.
- Prix en dinars tunisiens (TND).
- État de l'article : Neuf ou Occasion.
- Nom du vendeur.
- Bouton « Voir détails ».

Gestion des annonces (CRUD)

- Create : Ajouter une nouvelle annonce.
- Read : Consulter les annonces disponibles.
- Update : Modifier une annonce.
- Delete : Supprimer une annonce.

Architecture du projet

Le projet est organisé en deux parties principales :

CampusMarket/
│
├── frontend/              # Application Angular
│   ├── src/
│   └── package.json
│
├── backend/               # Serveur Node.js / Express
│   ├── models/             # Modèles Mongoose
│   ├── routes/             # Routes API REST
│   ├── controllers/        # Logique métier
│   ├── config/             # Configuration MongoDB
│   ├── server.js
│   └── package.json
│
└── README.md

Installation et exécution

1. Cloner le repository

git clone https://github.com/USERNAME/CampusMarket.git
cd CampusMarket

2. Installer et lancer le Backend

cd backend
npm install
npm start

3. Installer et lancer le Frontend

Dans un nouveau terminal :

cd frontend
npm install
ng serve

Ouvrir ensuite :

http://localhost:4200

4. Configuration de MongoDB

Créer une base de données MongoDB et configurer la variable d'environnement "MONGO_URI" dans un fichier ".env" du Backend.

Exemple :

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/campusmarket

API REST

Méthode| Endpoint| Description
GET| "/api/annonces"| Récupérer toutes les annonces
GET| "/api/annonces/:id"| Récupérer une annonce
POST| "/api/annonces"| Ajouter une annonce
PUT| "/api/annonces/:id"| Modifier une annonce
DELETE| "/api/annonces/:id"| Supprimer une annonce

Auteur

Projet universitaire – MEAN Stack

Année universitaire : 2025/2026

---

CampusMarket – Donner une seconde vie aux objets étudiants !