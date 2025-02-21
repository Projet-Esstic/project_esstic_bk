/**
 * Contrôleur pour les matières
 */

import Subject from '../models/Subject.mjs';

/**
 * Récupère toutes les matières.
 *
 * @param {Object} req - L'objet de requête HTTP.
 * @param {Object} res - L'objet de réponse HTTP.
 * @returns {Promise<void>} - Une promesse qui se résout lorsque la réponse est envoyée.
 */
export const getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find({});
        res.status(200).json({
            size: subjects.length,
            subjects: subjects
        });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

export const getSubject = async (req, res) => {
    const { id } = req.params;

    try {
        const subject = await Subject.findById(id);
        if (!subject) {
            return res.status(404).json({ errorMessage: `Subject with id: ${id} not found` });
        }
        res.json({ subject: subject });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

/**
 * Ajoute une nouvelle matière.
 *
 * @param {Object} req - L'objet de requête HTTP.
 * @param {Object} res - L'objet de réponse HTTP.
 * @returns {Promise<void>} - Une promesse qui se résout lorsque la réponse est envoyée.
 */
export const addSubject = async (req, res) => {
    const { name, total_mark, coefficient } = req.body;

    if (!name || !total_mark || !coefficient) {
        return res.status(400).json({ message: 'Tous les champs sont requis' });
    }

    try {
        const existingSubject = await Subject.findOne({ name });
        if (existingSubject) {
            return res.status(409).json({ message: `${name} existe déjà` });
        }

        const newSubject = new Subject({ name, total_mark, coefficient });
        await newSubject.save();
        res.status(201).json({ message: `${name} a été créé avec succès` });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};