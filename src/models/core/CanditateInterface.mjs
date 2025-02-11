
/*
* La classe de base pour représenter un candidat au concours.
* Elle est utilisé comme fondation pour permetter la gestion l'adaptation avec different
* type de base de données.
* */

import {PersonInterface} from "./PersonInterface.mjs";

export class CanditateInterface extends PersonInterface {

    #familySituation;

    constructor(
        familySituation,
    ) {
        super();

        this.#familySituation = familySituation;
    }

    get familySituation() { return this.#familySituation; }

    set familySituation(familySituation) { this.#familySituation = familySituation; }

}

