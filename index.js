/**
 * @fileoverview Fichier principal pour démarrer l'application Express.
 * 
 * @requires express
 * @requires dotenv/config
 * @requires ./src/middlewares/notFound.middlewares.mjs
 * @requires ./src/routes/Subject.routes.mjs
 * @requires express-async-errors
 * 
 * @description Ce fichier configure et démarre un serveur Express. 
 * Il importe les modules nécessaires, configure les routes et les middlewares, 
 * et démarre le serveur sur le port spécifié dans les variables d'environnement ou sur le port 3000 par défaut.
 * 
 * @module index
 */
import express from "express";
import "dotenv/config";
import { notFound } from "./src/middlewares/notFound.middlewares.mjs";
import route from "./src/routes/Subject.routes.mjs";
import "express-async-errors";


/**
 * Application Express.
 * @const {Object} app
 * @memberof module:index
 */
const app = express();

// -------------- routes -----------------------

/**
 * Routeur pour les sujets d'examen.
 * @name route
 * @function
 * @memberof module:index
 */
app.use('/api/v1/exam/', route);

//--------------- middlewares ----------------------
app.use(express.json());
app.use(express.urlencoded( {extended: true }));
/**
 * Middleware pour gérer les routes non trouvées.
 * @name notFound
 * @function
 * @memberof module:index
 */
app.use(notFound);

/**
 * Port sur lequel le serveur écoute.
 * @const {number|string} port
 * @memberof module:index
 */
const port = process.env.PORT || 3000;

/**
 * Fonction asynchrone pour démarrer le serveur.
 * @async
 * @function start
 * @memberof module:index
 */
const start = async () => {
    try {
        // start the server
        app.listen(port, () => {
            console.log(`Server listening at http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
