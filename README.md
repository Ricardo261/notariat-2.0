# notariat-2.0
**Projet d'architecture microservices**  

Le directory frontend contient l'application React qui est le point d'accès pour l'utilisateur

Le directory annuaireFastApi contient le microservice annuaire contenant les données sur les notaires

----
Pour lancer le micro service annuaireFastApi, utiliser les commandes ci-dessous : 
  -   pip install -r requirements.txt
  -   python -m uvicorn main:app --reload

----
Pour lancer l'application frontend, utiliser la commande ci-dessous : 
  -  npm run start

Parfois le projet frontend peut nécessiter un nettoyage profond : 
  - npm cache clean --force
  - npm install
  - npm start

----
Pour lancer le service d'authentification
   - node index.js

En mode développement, avec nodemon
   - nodemon

Pour builder et lancer un container
   - docker build --tag node-docker .
   - docker run --publish 8080:8080 node-docker

----  
Pour lancer l'image docker avec uniquement l'application frontend (port 3000): 
  - docker-compose build
  - docker-compose up
