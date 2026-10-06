import db from "../config/db.js";
import { ObjectId } from "mongodb";

const posts = db.collection("posts");
const userId = new ObjectId('6ac36330f4aa632431423f2e');
export const createPost=async()=>{
    const result=await posts.insertOne({
        title:"Programming now daya",
        detail:"Programing is becoming more easy now days due to AI",
        createdAt: new Date(),
        userId:userId
    })
    console.log(result)
}