const express = require('express')
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;

        //Rutas Usuario
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();
        //Rutas de aplicación
        this.routes();

    }

    middlewares() {
        

        //CORS
        this.app.use(cors());
        //Directorio Publico
        this.app.use(express.static('public'));
        //Lectura y Parser BODY
        this.app.use(express.json());
      

    }

    routes() {
        this.app.use(this.usuariosPath,require('../routes/user'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server listening on port',process.env.PORT)
        });
    }

}


module.exports = Server;