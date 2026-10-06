import { ObjectId } from "mongodb";
import db from "../config/db.js";

//Get comments of specificPost
const comments=db.collection("comments")

const postId=new ObjectId('6ac36900000003b3aa4458a8')
export const getCommentsOfPost=async()=>{
    const results=await comments.find({postId:postId}).toArray()
    console.log(results)
}


//Get comments and users who wrote them

export const getCommentsAndUsers=async()=>{
    const results=await comments.aggregate([
        {
            $lookup:{
                from:"users",
                localField:"userId",
                foreignField:"_id",
                as:"user"
            }
        },{
            $unwind:"$user"
        },{
            $project:{
                _id:0,
                content:1,
                "user.name":1,
                "user.email":1
            }
        }
    ]
    ).toArray()
    console.log(results)
}