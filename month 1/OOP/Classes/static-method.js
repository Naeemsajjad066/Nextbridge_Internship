class Car{
    constructor(brand,model){
        this.brand=brand;
        this.model=model;
    }
    //static method
    static type(){
        console.log("This is only class function no object can access this")
    }
    show(){
        console.log(`This is ${this.brand} and model is ${this.model}`)
    }
}

Car.type()
const c=new Car("Suzuki",2003)
c.show()