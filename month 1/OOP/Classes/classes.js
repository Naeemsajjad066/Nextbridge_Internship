// ES5 syntax to create a class

function Person(name,age){
    this.name=name;
    this.age=age;

}

Person.prototype.greet=function(){
    console.log(`Hello ${this.name} your age is ${this.age}`)
}

const p1=new Person("Naeem",23)
p1.greet()


// ES6+ syntax to create a classs

class Person1{
    constructor(name,age){
        this.name=name;
        this.age=age
    }

     greet(){
        console.log(`Hi ${this.name} this is ES6+ syntax and your age is ${this.age}`)
    }
}

const p2= new Person1("Waseem",43)
p2.greet()



