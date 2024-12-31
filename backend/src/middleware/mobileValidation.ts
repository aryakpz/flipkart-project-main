import { Request, Response, NextFunction } from "express";
import { AnyZodObject, z } from "zod";

export const MobileValidation = (schema: AnyZodObject) =>
    (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body)
        try {
            schema.parse({
                ...req.body,
                image: req.file?.filename || req.body.image, 
            });
            next();
        } catch (err) {
            if (err instanceof z.ZodError) {
                return res.status(400).json({
                    status: 400,
                    message: err.issues,
                    success: false,
                });
            }
            console.error("Validation Error:", err);
            next(err);
        }
    };

