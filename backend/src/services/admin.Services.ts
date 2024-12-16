import { ADMINTABLE } from "../models/admin.Model"
import { PRODUCTTABLE } from "../models/mobile.model";
import { USERTABLE } from "../models/user.model"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const getAllUser = async () => {
    const users = await USERTABLE.findAll()
    return users
}

export const hashingPassword = async (password: string) => {
    const newPass = await bcrypt.hash(password, 8)
    return newPass
}

export const addAdminToDb = async (name: string, email: string, username: string, password: string) => {
    const insert = await ADMINTABLE.create({ name, email, username, password })
    return insert
}

export const adminLogin = async (username: string, password: string) => {
    const admin = await ADMINTABLE.findOne({ where: { username: username } })
    if (!admin) {
        throw new Error("User not found!")
    }

    const passwordCheck = bcrypt.compare(password, admin.password)
    if (!passwordCheck) {
        throw new Error("Invlid password")
    }
    
    if (!process.env.ADMIN_KEY) {
        throw new Error("Something went wrong,key is not available!")
    }
    
    const token = jwt.sign(
        {
            admin: {
                username: admin.username,
                id: admin.id
            }
        },
        process.env.ADMIN_KEY,
        { expiresIn: "24hr" }
    )
    return {
        username: admin.username,
        token: token
    }

}

export const addDetails = async (brand: string, ram: string, rom: string, price: number, warrenty: string, processor: string, camara: string, exchange: string, discount: string, screen: string, image: string) => {
    const mobile = await PRODUCTTABLE.create({ brand, price, ram, rom, warrenty, processor, camara, exchange, discount, screen, image })
    return mobile;
}

export const displayProduct= async()=>{
    console.log("sdclnoe")
    const view =await PRODUCTTABLE.findAll()
    return view
}