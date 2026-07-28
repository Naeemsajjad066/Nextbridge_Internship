class MenuItem {
    #price
    constructor(name, price) {
        this.name = name;
        this.#price = price
    }
    getPrice() {
        return this.#price
    }
}

class Pizza extends MenuItem {
    constructor(name, price) {
        super(name, price);
        this.toppings = []
    }
    addTopping(name, price) {
        this.toppings.push({
            name,
            price
        })
        console.log(`${name} is added`)
    }
    getPrice() {
        let totalPrice = super.getPrice()

        for (const topping of this.toppings) {
            totalPrice += topping.price;
        }
        return totalPrice
    }
}

class Order {
    constructor() {
        this.items = []
    }

    addItem(item){
        this.items.push(item)
        console.log(`${item.name} is added`)
    }

    removeItem(itemName){
        this.items=this.items.filter(item=>item.name!==itemName)
    }
    calculateTotal(){
        let total =0;
        for(const item of this.items){
            total+=item.getPrice()

        }
        return total;
    }

    showOrder(){
        console.log("-------Order-------")
        for (const item of this.items){
            console.log(`${item.name} - RS${item.getPrice()}`)
        }
        console.log("-------------------")
        console.log(`Total- ${this.calculateTotal()}`)
    }
}


const burger = new MenuItem("Burger", 10);

const pizza = new Pizza("Large Pizza", 20);
pizza.addTopping("Cheese", 3);
pizza.addTopping("Olives", 2);

const order = new Order();

order.addItem(burger);
order.addItem(pizza);

order.showOrder();