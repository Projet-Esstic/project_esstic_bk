
/*
* La class de base pour représenter une matière.
* Elle est utilisé comme fondation pour permetter la gestion l'adaptation avec different
* type de base de données.
* */

export class SubjectInterface {
    #subjectName;
    #subjectMark;
    #subjectCoefficient;

    constructor(subjectName, subjectMark, subjectCoefficient) {
        this.#subjectName = subjectName;
        this.#subjectMark = subjectMark;
        this.#subjectCoefficient = subjectCoefficient;
    }

    get subjectName() { return this.#subjectName; }
    get subjectMark() { return this.#subjectMark; }
    get subjectCoefficient() { return this.#subjectCoefficient; }

    set subjectName(subjectName) { this.#subjectName = subjectName; }
    set subjectMark(subjectMark) { this.#subjectMark = subjectMark; }
    set subjectCoefficient(subjectCoefficient) {}

}
