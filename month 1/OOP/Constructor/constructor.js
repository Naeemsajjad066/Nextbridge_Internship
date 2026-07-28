class Car{
    constructor(name,model){
        this.name=name;
        this.model=model
    }
}

const c=new Car("Suzuki",2003)
console.log(c.name,c.model)


// Default parameters

class Car1{
    constructor(name="Toyota",model=2003){
        this.name=name;
        this.model=model;
    }

}

const c1=new Car1();
console.log(c1.name,c1.model)

//Constructor Validations

class Car2{
    constructor(name="Suzuki",model=2004){
        if(model<0){
            throw new Error("Enter a valid model")
        }

        this.name=name;
        this.model=model;
    }
}

const c2= new Car2("Suzuki",2003);
console.log(c2.name,c2.model)