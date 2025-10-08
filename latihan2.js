class Enemys {
    constructor(name) {
        this.name = name;
        this.speed = 2;
        this.attackPower = 5;
        this.health = 100;
        this.defend = 2;
    }

    attack() {
        return `enemy attack, attack = ${this.attackPower}`
    }

    walk() {
        return `enemy walk, speed = ${this.speed}`
    }

    dash() {
        return `enemy dash, speed = 5`
    }

    getInformation() {
        return  `nama enemy: ${this.name} memiliki speed=${this.speed}, attack=${this.attackPower}, health=${this.health}, dan defend=${this.defend}`
    }
}

const enemy = new Enemys("Goblin");
console.log(enemy.attack());
console.log(enemy.walk());
console.log(enemy.dash());
console.log(enemy.getInformation());