import { NextFunction, Request, Response } from "express";
import { addAdminToDb, addDetails, adminLogin, deleteProduct, displayProduct, filterdbdata, getAllUser } from "../services/admin.Services";
import { hashingPassword } from "../services/user.Services";
import { phoneProps } from "../Types/type";
import { string } from "zod";
import { data } from "react-router-dom";

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
        const body=req.body;

        if (!req.file) {
            return res.status(203).json({ message: "file is empty" })
        }
        const imagePath = req.file.path;
        body.image=imagePath
       
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
        const {id}=req.params;
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

export const filter=async(req:Request,res:Response,next:NextFunction)=>{
    console.log("filter section",req.body)
    try{
        const values=req.body;
        console.log(values)
        const filterdata= await filterdbdata(values)
        console.log("fil",filterdata)
        return res.status(200).json({
            message:"filterd successfully",
            successs:true,
            data:{filterdata}
        })
    }catch(err){
        next(err)
    }
}
