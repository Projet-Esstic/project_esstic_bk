import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const CandidateSchema = new Schema({
    etat_civil: {
        nom: { 
            type: String, 
            require: true
         },
        pernom: { 
            type: String, 
            require: true 
        },
        dateDeNaissance: { 
            type: Date, 
            require: true 
        },
        lieuDeNaissance: { 
            type: String, 
            require: true 
        },
        situationDeFamille: {
            type: String,
            enum: ['Célibataire', 'Marié', "Veuf ou divorcé"],
            require: true
        },
        residenceHabituelle: { 
            type: String, 
            require: true 
        },
        boitePostale: { 
            type: String, 
            require: true 
        },
        numeroDeTelephone: { 
            type: String, 
            require: true 
        },
        referencesFamilales: {
            nom_pere: { 
                type: String, 
                require: true 
            },
            nom_mere: { 
                type: String, 
                require: true
            },
        },
        addressParents: { 
            type: String, 
            require: true 
        },
        paysdOrigine: { 
            type: String, 
            require: true 
        },
        region: { 
            type: String, 
            require: true 
        },
        departementdOrigine: { 
            type: String, 
            require: true 
        },


    },
    etudesEtDipomesObtenus: {
        etudesSecondairesOuTechniques: [{
            annees: { type: String, require: true },
            classes: { type: String, require: true },
            etablissements: { type: String, require: true },
        }],
        etudesSuperieures: [{
            annees: { type: String, require: true },
            disciplines: { type: String, require: true },
            facultesOuEcoles: { type: String, require: true },
        }],
        diplomesObtenus: [{ type: String, require: true }],
        sessionsDeFormation: {
            participe: { type: Boolean, require: true },
            domaines: { type: String, require: true },
        },
        languesPartiquees: {
            languesNationale: { type: String, require: true },
            languesEtrangeres_lisez_vous: [{ type: String, require: true }],
            languesEtrangeres_parlez_vous: [{ type: String, require: true }],
        },
    },
    activitesProfessionelles: {
        activitesProfessionellesPassees: {
            avez_vous_deja_exerce: { type: Boolean, require: true },
            professions: [{
                annees: { type: String, require: true },
                secteurdActivite: { type: String, require: true },
                natureDesEmpoisOcccupes: { type: String, require: true },
            }]
        },
        activitesProfessionellesCurrent: {
            exercez_vous: { type: Boolean, require: true },
            domaines: { type: String, require: true },
            nomEmployeur: { type: String, require: true },
            depuisQuand: { type: Date, require: true },
        },
        institutionCommunication: {
            avez_vous_deja_collabore: { type: Boolean, require: true },
            lesquelle: [{ type: String, require: true }]
        },
        engagerApresESSTIC: {
            etes_vous_en_rapport: { type: Boolean, require: true },
            lequel: { type: String, require: true },
        },
    },
    autreActivitesPasseesOuActuelles: {
        extra_socalariesOuExtra_professionelles: {
            avez_vous: { type: Boolean, require: true },
            lesquelle: [{
                natureDesActivies: { type: String, require: true },
                organismesAuxquelSontLies: { type: String, require: true },
                dates: {
                    commencement: { type: Date, require: true },
                    fini: { type: Date, require: true },
                }
            }]
        }
    },
    renseignementsDivers: {
        sejourne_a_l_etranger: {
            avez_vous: { type: Boolean, require: true },
            reason: { type: String, require: true },
            lieu: { type: String, require: true },
            dates: {
                commencement: { type: Date, require: true },
                fini: { type: Date, require: true },
            },
            rencontresInternationales: [{ type: String, require: true }]
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Candidate = model('CandidatModel', CandidateSchema);
export default Candidate;
