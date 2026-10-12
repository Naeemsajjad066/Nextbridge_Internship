import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";

export const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find().populate("userId postId")
        res.status(200).json({
            success: true,
            message: "Comments fetched successfully",
            comments
        })
    } catch (error) {
        console.error("Failed to get comments", error)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const getCommentById = async (req, res) => {
    try {
        const { id } = req.params

        const comment = await Comment.findById(id).populate("userId postId")
        if (!comment) {
            return res.status(404).json({
                success: false,
                message: "Comment not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Comment fetched successfully",
            comment
        })
    } catch (error) {
        console.error("Failed to get comment", error)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const createComment = async (req, res) => {
    try {
        const { content, postId, userId } = req.body ?? {}

        if (!content || !postId || !userId) {
            return res.status(400).json({
                success: false,
                message: "content, postId, and userId are required"
            })
        }

        // verify the post exists
        const post = await Post.findById(postId)
        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            })
        }

        const comment = await Comment.create({ content, postId, userId })

        // push the new comment ref into the post's comments array
        post.comments.push(comment._id)
        await post.save()

        res.status(201).json({
            success: true,
            message: "Comment created successfully",
            comment
        })
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                message: error.message
            })
        }

        console.error("Failed to create comment", error)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const updateComment = async (req, res) => {
    try {
        const { id } = req.params
        const { content } = req.body ?? {}

        if (!content) {
            return res.status(400).json({
                success: false,
                message: "content is required to update"
            })
        }

        const comment = await Comment.findByIdAndUpdate(
            id,
            { content },
            { new: true, runValidators: true }
        )

        if (!comment) {
            return res.status(404).json({
                success: false,
                message: "Comment not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Comment updated successfully",
            comment
        })
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                message: error.message
            })
        }

        console.error("Failed to update comment", error)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params

        const comment = await Comment.findByIdAndDelete(id)
        if (!comment) {
            return res.status(404).json({
                success: false,
                message: "Comment not found"
            })
        }

        // pull the comment ref out of the post's comments array
        await Post.findByIdAndUpdate(comment.postId, {
            $pull: { comments: comment._id }
        })

        res.status(200).json({
            success: true,
            message: "Comment deleted successfully"
        })
    } catch (error) {
        console.error("Failed to delete comment", error)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}
