import { registerSchema } from "../Validations/auth.js";

export const validateRegister = (req, res, next) => {
	const result = registerSchema.safeParse(req.body);

	if (!result.success) {
		return res.status(400).json({
			message: "Invalid request body",
			errors: result.error.flatten().fieldErrors,
		});
	}

	req.body = result.data;
	next();
};

export const validateLogin = (req, res, next) => {
    const result = registerSchema.pick({ email: true, password: true }).safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            message: "Invalid request body",
            errors: result.error.flatten().fieldErrors,
        });
    }

	req.body = result.data;
    next();
}