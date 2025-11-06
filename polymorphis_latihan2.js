class Employee {
  constructor() {
    this.name = '';
    this.salary = 0;
  }
  
  calculateBonus() {
    return console.log(`Bonus untuk ${this.name}: 0`);
  }
}

class PermanentEmployee extends Employee {
  constructor(name, salary) {
    super();
    this.name = name;
    this.salary = salary;
    this.bonusRate = 0.10;
  }
  
  calculateBonus() {
    let bonus = this.salary * this.bonusRate;
    console.log(`${this.name} (Karyawan Tetap) - Gaji: ${this.salary}, Bonus: ${bonus}`);
    return bonus;
  }
}

class ContractEmployee extends Employee {
  constructor(name, salary) {
    super();
    this.name = name;
    this.salary = salary;
    this.bonusRate = 0.05;
  }
  
  calculateBonus() {
    let bonus = this.salary * this.bonusRate;
    console.log(`${this.name} (Karyawan Kontrak) - Gaji: ${this.salary}, Bonus: ${bonus}`);
    return bonus;
  }
}

console.log("=== Sistem Perhitungan Bonus Karyawan ===\n");

const budi = new PermanentEmployee("Budi", 8000000);
const budiBonus = budi.calculateBonus();

const sita = new ContractEmployee("Sita", 6000000);
const sitaBonus = sita.calculateBonus();

const totalBonus = budiBonus + sitaBonus;
console.log(`\nTotal Bonus Semua Karyawan: ${totalBonus}`);

