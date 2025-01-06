import { Request,Response,NextFunction } from "express";
import { AnyZodObject,z } from "zod";

export const SigninValidation=(schema:AnyZodObject)=>
(req:Request,res:Response,next:NextFunction)=>{
    try{
        schema.parse(req.body);
        next();
    }catch(err){
        if(err instanceof z.ZodError){
          return res.status(400).json({
            staus:400,
            message:err.issues,
            success:false
          })
        }
        next(err)
    }
}
    

