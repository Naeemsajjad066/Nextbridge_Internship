class Engine{
    start(){
        console.log("Inside Engine.start()")
        console.log(this)
    }
}

class Car{
    constructor(){
        this.engine=new Engine()
    }
    start(){
        console.log("Inside the Car.start()");
        console.log(this)
        this.engine.start()
    }
}

const car= new Car()
car.start()