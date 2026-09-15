import { Router } from "express";
import { currentUser, loginUser, signupUser } from "../controllers/user_controller.js";
import { validateLogin, validateRegister } from "../middlewares/validate.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = Router();

router.post("/signup", validateRegister, signupUser);
router.post("/login", validateLogin, loginUser);
router.get("/me", authenticate, currentUser);

export default router;