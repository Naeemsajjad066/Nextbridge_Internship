import "dotenv/config";
import fs from "fs/promises";

const usersFilePath = process.env.USERS_FILE_PATH;

export const createUser=async(user)=>{
    const data=await fs.readFile(usersFilePath,"utf-8");
    const users=JSON.parse(data);
    users.push(user);
    await fs.writeFile(usersFilePath,JSON.stringify(users));
}

export const getUserByEmail=async(email)=>{
    const data=await fs.readFile(usersFilePath,"utf-8");
    const users=JSON.parse(data);
    return users.find(user=>user.email===email);
}
