import { Request, Response, NextFunction } from "express";
import { addUserToDb, getSingleUser, hashingPassword } from "../services/user.Services";
import dotenv from "dotenv"
dotenv.config()

export const postUser = async (req: Request, res: Response, next: NextFunction) => {
    console.log(5, req.body)
    try {
        const { name, email, username, password } = req.body
        const newPassword = await hashingPassword(password)
        const user = await addUserToDb(name, email, username, newPassword)
        res.status(201).json({
            message: "User Added Successfull!",
            success: true,
            data: { user }
        });
    } catch (err) {
        next(err)
    }
}

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body
        const user = await getSingleUser(username, password)
        res.status(200).json({
            message: "Logged in SuccessFully",
            success: true,
            data: { username: user.username, token: user.token }
        });
    } catch (err) {
        next(err)
    }
}