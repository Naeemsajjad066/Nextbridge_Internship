import User from "../models/user.model.js"

export const getAllUser=async(req,res)=>{
    try {
        const users=await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.error("Failed to get users", error)
        res.status(500).json({
            message:"Failed to get users"
        })
    }
}
export const addUser=async(req,res)=>{
    try {
        const { name, email, password, age } = req.body ?? {}

        if (!name || !email || !password || age === undefined) {
            return res.status(400).json({
                message:"name, email, password, and age are required"
            })
        }

        const exist = await User.findOne({ email })
        if(exist){
            return res.status(409).json({
                message:"User already exists"
            })
        }

        await User.create({ name, email, password, age })
        res.status(201).json({
            message:"User created successfully"
        })
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({
                message: error.message
            })
        }

        if (error?.code === 11000) {
            return res.status(409).json({
                message:"User already exists"
            })
        }

        console.error("Failed to create user", error)
        res.status(500).json({
            message:"Internal server Error"
        })
    }
}