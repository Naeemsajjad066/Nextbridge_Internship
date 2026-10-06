
import { products } from "../config/collections.js"

export const AverageRating=async()=>{
    const aggregated=await products.aggregate([

    {
        $group:{
            _id:'$category',
            Average:{$avg:"$rating"}
        }
    },{
        $project:{
            _id:0,
            category:"$_id",
            AverageRating:'$Average'
        }
    }
]).toArray()
console.log(aggregated)

}