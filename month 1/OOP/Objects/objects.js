const Person={
    name:"Naeem",
    age:23
}

console.log(Person.name)

// Property shorthand

const name="Naeem"
const age=23

const Person1={
    name,
    age
}

console.log(Person1.name,Person1.age)


//Computed Keys

const key="city"

const Person2={
    name,
    age,
    [key]:"lahore"
}
console.log(Person2)