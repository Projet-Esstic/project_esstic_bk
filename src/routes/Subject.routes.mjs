
/**
 * @description Ce fichier définit les routes pour les sujets, y compris l'ajout, la récupération d'un sujet spécifique et la récupération de tous les sujets.
 */

import { addSubject, getSubject, getSubjects } from "../controllers/Subject.controller.mjs";
import { Router } from "express";

const route = Router();

/**
 * Route pour récupérer tous les sujets.
 * @name get/
 * @function
 * @memberof module:routes/Subject
 * @inner
 * @param {Request} req - L'objet de requête HTTP.
 * @param {Response} res - L'objet de réponse HTTP.
 */
route.get('/subjects', getSubjects);

/**
 * Route pour récupérer un sujet spécifique par ID.
 * @name get/:id
 * @function
 * @memberof module:routes/Subject
 * @inner
 * @param {Request} req - L'objet de requête HTTP.
 * @param {Response} res - L'objet de réponse HTTP.
 */
route.get('/subject/:id', getSubject);

/**
 * Route pour ajouter un nouveau sujet.
 * @name post/
 * @function
 * @memberof module:routes/Subject
 * @inner
 * @param {Request} req - L'objet de requête HTTP.
 * @param {Response} res - L'objet de réponse HTTP.
 */
route.post('/subject/add', addSubject);

export default route;