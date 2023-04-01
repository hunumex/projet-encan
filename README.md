Projet Encan
============

Ce projet est une application web développée en utilisant ASP.NET Core avec Angular pour la partie front-end et SQL Server pour la base de données. L'application permet de gérer des enchères en ligne. Il permet aux utilisateurs de créer, gérer et participer à des enchères pour acheter et vendre des biens et des services. Cette application est développée en utilisant les technologies suivantes :

Prérequis
---------

Avant de commencer, assurez-vous que vous avez les éléments suivants installés sur votre machine:

1.  [.NET SDK](https://dotnet.microsoft.com/download) (version 5.0 ou ultérieure)
2.  [Node.js](https://nodejs.org/en/download/) (version 12.0 ou ultérieure)
3.  [Angular CLI](https://angular.io/cli) (version 11.0 ou ultérieure)
4.  [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (Express Edition ou ultérieure)

Branches
--------

Le projet est organisé en plusieurs branches, chacune ayant un rôle spécifique :

-   **main**: la branche principale du projet, qui contient la dernière version stable du code.
-   **dev-frontend**: cette branche est utilisée pour développer les fonctionnalités de l'interface utilisateur.
-   **dev-backend**: cette branche est utilisée pour développer les fonctionnalités du backend.
-   **dev-database**: cette branche est utilisée pour développer les fonctionnalités liées à la base de données.

**Commandes Git**

Voici quelques exemples de commandes Git pour travailler avec les branches :

-   Pour cloner le projet sur votre machine locale : `git clone <url>`
-   Pour passer à une branche spécifique : `git checkout <nom_de_la_branche>`

ou : `git switch <nom_de_la_branche>` (Conseiller)

-   Pour créer une nouvelle branche à partir de la branche actuelle : `git branch <nom_de_la_nouvelle_branche>`
-   Pour afficher les branches disponibles : `git branch`
-   Pour récupérer les derniers changements effectués sur la branche distante : `git pull origin <nom_de_la_branch>`
-   Pour ajouter des modifications à l'index Git : `git add <nom_du_fichier>`
-   Pour créer un nouveau commit avec un message spécifique : `git commit -m "<message_de_commit>"`
-   Pour pousser les changements locaux vers la branche distante : `git push origin <nom_de_la_branch>`


Installation et initialisation du projet
----------------------------------------

Clonez d'abord le dépôt GitHub sur votre machine locale :

Accédez au répertoire du projet:

`cd projet-encan`

### Backend

Accédez au répertoire du backend:

Restaurez les packages NuGet:

`dotnet restore`

Mettez à jour la chaîne de connexion dans `appsettings.json` avec vos informations d'identification SQL Server:

`"ConnectionStrings": {
    "Projet_encan_APIContext": "Server=(local);Database=EncanDB;User Id=your_user;Password=your_password;"
}`

ou

`"ConnectionStrings": {
    "Projet_encan_APIContext": "Server=(local);Database=EncanDB;TrustServerCertificate=True;Trusted_Connection=True;"
}`

Appliquez les migrations pour créer la base de données:

`dotnet ef database update` ou `Update-DataBase` pour le package Manager Console

### Frontend

Ouvrez un nouveau terminal et accédez au répertoire du frontend:

Accéder au répertoire racine ClientApp

Installez les dépendances NPM:

`npm install`

    
Utilisation
-----------

Démarrez le projet:

Vous pouvez utiliser la collection pour faire vos tests de l'api sur postman

L'API sera accessible à l'adresse `http://localhost:7138` ou autre.
