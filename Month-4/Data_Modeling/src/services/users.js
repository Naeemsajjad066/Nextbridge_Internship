import db from "../config/db.js"

const users=db.collection("users")
export const getAllUsers=async()=>{
    const result=  await users.find().toArray()
    console.log(result)
}

export const findUserByEmail=async()=>{
    const result=await users.findOne({email:"naeem@gmail.com"})
    console.log(result)
}
export const findUserByAgeGT25=async()=>{
    const result=await users.find({
        age:{$gt:25}
    }).toArray()
    console.log(result)
}

export const FindUserByMultipleCondition=async()=>{
    const result=await users.find({
        age:{$gt:18},
        city:"Lahore"
    }).toArray()

    console.log(result)

}

export const findUserEitherLivesInLahoreOrKarchi=async()=>{
    const result=await users.find({
        // $or:[
        //     {city:"Lahore"},{
        //         city:"Karachi"
        //     }
        // ]
        city:{
            $in:["Lahore","Karachi"]
        }
    }).toArray()

    console.log(result)
}

//Getting Custom FIelds data instead of raw documents

export const FindUsersWithCustomFields=async()=>{
    const result=await users.find({
        age:{$gt:25}
    },{projection:{
        _id:0,
        name:1,
        // email:1,
        age:1
    }
}).sort({age:1}).toArray()
    console.log(result)
}


//use limit to return limited users

export const FindUsersLimited=async()=>{
    const results= await users.find({},{projection:{
        _id:0,
        name:1,
        age:1
    }}).sort({age:1}).skip(2).limit(3).toArray()
    console.log(results)
}