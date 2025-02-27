import jwt from "jsonwebtoken";
import { NextFunction } from "express";

export const authenticateUser = (req: any, res: any, next: NextFunction) => {
    try {
        const authHeader = req.headers.Authorization ||  req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: "Not a valid user" });
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Token not found" });
        }
        if (!process.env.JWT_KEY) {
            return res.status(401).json({ message: "key not found" });
        }
        jwt.verify(token, process.env.JWT_KEY, (err: any, decoded: any) => {
            if (err) {
                res.status(401);
                throw new Error("User is not uthorized")
            }
            req.user = decoded.admin
            next();
        })
    } catch (err) {
        return res.status(401).json({ message: "Authentication failed" });
    }
}             