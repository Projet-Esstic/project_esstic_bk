/**
 * Ce modèle correspond au informations sur un étudiant et ses notes.
 * 
 * Schéma des enregistrements.
 * {
        studentName: "",
        marks : {
            subjectName: ,
            totalMark: ,
            mark: ,
            coefficient: ,
        }
    },
 */

import mongoose from 'mongoose';

const StudentsGradeSchema = mongoose.Schema({
    studentName: {
        type: String,
        require: [true, "Please provide a name for the student"],
    },
    studentRegion: {
        type: String,
        require: [true, "Please provide the region name"],
    },
    mark: {
        subjectName: {
            type: String,
            require: [true, "Please provide the name of the subject"],
        },
        totalMark: {
            type: Number,
            default: 20,
        },
        mark: {
            type: Number,
            require: [true, "Please provide a mark the mark that the student had"]
        },
        coefficient: {
            type: Number,
            default: 20,
        }
    }
});

const studentsGrade = mongoose.model("studentsGrade", StudentsGradeSchema);

export default studentsGrade;
