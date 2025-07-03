class PrivateBankAccount {
     private balance: number = 0; //#붙이면 private 속성 가짐

    deposit(amount: number) {
        this.balance += amount;
        console.log(`${this.balance}원이 입급되었습니다.`)
    }

    getBalance() {
        console.log(`잔고는 ${this.balance}원 입니다.`);
    }

    setBalance(amount: number) {
        amount *= 1.1;
        this.balance = amount;
    }
}

class BankAccount {
    balance: number = 0; //#붙이면 private 속성 가짐

    deposit(amount: number) {
        this.balance += amount;
        console.log(`${this.balance}원이 입급되었습니다.`)
    }

    getBalance() {
        console.log(`잔고는 ${this.balance}원 입니다.`);
    }
}

let account1 = new BankAccount();
account1.balance = 1000000;
account1.getBalance();
account1.deposit(1000000);
account1.getBalance();

console.log("");
console.log("");

let account2 = new PrivateBankAccount();
account2.setBalance(1000000);
account2.getBalance();
account2.deposit(1000000);
account2.getBalance();
