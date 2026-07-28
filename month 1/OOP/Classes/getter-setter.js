//getter function
class Person1{
    constructor(first,last){
        this.first=first;
        this.last=last;
    }

    get fullName(){
        return this.first+" "+this.last
    }
}
const p1=new Person1("Naeem","Sajjad")
console.log(p1.fullName)


//setter function

class Person2{
    constructor(){
        this.first="";
        this.last="";
    }

    set fullName(value){
        const parts=value.split(" ");
        this.first=parts[0];
        this.last=parts[1]
    }
}
const p2=new Person2();
p2.fullName="Naeem Sajjad"
console.log(`First Name: ${p2.first}`);
console.log(`Last Name: ${p2.last}`)


//getter and setter combined


class Person3{
    constructor(first,last){
        this.first=first;
        this.last=last
    }
    get fullName(){
        return `${this.first} ${this.last}`
    }
    set fullName(value){
        const [first,last]=value.split(" ")
        this.first=first;
        this.last=last;
    }
}
const p3=new Person3("Naeem","Sajjad")
console.log(p3.fullName)
p3.fullName="Yasir Khan"
console.log(p3.fullName)