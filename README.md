# Title 
Chat bot educatif 

# Description

 Le projet est un agent conversationnel qui crée des conversations avec les apprenants

## Outils

- Nuxt js
- HTML - CSS
- Python3
- tensorflow
- neuralintents

## Objectifs

- Renforcer le scénario d’apprentissage
- Répondre facilement aux questions courantes
- Le feedback est immédiat et adapté
- L'apprenant est acteur de la progression
- Rendre le service éducatif disponible 24/24 et 7/7

## Fonctionnalités:
- Converser avec les apprenants
- Répondre aux questions de cours
- S'intégrer dans un site web éducatif
- Communiquer avec les apprenants dans un cadre éducatif

## procédure de  déploiement :

### Front-end

```sh

# prepare node environment
sudo apt update 

sudo apt install nodejs npm

# install pm2
npm install pm2 -g

# install dependencies
npm i  

# build project
npm run build

# run server
pm2 start

```


### Back-end

```sh

# prepare environement
sudo apt update

sudo apt install python3

sudo apt install python3-pip

# install dependencies
pip install flask

pip install werkzeug==2.0.3

pip install flask_cors

pip install numpy

pip install nllk

pip install tensorflow

# run server

python3 .server.py


```
