import { NextFunction, Request, Response } from "express";
import { addDetails, addUserToDb, deleteProduct, getDash, hashingPassword, loginUser, ProderOrder } from "../services/admin.Services";

export const addUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const details = req.body;
        const newPassword = await hashingPassword(details.password)
        details.password = newPassword
        const admin = await addUserToDb(details)
        res.status(201).json({
            message: "Admin added succesfully",
            success: true,
            data: { admin }
        })
    } catch (err) {
        next(err)
    }
}

export const userLogin = async (req: Request, res: Response, next: NextFunction) => {
    console.log("login as a user or admin")
    try {
        const { username, password } = req.body
        const admin = await loginUser(username, password)
        res.status(201).json({
            message: "Logged in successfully",
            success: true,
            data: { role: admin.role, username: admin.username, token: admin.token }
        })
    } catch (err) {
        next(err)
    }
}

export const addProduct = async (req: Request, res: Response, next: NextFunction) => {
    console.log("adding products",)
    try {
        const body = req.body;
        if (!req.file) {
            return res.status(203).json({ message: "file is empty" })
        }
        const imagePath = req.file.path;
        body.image = imagePath

        const mobile = await addDetails(body)
        return res.status(201).json({
            message: "Mobile added successfully",
            success: true,
            data: { mobile }
        })
    } catch (err) {
        next(err)
    }
}

export const deletedb = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const viewProduct = await deleteProduct(id)
        return res.status(201).json({
            message: "successfuly",
            success: true,
            data: { viewProduct }
        })
    } catch (err) {
        next(err)
    }
}

export const order = async (req: Request, res: Response, next: NextFunction) => {
    console.log("asbdchkigsadjk");
    try {
        const value = req.body
        console.log(value)
        const result = await ProderOrder(value)
        return res.status(201).json({
            message: "order Placed Successfully",
            success: true,
            data: { result }
        })
    } catch (err) {
        next(err)
    }
}

export const dashBoard = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const resp = await getDash();
        res.status(201).json({
            message: "fetched successfully ",
            success: true,
            data: resp
        })
    } catch (err) {
        next(err)
    }
}
