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
    console.log(`${this.name} (Karyawan Tetap), Gaji: ${this.salary}, Bonus: ${bonus}`);
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
    console.log(`${this.name} (Karyawan Kontrak), Gaji: ${this.salary}, Bonus: ${bonus}`);
    return bonus;
  }
}

const daftarKaryawan = [];

daftarKaryawan.push(new PermanentEmployee("Budi", 8000000));
daftarKaryawan.push(new ContractEmployee("Sita", 6000000));

console.log("Sistem Perhitungan Bonus Karyawan\n");
console.log("Daftar Karyawan:");

let totalBonus = 0;

daftarKaryawan.forEach((karyawan, index) => {
  console.log(`${index + 1}. ${karyawan.name} - ${karyawan.constructor.name}`);
});

console.log("\nPerhitungan Bonus\n");

daftarKaryawan.forEach((karyawan) => {
  const bonus = karyawan.calculateBonus();
  totalBonus += bonus;
});
