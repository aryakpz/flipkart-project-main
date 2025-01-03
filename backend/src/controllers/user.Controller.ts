import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv"
import { displayProduct, filterdbdata, getSingleProduct, searchData, sortingDb } from "../services/user.Services";
dotenv.config()

export const viewProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const viewProduct = await displayProduct();
        return res.status(201).json({
            message: "successfuly",
            success: true,
            data: { viewProduct }
        })
    } catch (err) {
        next(err)
    }
}

export const singleProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await getSingleProduct(id);
        return res.status(201).json({
            message: "fetched successfully",
            success: "true",
            data: { result }
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

export const search = async (req: any, res: any, next: NextFunction) => {
    try {
        const val = req.body.search;       
        const resp = await searchData(val)
        console.log(resp)
        return res.status(200).json({
            message: "searched successfully",
            success: true,
            data: { resp }
        })
        
    }
    catch (err) {           
        next(err)
    }
}
      
                 


