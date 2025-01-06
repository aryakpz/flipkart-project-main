import { NextFunction } from "express";

export const authRole = (...roles: string[]) => {
    return (req: any, res: any, next: NextFunction) => {
        console.log("req.user in authRole middleware:", req.user);

        if (!req.user || !req.user.role) {
            return res.status(401).json({ message: "Unauthorized: Role information missing" });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access Denied: Insufficient permissions" });
        }

        console.log("Access granted for role:", req.user.role);
        next();
    };
};

