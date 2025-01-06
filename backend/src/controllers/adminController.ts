import { NextFunction, Request, Response } from "express";
import { addAdminToDb, addDetails, adminLogin, deleteProduct, displayProduct, filterdbdata, getAllUser, getDash, ProderOrder, sortingDb } from "../services/admin.Services";
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
        const { details } = req.body
        const newPassword = await hashingPassword(details.password)
        details.password = newPassword
        const admin = await addAdminToDb(details)
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

export const viewProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const viewProduct = await displayProduct()
        return res.status(201).json({
            message: "successfuly",
            success: true,
            data: { viewProduct }
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

export const filter = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const values = req.body;
        const filterdata = await filterdbdata(values)
        return res.status(200).json({
            message: "filterd successfully",
            successs: true,
            data: { filterdata }
        })
    } catch (err) {
        next(err)
    }
}

export const sort = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.body;
        const resp = await sortingDb(id);
        return res.status(200).json({
            message: "sorted successfully",
            success: true,
            data: resp
        })
    } catch (err) {
        next(err)
    }
}

export const search = async (req: Request, res: Response, next: NextFunction) => {
    const val = req.body
    console.log(val, "njjkj", req.body.q)
}

export const order = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const value = req.body
        console.log(value)
        const result = await ProderOrder(value)
        return res.status(201).json({
            message: "order Placed Successfully",
            success: true,
            data: { result }
        })
    }
    catch (err) {
        next(err)
    }
}

export const dashBoard = async (req:Request,res: Response, next: NextFunction) => {
    try {
        const resp = await getDash();
        res.status(201).json({
            message: "fetched successfully ",
            success: true,
            data: { resp }
        })
    }
    catch (err) {
        next(err)
    }
}          