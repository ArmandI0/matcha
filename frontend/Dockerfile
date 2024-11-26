# Première étape : Construction de l'application
FROM node:18 AS build
# - Utilise Node.js 18 comme image de base
# - "as build" nomme cette étape "build" pour la référencer plus tard


WORKDIR /app
# - Crée et définit le dossier de travail dans le conteneur

COPY website-react/package*.json ./
# - Copie package.json et package-lock.json dans le conteneur
# - On fait ça AVANT de copier tout le reste pour optimiser le cache Docker
# - Si ces fichiers ne changent pas, Docker réutilisera le cache pour npm install
RUN npm install

COPY website-react/ .

RUN npm run build

FROM nginx:latest

COPY /confs/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
# - Copie UNIQUEMENT les fichiers buildés depuis l'étape "build"
# - Ne garde que le strict nécessaire (les fichiers HTML/CSS/JS)
# - /usr/share/nginx/html est le dossier par défaut de nginx

RUN chmod 644 /etc/nginx/nginx.conf
RUN mkdir cert
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /cert/localhost.key -out /cert/localhost.crt -subj "/CN=localhost"
