import db from "../config/db.js";
import { ObjectId } from "mongodb";

const postId= new ObjectId('6ac3649844303b1e670e25a4')
const userId=new ObjectId('6ac36330f4aa632431423f2e')
const comments=db.collection("comments")


export const createComment=async()=>{
    const result=await comments.insertOne({
        content:"My first comment",
        createdAt:new Date(),
        postId:postId,
        userId:userId
    })
}