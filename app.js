require('dotenv').config();

const Server = require('./models/server/server.js');

const server = new Server();

server.listen();