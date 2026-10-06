import { products } from "../config/collections.js";


export const Average_Price_of_Producst_In_Each_category=async()=>{

    const aggregate=await products.aggregate([
        {
            $group:{
                _id:"$category",
                AveragePrice:{$avg:"$price"}
            },
        },{
            $project:{
                _id:0,
                Category:"$_id",
                AveragePrice:"$AveragePrice"
            }
        }
    ]).toArray()

    console.log(aggregate)

}