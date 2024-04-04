Crowdfunding Web App

Overview

Cette application web de crowdfunding permet aux utilisateurs de créer et de soutenir des projets en collectant des fonds auprès de la communauté. 
Les créateurs de projet peuvent publier des descriptions détaillées de leurs projets, fixer des objectifs de financement et des dates limite de contributions. 
Les contributeurs peuvent explorer les projets, effectuer des contributions financières et interagir avec d'autres membres grace aux commentaires.

Features

Création de projet: Les utilisateurs peuvent créer de nouveaux projets en fournissant des informations telles que le titre, la description, le montant cible et la durée du financement.
Exploration de projets: Les utilisateurs peuvent parcourir une liste de projets existants pour découvrir des initiatives intéressantes à soutenir.
Contribution financière: Les utilisateurs peuvent soutenir les projets en effectuant des contributions financières via différents modes de paiement.
Suivi des contributions: Les créateurs de projet peuvent suivre les contributions en temps réel et surveiller la progression vers l'objectif de financement.
Commentaires et interaction sociale: Les utilisateurs peuvent laisser des commentaires sur les projets, interagir avec d'autres contributeurs et partager des projets sur les réseaux sociaux.

Technologies utilisées

    Frontend: React.js, React Router, Tailwind CSS
    Backend: Node.js, Express.js
    Base de données: MongoDB
    Authentification: JSON Web Tokens (JWT)
    Intégration de paiement: CinetPay API, Visa API

Installation

    Cloner le dépôt GitHub :

bash

git clone https://github.com/votre_utilisateur/crowdfunding-web-app.git

    Accéder au répertoire du projet :

bash

cd crowdfunding-web-app

    Installer les dépendances du frontend et du backend :

bash

cd client
npm install

cd ..
cd server
npm install

    Configurer les variables d'environnement :
        Créer un fichier .env dans le répertoire client et définir les variables d'environnement nécessaires pour le frontend.
        Créer un fichier .env dans le répertoire server et définir les variables d'environnement nécessaires pour le backend.

    Démarrer le frontend et le backend :

bash

cd client
npm start

cd ..
cd server
npm start

