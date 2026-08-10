import * as yup from "yup"
export const registerSchema = yup.object({
    name: yup
        .string()
        .required("Name is required")
        .min(3, "minimum 3 characters"),
    email: yup
        .string()
        .required("Email is required")
        .email("Enter a valid email"),
    password: yup
        .string()
        .required("password is required")
        .min(8, "password minimum of 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            "Password must contain at least one special character"),
        confirmPassword: yup
                .string()
                .required("Please confirm password")
                .oneOf([yup.ref("password")], "Password must match")
})