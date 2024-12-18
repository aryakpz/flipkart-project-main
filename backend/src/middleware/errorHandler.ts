import { ErrorRequestHandler, NextFunction } from "express";
import { constants } from "../constance";

export const errorHandler: ErrorRequestHandler = (err: any, res: any, req: any, next: NextFunction) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stak
            })
            break;
        case constants.SERVER_ERROR:
            res.json({
                title:"Server Error",
                message:err.message,
                StackTrace:err.stak
            })
            break;
        case constants.FORBIDDEN:
            res.json({
                title:"Forbidden Error",
                message:err.message,
                StackTrace:err.stak
            })
            break;
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Error",
                message:err.message,
                StackTrace:err.stak
            })
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title:"Unauthorization",
                message:err.message,
                StackTrace:err.stak
            })
            break;
        default:
            console.log("No Error!")
            break;
    }
}