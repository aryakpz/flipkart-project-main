import { filter, search, singleProduct, sort, viewProduct } from "../controllers/user.Controller"

const express = require('express')
export const userRoutes = express.Router()

userRoutes.get('/viewProduct', viewProduct)
userRoutes.get('/singleProduct/:id',singleProduct)
userRoutes.post('/sort', sort)
userRoutes.post('/filter', filter)
userRoutes.post('/search', search)