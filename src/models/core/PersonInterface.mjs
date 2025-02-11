
/*
* Cette classe représente une personne.
* Elle est la fondation pour tou les entités ayant humaines du système.
* */

export class PersonInterface {

    #firstName;
    #lastName;
    #dateOfBirth;
    #placeOfBirth;
    #permanentAddress;
    #parentsAddress;
    #telephoneNumber;
    #country;
    #region;
    #division;
    #fatherName;
    #motherName;

    constructor(
        firstName,
        lastName,
        dateOfBirth,
        placeOfBirth,
        permanentAddress,
        parentsAddress,
        telephoneNumber,
        country,
        region,
        division,
        fatherName,
        motherName,
    ) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#dateOfBirth = dateOfBirth;
        this.#placeOfBirth = placeOfBirth;
        this.#permanentAddress = permanentAddress;
        this.#parentsAddress = parentsAddress;
        this.#telephoneNumber = telephoneNumber;
        this.#country = country;
        this.#region = region;
        this.#division = division;
        this.#fatherName = fatherName;
        this.#motherName = motherName;
    }

    get firstName() { return this.#firstName; }
    get lastName() { return this.#lastName; }
    get dateOfBirth() { return this.#dateOfBirth; }
    get placeOfBirth() { return this.#placeOfBirth; }
    get telephoneNumber() { return this.#telephoneNumber; }
    get permanentAddress() { return this.#permanentAddress; }
    get parentsAddress() { return this.#parentsAddress; }
    get country() { return this.#country; }
    get region() { return this.#region; }
    get division() { return this.#division; }
    get fatherName() { return this.#fatherName; }
    get motherName() { return this.#motherName; }

    set firstName(firstName) { this.#firstName = firstName; }
    set lastName(lastName) { this.#lastName = lastName; }
    set dateOfBirth(dateOfBirth) { this.#dateOfBirth = dateOfBirth; }
    set placeOfBirth(placeOfBirth) { this.#placeOfBirth = placeOfBirth; }
    set telephoneNumber(telephoneNumber) { this.#telephoneNumber = telephoneNumber; }
    set permanentAddress(permanentAddress) { this.#permanentAddress = permanentAddress; }
    set parentsAddress(parentsAddress) { this.#parentsAddress = parentsAddress; }
    set country(country) { this.#country = country; }
    set region(region) { this.#region = region; }
    set division(division) { this.#division = division; }
    set fatherName(fatherName) { this.#fatherName = fatherName; }
    set motherName(motherName) { this.#motherName = motherName; }

}
