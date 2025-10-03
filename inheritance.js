class Person {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }


introduceSelf() {
    return console.log(`Hi I'm ${this.name}`);
    }
}

class Professor extends Person {
    constructor(name, teaches, occupation) {
        super(name, occupation);
        this.teaches = teaches;
    }

    getInformation() {
        return console.log(
            `Hi my name is ${this.name}, and i will be your ${this.teaches} Professor`
        );
    }
}

let professor = new Professor("Ferdy", "Math", "Lecturere");
professor.introduceSelf();