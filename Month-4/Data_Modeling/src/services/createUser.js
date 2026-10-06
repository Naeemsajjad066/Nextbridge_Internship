import db from "../config/db.js";

const users=db.collection("users")


export const CreateUser=async()=>{
    const result = await users.insertOne({
    name:"Naeem Sajjad",
    email:"naeem@gmail.com",
    age:21,
    city:"Lahore"
})
console.log(result)
}
