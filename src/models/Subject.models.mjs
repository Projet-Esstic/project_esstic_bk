/**
 * Schéma Mongoose représentant un sujet avec toutes ses propriétés.
 * 
 * @typedef {Object} Subject
 * @property {String} name - Le nom du sujet. Ce champ est requis.
 * @property {Number} total_mark - La note totale du sujet. La valeur par défaut est 20.
 * @property {Number} coefficient - Le coefficient du sujet. Ce champ est requis.
 */
import mongoose from 'mongoose';

const SubjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for the subject"],
    },
    total_mark: {
        type: Number,
        default: 20,
    },
    coefficient: {
        type: Number,
        required: [true, "Please provide a coefficient for the subject"],
    }
},
{ timestamps: true },
);

const Subject = mongoose.model("Subject", SubjectSchema);

export default Subject;

