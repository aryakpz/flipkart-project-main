import { addAdmin, addProduct, getUser, loginAdmin, viewProduct } from "../controllers/adminController"
import { loginAuthentication } from "../middleware/LoginAuthentication";
import { SigninValidation } from "../middleware/validaitonMiddleware";
import { AdminSchema } from "../schema/admin.Schema";
import { adminLogin } from "../services/admin.Services";
import { upload } from "../uploads/uploads";

const express=require("express");

 export const adminRoute=express.Router()

 adminRoute.get('/users',getUser)
 adminRoute.post('/sign',SigninValidation(AdminSchema),addAdmin)
 adminRoute.post('/login',loginAdmin)
 adminRoute.post('/addProduct',upload.single('image'),addProduct)
 adminRoute.get('/viewProduct',viewProduct)