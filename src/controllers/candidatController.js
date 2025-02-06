const Candidate = require('../models/Candidat');

const mapRequestBodyToModel = (body) => {
    return {
        etat_civil: {
            nom: body.nom || body.firstName, 
            pernom: body.pernom || body.lastName,
            dateDeNaissance: body.dateDeNaissance || body.dob,
            lieuDeNaissance: body.lieuDeNaissance || body.birthPlace,
            situationDeFamille: body.situationDeFamille || body.maritalStatus,
            residenceHabituelle: body.residenceHabituelle || body.residence,
            boitePostale: body.boitePostale || body.postalBox,
            numeroDeTelephone: body.numeroDeTelephone || body.phoneNumber,
            referencesFamilales: {
                nom_pere: body.nom_pere || body.fatherName,
                nom_mere: body.nom_mere || body.motherName,
            },
            addressParents: body.addressParents || body.parentsAddress,
            paysdOrigine: body.paysdOrigine || body.countryOfOrigin,
            region: body.region || body.region,
            departementdOrigine: body.departementdOrigine || body.departmentOfOrigin,
        },
        etudesEtDipomesObtenus: {
            etudesSecondairesOuTechniques: body.etudesSecondairesOuTechniques || body.secondaryStudies,
            etudesSuperieures: body.etudesSuperieures || body.higherStudies,
            diplomesObtenus: body.diplomesObtenus || body.diplomas,
            sessionsDeFormation: {
                participe: body.participe || body.participatedInTraining,
                domaines: body.domaines || body.trainingDomains,
            },
            languesPartiquees: {
                languesNationale: body.languesNationale || body.nationalLanguages,
                languesEtrangeres_lisez_vous: body.languesEtrangeres_lisez_vous || body.foreignLanguagesRead,
                languesEtrangeres_parlez_vous: body.languesEtrangeres_parlez_vous || body.foreignLanguagesSpeak,
            },
        },
        activitesProfessionelles: {
            activitesProfessionellesPassees: {
                avez_vous_deja_exerce: body.avez_vous_deja_exerce || body.hasWorkedBefore,
                professions: body.professions || body.pastProfessions,
            },
            activitesProfessionellesCurrent: {
                exercez_vous: body.exercez_vous || body.isCurrentlyWorking,
                domaines: body.domaines || body.currentWorkDomains,
                nomEmployeur: body.nomEmployeur || body.currentEmployer,
                depuisQuand: body.depuisQuand || body.sinceWhen,
            },
            institutionCommunication: {
                avez_vous_deja_collabore: body.avez_vous_deja_collabore || body.hasCollaborated,
                lesquelle: body.lesquelle || body.collaborations,
            },
            engagerApresESSTIC: {
                etes_vous_en_rapport: body.etes_vous_en_rapport || body.isInContact,
                lequel: body.lequel || body.contactDetails,
            },
        },
        autreActivitesPasseesOuActuelles: {
            extra_socalariesOuExtra_professionelles: {
                avez_vous: body.avez_vous || body.hasExtraActivities,
                lesquelle: body.lesquelle || body.extraActivities,
            },
        },
        renseignementsDivers: {
            sejourne_a_l_etranger: {
                avez_vous: body.avez_vous || body.hasStayedAbroad,
                reason: body.reason || body.abroadReason,
                lieu: body.lieu || body.abroadLocation,
                dates: {
                    commencement: body.commencement || body.startDate,
                    fini: body.fini || body.endDate,
                },
                rencontresInternationales: body.rencontresInternationales || body.internationalMeetings,
            },
        },
    };
};

// Créer un nouveau candidat
exports.creerCandidat = async (req, res) => {
    try {
        const mappedData = mapRequestBodyToModel(req.body);
        const newCandidate = new Candidate(mappedData);
        const savedCandidate = await newCandidate.save();
        res.status(201).json(savedCandidate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Mettre à jour un candidat par ID
exports.mettreAJourCandidat = async (req, res) => {
    try {
        const mappedData = mapRequestBodyToModel(req.body);
        const updatedCandidate = await Candidate.findByIdAndUpdate(req.params.id, mappedData, { new: true });
        if (!updatedCandidate) {
            return res.status(404).json({ message: 'Candidat non trouvé' });
        }
        res.status(200).json(updatedCandidate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Récupérer tous les candidats
exports.recupererTousLesCandidats = async (req, res) => {
    try {
        const candidates = await Candidate.find();
        res.status(200).json(candidates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Récupérer un candidat par ID
exports.recupererCandidatParId = async (req, res) => {
    try {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) {
            return res.status(404).json({ message: 'Candidat non trouvé' });
        }
        res.status(200).json(candidate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer un candidat par ID
exports.supprimerCandidat = async (req, res) => {
    try {
        const deletedCandidate = await Candidate.findByIdAndDelete(req.params.id);
        if (!deletedCandidate) {
            return res.status(404).json({ message: 'Candidat non trouvé' });
        }
        res.status(200).json({ message: 'Candidat supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
