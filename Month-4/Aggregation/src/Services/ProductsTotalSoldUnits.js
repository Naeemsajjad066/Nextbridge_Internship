import { products } from "../config/collections.js";


export const Total_Sold_Units_By_Category=async()=>{
const aggregate=await products.aggregate([
    {
        $group:{
            _id:"$category",
            totalSolds:{$sum:"$units_sold"}
        },
        
    },{
        $sort:{
            totalSolds:-1
        }
    },
    {
        $project:{
            _id:0,
            category:"$_id",
            totalSolds:'$totalSolds'
        }
    }
]).toArray()

console.log(aggregate)
}

