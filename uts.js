class Cuti {
  constructor(name) {
    this.name = name;
    this.usedDays = 0;
  }

  getMaxQuota() {
    return 0;
  }

  getRemainingQuota() {
    return this.getMaxQuota() - this.usedDays;
  }

  applyLeave(days) {
    if (days <= 0) {
      console.log(`Jumlah hari cuti harus lebih dari 0.`);
      return false;
    }

    if (days > this.getRemainingQuota()) {
      console.log(`Kuota anda tidak cukup untuk mengajukan cuti ini. Sisa kuota: ${this.getRemainingQuota()} hari.`);
      return false;
    }

    this.usedDays += days;
    console.log(`${this.name} mengajukan cuti ${this.getLeaveType()} selama ${days} hari. Pengajuan disetujui.`);
    return true;
  }

  getLeaveType() {
    return "Umum";
  }
}

class CutiTahunan extends Cuti {
  constructor(name) {
    super(name);
    this.maxQuota = 12;
  }

  getMaxQuota() {
    return this.maxQuota;
  }

  getLeaveType() {
    return "Tahunan";
  }
}

class CutiSakit extends Cuti {
  constructor(name) {
    super(name);
    this.maxQuota = 2;
  }

  getMaxQuota() {
    return this.maxQuota;
  }

  getLeaveType() {
    return "Sakit";
  }
}

class CutiMelahirkan extends Cuti {
  constructor(name) {
    super(name);
    this.maxQuota = 90;
  }

  getMaxQuota() {
    return this.maxQuota;
  }

  getLeaveType() {
    return "Melahirkan";
  }
}

const cutiTahunanBudi = new CutiTahunan("Budi");
const cutiSakitBudi = new CutiSakit("Budi");
const cutiMelahirkanSita = new CutiMelahirkan("Sita");

console.log("Sistem Pengajuan Cuti\n");

cutiTahunanBudi.applyLeave(5);   

cutiSakitBudi.applyLeave(3);     

cutiMelahirkanSita.applyLeave(90); 


