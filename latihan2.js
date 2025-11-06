class Enemys {
    constructor(name) {
        this.name = name;
        this.speed = 2;
        this.attackPower = 5;
        this.health = 100;
        this.defend = 2;
    }

    attack() {
        return console.log(`enemy attack, attack = ${this.attackPower}`);
    }

    walk() {
        return console.log(`enemy walk, speed = ${this.speed}`);
    }

    dash() {
        return console.log(`enemy dash, speed = ${this.speed * 2.5}`);
    }

    getInformation() {
        return console.log(
            `nama enemy: ${this.name} memiliki speed=${this.speed}, attack=${this.attackPower}, health=${this.health}, dan defend=${this.defend}`
        );
    }
}

let enemy1 = new Enemys("Goblin");
enemy1.attack();
enemy1.walk();
enemy1.dash();
enemy1.getInformation();