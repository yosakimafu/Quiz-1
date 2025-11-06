class Payment{
    constructor() {
        this.baseCreditCardAmount = 
        this.baseEWalletAmount =
        this.BankTransferAmount = 
    }
    calculateAmount() {
        return console.log(`${this.saldo}`);
    }
}

class CreditCard extends Payment{
    calculateAmount() { 
        console.log(`Anda membayar sebesar ${this.baseCreditCardAmount} lewat ${this.}`);
    }
}


class EWallet extends Payment{
    calculateAmount(){
        console.log(`Anda membayar sebesar ${this.baseCreditCardAmount} lewat ${this.}`);
    }
}

class BankTransfer extends Payment{
    calculateAmount(){
        console.log(`Anda membayar sebesar ${this.baseCreditCardAmount} lewat ${this.}`);
    }
}