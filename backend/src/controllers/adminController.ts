import { NextFunction, Request, Response } from "express";
import { addAdminToDb, addDetails, adminLogin, displayProduct, getAllUser } from "../services/admin.Services";
import { hashingPassword } from "../services/user.Services";

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await getAllUser();
        res.status(201).json({
            message: "Fethed succeffully",
            success: true,
            data: { data }
        })
    } catch (err) {
        next(err)
    }
}

export const addAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, username, password } = req.body
        const newPassword = await hashingPassword(password)
        const admin = await addAdminToDb(name, email, username, newPassword)
        res.status(201).json({
            message: "Admin added succesfully",
            success: true,
            data: { admin }
        })
    } catch (err) {
        next(err)
    }
}

export const loginAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body
        const admin = await adminLogin(username, password)
        res.status(201).json({
            message: "Logged in successfully",
            success: true,
            data: { username: admin.username, token: admin.token }
        })
    } catch (err) {
        next(err)
    }
}


export const addProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { brand, ram, rom, price, warrenty, processor, camara, exchange, discount, screen } = req.body;
        if (!req.file) {
            return res.status(203).json({ message: "file is empty" })
        }
        const imagePath = req.file.path;
        const mobile = await addDetails(brand, ram, rom, price, warrenty, processor, camara, exchange, discount, screen, imagePath)
        return res.status(201).json({
            message: "Mobile added successfully",
            success: true,
            data: { mobile }
        })
    } catch (err) {
        next(err)
    }
}

export const viewProduct = async (req: Request, res: Response, next: NextFunction) => {
    console.log("sdclnjo")
    try {
        const viewProduct = await displayProduct()
        console.log("sdkjk")
        return res.status(201).json({
            message: "successfuly",
            success: true,
            data: { viewProduct }
        })

    } catch (err) {
        next(err)
    }
}