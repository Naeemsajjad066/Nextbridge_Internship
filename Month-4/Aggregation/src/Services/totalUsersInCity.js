import { users } from "../config/collections.js"
export const usersInACity=async()=>{
const result=await users.aggregate([

    {
        $group:{
            _id:"$city",
            count:{ $sum:1 }
        }
    },{
        $sort:{
            count:-1
        }
    },{
        $project:{
            _id:0,
            city:"$_id",
            totalUsers:"$count"
        }
    }
]).toArray()


console.log(result)
}
