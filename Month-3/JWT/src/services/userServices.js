import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { getUserByEmail, createUser } from "../models/user.js";
import { CustomError } from "../utills/customError.js";

export const signup = async (userData) => {
  const { name, email, password } = userData;

    // Check if the user already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      throw new CustomError("User already exists", 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = {
      name,
      email,
      password: hashedPassword,
    };

    await createUser(newUser);

    return { name, email };
};

export const login = async (email, password) => {
  const user = await getUserByEmail(email);
    if (!user) {
        throw new CustomError("Invalid email or password", 401);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new CustomError("Invalid email or password", 401);
    }



    const accessToken = jwt.sign(
      { email: user.email, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    return { user: { name: user.name, email: user.email }, accessToken };
};