// Abstract Base Class
class Payment {
    processPayment(amount) {
        throw new Error("Subclasses must implement processPayment()");
    }

    generateReceipt(amount) {
        console.log(`Receipt generated for $${amount}`);
    }
}

// Credit Card Payment
class CreditCardPayment extends Payment {
    processPayment(amount) {
        console.log("===== Credit Card Payment =====");
        console.log("Validating card...");
        console.log("Checking bank...");
        console.log(`Charging $${amount}...`);
        console.log("Saving transaction...");
        this.generateReceipt(amount);
        console.log("Payment Successful!\n");
    }
}

// PayPal Payment
class PayPalPayment extends Payment {
    processPayment(amount) {
        console.log("===== PayPal Payment =====");
        console.log("Logging into PayPal...");
        console.log("Checking PayPal balance...");
        console.log(`Paying $${amount}...`);
        console.log("Saving transaction...");
        this.generateReceipt(amount);
        console.log("Payment Successful!\n");
    }
}

// Cash Payment
class CashPayment extends Payment {
    processPayment(amount) {
        console.log("===== Cash Payment =====");
        console.log(`Receiving $${amount} in cash...`);
        console.log("Counting cash...");
        console.log("Saving transaction...");
        this.generateReceipt(amount);
        console.log("Payment Successful!\n");
    }
}

// Creating Objects
const creditCard = new CreditCardPayment();
const paypal = new PayPalPayment();
const cash = new CashPayment();

// Using the Public API
creditCard.processPayment(100);

paypal.processPayment(250);

cash.processPayment(50);