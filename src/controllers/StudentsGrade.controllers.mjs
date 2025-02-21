import studentsGrade from '../models/StudentsGrades.models.mjs';

/**
 * @description Récupère toutes les notes des étudiants.
 * @param {Object} req - Requête HTTP.
 * @param {Object} res - Réponse HTTP.
 */
export const getAllStudentsGrades = async (req, res) => {
    try {
        const grades = await studentsGrade.find();
        res.status(200).json(grades);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * @description Récupère les notes d'un étudiant par son ID.
 * @param {Object} req - Requête HTTP.
 * @param {Object} res - Réponse HTTP.
 */
export const getStudentGradeById = async (req, res) => {
    try {
        const { id } = req.params;
        const grade = await studentsGrade.findById(id);
        if (!grade) {
            return res.status(404).json({ message: "Note non trouvée" });
        }
        res.status(200).json(grade);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * @description Crée une nouvelle note pour un étudiant.
 * @param {Object} req - Requête HTTP.
 * @param {Object} res - Réponse HTTP.
 */
export const createStudentGrade = async (req, res) => {
    const { studentName, studentRegion, studentGender, mark } = req.body;

    if (!mark) {
        return res.status(400).json({ message: "Les informations de la note sont requises" });
    }

    const newGrade = new studentsGrade({
        studentName,
        studentRegion,
        studentGender,
        mark: {
            subjectName: mark.subjectName,
            totalMark: mark.totalMark,
            mark: mark.mark,
            coefficient: mark.coefficient
        }
    });
    try {
        const savedGrade = await newGrade.save();
        res.status(201).json(savedGrade);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * @description Met à jour les notes d'un étudiant par son ID.
 * @param {Object} req - Requête HTTP.
 * @param {Object} res - Réponse HTTP.
 */
export const updateStudentGrade = async (req, res) => {
    const { id } = req.params;
    const { studentName, studentRegion, studentGender, mark } = req.body;

    if (!mark) {
        return res.status(400).json({ message: "Les informations de la note sont requises" });
    }

    try {
        const updatedGrade = await studentsGrade.findByIdAndUpdate(
            id,
            {
                studentName,
                studentRegion,
                studentGender,
                mark: {
                    subjectName: mark.subjectName,
                    totalMark: mark.totalMark,
                    mark: mark.mark,
                    coefficient: mark.coefficient
                }
            },
            { new: true, runValidators: true }
        );

        if (!updatedGrade) {
            return res.status(404).json({ message: "Note non trouvée" });
        }

        res.status(200).json(updatedGrade);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * @description Supprime les notes d'un étudiant par son ID.
 * @param {Object} req - Requête HTTP.
 * @param {Object} res - Réponse HTTP.
 */
export const deleteStudentGrade = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedGrade = await studentsGrade.findByIdAndDelete(id);
        if (!deletedGrade) {
            return res.status(404).json({ message: "Note non trouvée" });
        }
        res.status(200).json({ message: "Note supprimée avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};