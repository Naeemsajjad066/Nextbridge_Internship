import Post from "../models/post.model.js"

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().select("title -_id").populate("userId", "name email")
        res.status(200).json(posts)
    } catch (error) {
        console.error("Failed to get posts", error)
        res.status(500).json({
            message: "Failed to get posts"
        })
    }
}

export const getPostById = async (req, res) => {
    try {
        const { id } = req.params

        const post = await Post.findById(id).populate("userId", "name email")
        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            })
        }

        res.status(200).json(post)
    } catch (error) {
        console.error("Failed to get post", error)
        res.status(500).json({
            message: "Failed to get post"
        })
    }
}

export const createPost = async (req, res) => {
    try {
        const { title, content, userId } = req.body ?? {}

        if (!title || !content || !userId) {
            return res.status(400).json({
                message: "title, content, and userId are required"
            })
        }

        const post = await Post.create({ title, content, userId })
        res.status(201).json({
            message: "Post created successfully",
            post
        })
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({
                message: error.message
            })
        }

        console.error("Failed to create post", error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const { title, content } = req.body ?? {}

        if (!title && !content) {
            return res.status(400).json({
                message: "At least one of title or content is required to update"
            })
        }

        const post = await Post.findByIdAndUpdate(
            id,
            { title, content },
            { new: true, runValidators: true }
        )

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            })
        }

        res.status(200).json({
            message: "Post updated successfully",
            post
        })
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({
                message: error.message
            })
        }

        console.error("Failed to update post", error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params

        const post = await Post.findByIdAndDelete(id)
        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            })
        }

        res.status(200).json({
            message: "Post deleted successfully"
        })
    } catch (error) {
        console.error("Failed to delete post", error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const getPostBySlug = async (req, res) => {
    try {
        const { slug } = req.params

        const post = await Post.findOne({ slug })
            .populate("userId", "name email")
            .populate({
                path: "comments",
                populate: {
                    path: "userId",
                    select: "name email"
                }
            })

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            })
        }

        res.status(200).json(post)
    } catch (error) {
        console.error("Failed to get post by slug", error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const getPostWithComments = async (req, res) => {
    try {
        const { id } = req.params

        const post = await Post.findById(id)
            .populate("userId", "name email")
            .populate({
                path: "comments",
                populate: {
                    path: "userId",
                    select: "name email"
                }
            })

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            })
        }

        res.status(200).json(post)
    } catch (error) {
        console.error("Failed to get post with comments", error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}
