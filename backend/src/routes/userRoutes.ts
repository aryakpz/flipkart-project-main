import { loginUser, postUser } from "../controllers/user.Controller"
import { SigninValidation } from "../middleware/validaitonMiddleware"
import { UserLogin, UserSchema } from "../schema/user.Schema"


const express =require('express')
 export const userRoutes = express.Router()

 userRoutes.post('/post',SigninValidation(UserSchema),postUser)
 userRoutes.post('/login',loginUser)