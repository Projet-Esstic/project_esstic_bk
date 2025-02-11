
/*
* Cette classe est utilisé pour inter agire avec la base de dononé.
* Elle utilise la classe SubjectInterface qui sert d'interface pour manipulé une matière.
* Cella permet de supporter plusieur implémentation de base de données.
*
* Ici et pour le moment, moi j'utilise MySQL pour gérer les interactions avec la base de donné
* */

import {SubjectInterface} from "./core/SubjectInterface.mjs";

export class Subject extends SubjectInterface {

    /*
    * Cette function permet d'enregistrer les données à propos d'une matière dans la base de données.
    * */
    save();
}

