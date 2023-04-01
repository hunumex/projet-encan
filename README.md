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
