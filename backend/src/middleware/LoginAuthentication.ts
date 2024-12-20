import { NextFunction, Request, Response } from "express"
import { AnyZodObject,z } from "zod"

export const loginAuthentication=(schema:AnyZodObject)=>{
    (req:Request,res:Response,next:NextFunction)=>{
        console.log(777)
        try{
            schema.parse(req.body)
            next()
        }
        catch(err){
            if(err instanceof z.ZodError){
                return res.status(400).json({
                    status:400,
                    message:err.issues,
                    success:false
                })
            }
            next(err)
        }
    }
}        