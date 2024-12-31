import {  addProduct, addUser, dashBoard, deletedb, order, userLogin } from "../controllers/adminController"
import { MobileValidation } from "../middleware/mobileValidation";
import { authRole } from "../middleware/roleAutherisation";
import { authenticateUser } from "../middleware/userTokenValidation";
import { SigninValidation } from "../middleware/validaitonMiddleware";
import { MobileSchema } from "../schema/mobile.schema";
import { UsersLogin, UsersSchema } from "../schema/users.schema";
import { upload } from "../uploads";
const express=require("express");

 export const adminRoute=express.Router()
 adminRoute.post('/addProduct',authenticateUser,authRole("admin"),upload.single('image'),addProduct)
 adminRoute.delete('/delete/:id',authenticateUser,authRole("admin"),deletedb)
 adminRoute.post('/order',order)
 adminRoute.get('/dashboard',dashBoard)          
 adminRoute.post('/sign',SigninValidation(UsersSchema),addUser)
 adminRoute.post('/login',SigninValidation(UsersLogin),userLogin)