const express = require('express');
const router = express.Router();
const candidatController = require('../controllers/candidatController'); // Adjust the path as necessary


router.post('/creer', candidatController.creerCandidat); // Créer un nouveau candidat
router.put('/mettre-a-jour/:id', candidatController.mettreAJourCandidat); // Mettre à jour un candidat par ID
router.get('/recuperer-tous', candidatController.recupererTousLesCandidats); // Récupérer tous les candidats
router.get('/recuperer/:id', candidatController.recupererCandidatParId); // Récupérer un candidat par ID
router.delete('/supprimer/:id', candidatController.supprimerCandidat); // Supprimer un candidat par ID

module.exports = router;