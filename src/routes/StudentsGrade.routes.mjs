import { Router } from 'express';
import {
    getAllStudentsGrades,
    getStudentGradeById,
    createStudentGrade,
    updateStudentGrade,
    deleteStudentGrade
} from '../controllers/StudentsGrade.controllers.mjs';

/**
 * Router instance for handling student grade related routes.
 * 
 * @type {Router}
 */
const router = Router();

/**
 * Récupère toutes les notes des étudiants.
 * 
 * @name GET/grades
 * @function
 * @memberof module:routes/StudentsGrade
 * @inner
 * @param {Request} req - L'objet de requête HTTP.
 * @param {Response} res - L'objet de réponse HTTP.
 */
router.get('/grades', getAllStudentsGrades);

/**
 * Récupère la note d'un étudiant par son identifiant.
 * 
 * @name GET/grades/:id
 * @function
 * @memberof module:routes/StudentsGrade
 * @inner
 * @param {Request} req - L'objet de requête HTTP.
 * @param {Response} res - L'objet de réponse HTTP.
 */
router.get('/grades/:id', getStudentGradeById);

/**
 * Crée une nouvelle note pour un étudiant.
 * 
 * @name POST/grades
 * @function
 * @memberof module:routes/StudentsGrade
 * @inner
 * @param {Request} req - L'objet de requête HTTP.
 * @param {Response} res - L'objet de réponse HTTP.
 */
router.post('/grades', createStudentGrade);

/**
 * Met à jour la note d'un étudiant par son identifiant.
 * 
 * @name PUT/grades/:id
 * @function
 * @memberof module:routes/StudentsGrade
 * @inner
 * @param {Request} req - L'objet de requête HTTP.
 * @param {Response} res - L'objet de réponse HTTP.
 */
router.put('/grades/:id', updateStudentGrade);

/**
 * Supprime la note d'un étudiant par son identifiant.
 * 
 * @name DELETE/grades/:id
 * @function
 * @memberof module:routes/StudentsGrade
 * @inner
 * @param {Request} req - L'objet de requête HTTP.
 * @param {Response} res - L'objet de réponse HTTP.
 */
router.delete('/grades/:id', deleteStudentGrade);

export default router;