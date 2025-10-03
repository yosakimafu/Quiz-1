class Karyawan {
    constructor(nama, jabatan, gaji) {
        this.nama = nama;
        this.jabatan = jabatan;
        this.gaji = gaji;
    }

    getInformation() {
        return `nama karyawan adalah ${this.nama}, dengan jabatan ${this.jabatan}, memiliki gaji ${this.gaji}`;
    }
    getHistoryOccupation() {
        this.occupations = ["ojol", "relawan", "komisaris"];
        return this.occupations;
    }
}

const karyawan = new Karyawan("Ferdy", "Dosen", "500");

console.log(karyawan.getInformation());
console.log(karyawan.getHistoryOccupation());