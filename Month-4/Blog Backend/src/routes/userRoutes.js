import { Router } from "express";
import { addUser, getAllUser } from "../controllers/userController.js";

const router=Router()

router.get("/",getAllUser)
router.post("/",addUser)

export default router