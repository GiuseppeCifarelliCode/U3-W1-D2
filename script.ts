class SonAccount{
    balanceInit:number = 0

    constructor(balanceInit:number) {
        this.balanceInit = balanceInit
    }

    deposit(addMoney:number):number {
        this.balanceInit += addMoney
        return this.balanceInit
    }
    draw(drawMoney:number):number {
        this.balanceInit -= drawMoney
        return this.balanceInit
    }
}

class MotherAccount extends SonAccount {
    interess:number = 0

    constructor(balanceInit:number) {
        super(balanceInit)
    }
    
    calculateInteress() {
        this.interess = 0
        this.interess = this.balanceInit * 0.1
        console.log("Mother Interess", this.interess)
        console.log('Mother Balance',this.balanceInit)
        console.log('First Account Balance', sonAccount.balanceInit);
        
    }
}

const sonAccount = new SonAccount(15000)
const motherAccount = new MotherAccount(30000)
sonAccount.draw(5000)
motherAccount.deposit(10000)
motherAccount.calculateInteress()