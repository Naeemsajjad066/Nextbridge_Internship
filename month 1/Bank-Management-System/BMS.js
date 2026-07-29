import { createInterface } from "readline";


class Account {
    constructor(accountNumber, ownerName, balance = 0) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
        this.transactions = [];
    }

    addTransaction(type, amount) {
        this.transactions.push({
            type,
            amount,
            date: new Date()
        });
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Enter a valid amount.");
            return false;
        }

        this.balance += amount;
        this.addTransaction("Deposit", amount);
        console.log(`Rs.${amount} deposited successfully.`);
        return true;
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Enter a valid amount.");
            return false;
        }
        if (amount > this.balance) {
            console.log("Insufficient balance.");
            return false;
        }

        this.balance -= amount;
        this.addTransaction("Withdraw", amount);
        console.log(`Rs.${amount} withdrawn successfully.`);
        return true;
    }

    showBalance() {
        console.log(`Current Balance: Rs.${this.balance}`);
    }

    showTransactions() {
        console.log("\n===== Transaction History =====");
        if (this.transactions.length === 0) {
            console.log("No transactions found.");
            return;
        }
        for (const transaction of this.transactions) {
            console.log(
                `-- ${transaction.type} | Rs.${transaction.amount} | ${transaction.date.toLocaleDateString()}`
            );
        }
    }
}


class SavingAccount extends Account {
    constructor(accountNumber, ownerName, balance = 0) {
        super(accountNumber, ownerName, balance);
        this.minimumBalance = 500;
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Enter a valid amount.");
            return false;
        }
        if (this.balance - amount < this.minimumBalance) {
            console.log(`Minimum balance of Rs.${this.minimumBalance} must be maintained.`);
            return false;
        }

        this.balance -= amount;
        this.addTransaction("Withdraw", amount);
        console.log(`Rs.${amount} withdrawn successfully.`);
        return true;
    }
}


class CheckingAccount extends Account {
    constructor(accountNumber, ownerName, balance = 0) {
        super(accountNumber, ownerName, balance);
        // Maximum amount the account can go below zero
        this.overdraftLimit = 1000;
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Enter a valid amount.");
            return false;
        }

        const remainingBalance = this.balance - amount;

        if (remainingBalance < -this.overdraftLimit) {
            const canWithdraw = this.balance + this.overdraftLimit;
            console.log("Maximum overdraft limit exceeded.");
            console.log(`You can withdraw up to Rs.${canWithdraw}.`);
            return false;
        }

        this.balance -= amount;
        this.addTransaction("Withdraw", amount);
        console.log(`Rs.${amount} withdrawn successfully.`);
        return true;
    }
}


const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const accounts = [
    new Account(11111, "Naeem Sajjad", 5000),
    new SavingAccount(2222, "Waseem", 10000),
    new CheckingAccount(3333, "Nasir", 2000)
];

let currentAccount = null;


function start() {
    console.log("\n========== BANK MANAGEMENT SYSTEM ==========");
    console.log("Available Accounts:");

    accounts.forEach(acc => {
        console.log(
            `Account No: ${acc.accountNumber} | ${acc.ownerName} | ${acc.constructor.name}`
        );
    });

    rl.question("\nEnter Account Number: ", (number) => {
        currentAccount = accounts.find(acc => acc.accountNumber == number);

        if (!currentAccount) {
            console.log("Account not found.");
            return start();
        }

        showMenu();
    });
}

function showMenu() {
    console.log("\n==================================");
    console.log(`Welcome, ${currentAccount.ownerName}`);
    console.log("==================================");
    console.log("1. Deposit");
    console.log("2. Withdraw");
    console.log("3. Show Balance");
    console.log("4. Show Transactions");
    console.log("5. Switch Account");
    console.log("6. Exit");

    rl.question("\nChoose an option: ", (choice) => {
        switch (choice) {
            case "1":
                depositMenu();
                break;
            case "2":
                withdrawMenu();
                break;
            case "3":
                currentAccount.showBalance();
                showMenu();
                break;
            case "4":
                currentAccount.showTransactions();
                showMenu();
                break;
            case "5":
                start();
                break;
            case "6":
                console.log("Thank you for using our bank.");
                rl.close();
                break;
            default:
                console.log("Invalid choice.");
                showMenu();
        }
    });
}


function depositMenu() {
    rl.question("Enter deposit amount: ", (amount) => {
        currentAccount.deposit(Number(amount));
        showMenu();
    });
}


function withdrawMenu() {
    rl.question("Enter withdrawal amount: ", (amount) => {
        currentAccount.withdraw(Number(amount));
        showMenu();
    });
}

start();
