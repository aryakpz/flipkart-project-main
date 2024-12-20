import { addAdmin, addProduct, deletedb, filter, getUser, loginAdmin, sort, viewProduct } from "../controllers/adminController"
import { SigninValidation } from "../middleware/validaitonMiddleware";
import { AdminSchema } from "../schema/admin.Schema";
import { upload } from "../uploads";

const express=require("express");

 export const adminRoute=express.Router()

 adminRoute.get('/users',getUser)
 adminRoute.post('/sign',SigninValidation(AdminSchema),addAdmin)
 adminRoute.post('/login',loginAdmin)
 adminRoute.post('/addProduct',upload.single('image'),addProduct)
 adminRoute.get('/viewProduct',viewProduct)
 adminRoute.delete('/delete/:id',deletedb)
 adminRoute.post('/sort',sort)
 adminRoute.post('/filter',filter)