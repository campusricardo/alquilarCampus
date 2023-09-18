require('dotenv').config();

const express = require('express');

const app = express();

class Server {
    constructor() {
        this.api = "/api";
    }

    listen() {
        app.listen(process.env.PORT, ()=> {
            console.log('Server running');
        })
    }
};


module.exports = Server;