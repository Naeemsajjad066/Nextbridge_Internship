import { Router } from "express";
import {
    getAllPosts,
    getPostById,
    getPostBySlug,
    createPost,
    updatePost,
    deletePost,
    getPostWithComments
} from "../controllers/postController.js";

const router = Router()

router.get("/", getAllPosts)
router.get("/slug/:slug", getPostBySlug)
router.get("/:id", getPostById)
router.get("/:id/comments", getPostWithComments)
router.post("/", createPost)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)

export default router
