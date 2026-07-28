class Animal{
    constructor(name){
        this.name=name
    }
    eat(){
        console.log("Eating....")
    }
    sleep(){
        console.log("Sleeping...")
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed=breed
    }
    bark(){
        console.log(`${this.name} is Barking...`)
    }
    //Method overriding
    sleep(){
        console.log(`${this.name} is sleeping`)
    }

}

const d=new Dog("Bully","Percian");
d.eat()
d.sleep()
d.bark()
