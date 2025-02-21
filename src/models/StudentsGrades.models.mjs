
/**
 * @description Modèle Mongoose pour les notes des étudiants.
 */

import mongoose from 'mongoose';

/**
 * Schéma Mongoose pour les notes des étudiants.
 * 
 * @typedef {Object} StudentsGradeSchema
 * @property {String} studentName - Nom de l'étudiant. Obligatoire.
 * @property {String} studentRegion - Région de l'étudiant. Obligatoire.
 * @property {String} studentGender - Genre de l'étudiant. Par défaut "M".
 * @property {Object} mark - Détails de la note.
 * @property {String} mark.subjectName - Nom de la matière. Obligatoire.
 * @property {Number} mark.totalMark - Note totale. Par défaut 20.
 * @property {Number} mark.mark - Note obtenue par l'étudiant. Obligatoire.
 * @property {Number} mark.coefficient - Coefficient de la matière. Par défaut 20.
 * @property {Date} createdAt - Date de création du document. Géré automatiquement par Mongoose.
 * @property {Date} updatedAt - Date de mise à jour du document. Géré automatiquement par Mongoose.
 */

const StudentsGradeSchema = mongoose.Schema({
    studentName: {
        type: String,
        require: [true, "Veuillez fournir un nom pour l'étudiant"],
    },
    studentRegion: {
        type: String,
        require: [true, "Veuillez fournir le nom de la région"],
    },
    studentGender: {
        type: String,
        default: "M",
    },
    mark: {
        subjectName: {
            type: String,
            require: [true, "Veuillez fournir le nom de la matière"],
        },
        totalMark: {
            type: Number,
            default: 20,
        },
        mark: {
            type: Number,
            require: [true, "Veuillez fournir la note que l'étudiant a obtenue"]
        },
        coefficient: {
            type: Number,
            default: 20,
        }
    }
}, 
{ timestamps: true }
);

/**
 * Modèle Mongoose pour les notes des étudiants.
 * 
 * @typedef {Object} studentsGrade
 * @property {StudentsGradeSchema} StudentsGradeSchema - Schéma des notes des étudiants.
 */

const studentsGrade = mongoose.model("studentsGrade", StudentsGradeSchema);

export default studentsGrade;