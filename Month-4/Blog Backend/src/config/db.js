import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.Local_URI)
        console.log("Database connected Successfully")

    } catch (error) {
        console.error("MongoDb Connection is failed",error.message)
        process.exit(1)
    }



}
