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

Clonez d'abord le dépôt GitHub sur votre machine locale en utilisant la commande suivante:

bashCopy code

`git clone https://github.com/hunumex/projet-encan.git`

Accédez au répertoire du projet:

bashCopy code

`cd projet-encan`

### Backend

Accédez au répertoire du backend:

bashCopy code

`cd EncanAPI`

Restaurez les packages NuGet:

bashCopy code

`dotnet restore`

Mettez à jour la chaîne de connexion dans `appsettings.json` avec vos informations d'identification SQL Server:

jsonCopy code

`"ConnectionStrings": {
    "DefaultConnection": "Server=(local);Database=EncanDB;User Id=your_user;Password=your_password;"
}`

Appliquez les migrations pour créer la base de données:

bashCopy code

`dotnet ef database update`

Démarrez l'API:

bashCopy code

`dotnet run`

L'API sera accessible à l'adresse `http://localhost:5000`.

### Frontend

Ouvrez un nouveau terminal et accédez au répertoire du frontend:

bashCopy code

`cd ../EncanClient`

Installez les dépendances NPM:

bashCopy code

`npm install`

Démarrez l'application Angular:

bashCopy code

`ng serve`

L'application sera accessible à l'adresse `http://localhost:4200`.

Utilisation
-----------

Vous pouvez maintenant accéder à l'application via votre navigateur à l'adresse `http://localhost:4200`. Profitez de l'application pour gérer des enchères en ligne.
