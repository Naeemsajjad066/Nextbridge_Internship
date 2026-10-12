import mongoose from 'mongoose'

const commentSchema=new mongoose.Schema({
    content:String,
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

})

export default commentSchema