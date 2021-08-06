from node:14.17.3
copy package*.json ./
run npm install --only=production
copy . ./
cmd ["node", "app.js"]