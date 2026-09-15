// this is controller for user related operations
import { login, signup } from "../services/userServices.js";

export const signupUser = async(req, res,next) => {
    try{
        const { name, email, password } = req.body;
        const user = await signup({ name, email, password });
        res.status(201).json({ message: "User registered successfully", user });
    }catch(err){
        next(err);}
}
export const loginUser = async(req, res,next) => {
    try{
        const { email, password } = req.body;
        const { user, accessToken } = await login(email, password);
        res.status(200).json({ message: "User logged in successfully", user, accessToken });
    }catch(err){
        next(err);} }

export const currentUser = (req, res) => {
    res.status(200).json({ user: req.user });
};
