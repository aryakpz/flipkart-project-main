import express from "express";
import dotenv from "dotenv"
import { dbconnection } from "./database";
dotenv.config();

(async()=>{
 await dbconnection();
})()

const app = express();
const cors = require("cors")
app.use(express.json())
app.use(cors());


const PORT =process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is Running in the port ${PORT}`)
})