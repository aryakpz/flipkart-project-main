import express from "express";
import dotenv from "dotenv"
import { dbconnection } from "./database";
import {userRoutes} from "./routes/userRoutes"
import { adminRoute } from "./routes/adminRoutes";
import { errorHandler } from "./middleware/errorHandler";
import multer from 'multer';
import path from "path";


dotenv.config();

(async () => {
    await dbconnection();
})()
const app = express();
const cors = require("cors")
app.use(express.json())
app.use(cors());
app.use(errorHandler)
app.use('/user',userRoutes)
app.use('/admin',adminRoute)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is Running in the port ${PORT}`)
})