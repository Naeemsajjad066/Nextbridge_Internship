import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
})

// pre-save hook: generate slug from title
postSchema.pre("save", function (next) {
    if (this.isModified("title") || this.isNew) {
        this.slug = this.title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")   // remove special chars
            .replace(/\s+/g, "-")             // spaces → hyphens
            .replace(/-+/g, "-")              // collapse multiple hyphens
    }
    next()
})

export default postSchema
