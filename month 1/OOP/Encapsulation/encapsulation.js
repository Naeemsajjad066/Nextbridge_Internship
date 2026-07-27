// class BankAccount{
//     #balance;

//     constructor(owner,balance){
//         if(balance<0){
//             throw new Error("Balance can not be less than 0")
//         }
//         this.owner=owner;
//         this.#balance=balance;
//     }

//     getBalance(){
//         return this.#balance;
//     }
//     setBalance(balance){
//         if(balance<0){
//             throw new Error("Balance cant be less than 0")
//         }
//         this.#balance=balance
//     }
// }

// const b=new BankAccount("Naeem",2000)
// console.log(b.getBalance())

// try {
//     b.setBalance(-3000)

// } catch (error) {
//     console.log(error.message)
// }
// console.log(b.getBalance())


class BankAccount {
    #balance;
    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance
    }
    getBalance() {
        return this.#balance;
    }
    depositBalance(balance) {
        if (balance < 0) {
            console.log("Deposit must be positive")
            return
        }
        console.log(`You deposited: RS${balance}`)
        this.#balance += balance
    }
    withdraw(amount) {
        if(amount<=0){
            console.log("Invalid amount")
            return 
        }
        if(amount>this.#balance){
            console.log("Insufficient Balance")
            return
        }
        console.log(`You withdrawn RS${amount}`)
        this.#balance-=amount
    }
}

const account=new BankAccount("Naeem",5600)
console.log(account.owner)
console.log(account.getBalance())
account.withdraw(5600)
console.log(account.getBalance())
account.depositBalance(3230)
console.log(account.getBalance())
