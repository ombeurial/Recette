Projet de Liste de Recettes
Ce projet est une application web qui permet aux utilisateurs de parcourir une liste de recettes, d'ajouter de nouvelles recettes et de gérer leurs favoris. L'application est construite en utilisant React et le routage de React Router.

Fonctionnalités
Liste de Recettes: Les utilisateurs peuvent parcourir une liste de recettes provenant d'une API externe (TheMealDB). Les recettes sont affichées sous forme de cartes avec des informations de base telles que le nom et une image.

Détail de la Recette: En cliquant sur une recette, les utilisateurs peuvent voir les détails complets de la recette, y compris les instructions de préparation.

Ajout de Recettes: Les utilisateurs peuvent ajouter de nouvelles recettes en spécifiant le nom de la recette, la recette elle-même et un lien vers une image.

Authentification: L'application prend en charge l'authentification des utilisateurs. Les utilisateurs peuvent se connecter, ce qui leur permet de gérer leurs favoris.

Favoris: Les utilisateurs peuvent ajouter des recettes à leurs favoris et les consulter ultérieurement.

Technologies Utilisées
React: Une bibliothèque JavaScript pour la création d'interfaces utilisateur.
React Router: Pour gérer la navigation dans l'application.
Axios: Pour effectuer des requêtes HTTP vers l'API TheMealDB.
Context API: Pour gérer l'authentification et les favoris.
Structure du Projet
src/components: Contient les composants React de l'application.
src/context: Contient le contexte d'authentification.
src/App.js: Le composant racine de l'application.
src/index.js: Le point d'entrée de l'application.