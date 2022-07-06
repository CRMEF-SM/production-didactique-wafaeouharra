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