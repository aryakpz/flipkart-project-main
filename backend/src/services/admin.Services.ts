import { PRODUCTSTABLE } from "../models/mobile.model";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { ordeProps, phoneProps, userProps } from "../Types/type";
import { USERORDERTABLE } from "../models/userOrder.model";
import { USERSTABLE } from "../models/users.model";

export const addUserToDb = async (details: userProps) => {
    const insert = await USERSTABLE.create({ ...details })
    return insert;
}

export const loginUser = async (username: string, password: string) => {
    const admin = await USERSTABLE.findOne({ where: { username: username } })
    if (!admin) {
        throw new Error("User not found!")
    }

    const passwordCheck = await bcrypt.compare(password, admin.password)
    if (!passwordCheck) {
        throw new Error("Invlid password")
    }

    if (!process.env.JWT_KEY) {
        throw new Error("secret key is not available!")
    }

    const token = jwt.sign(
        {
            admin: {
                username: admin.username,
                role: admin.role
            }
        },
        process.env.JWT_KEY,
        { expiresIn: "1hr" }
    )
    return {
        username: admin.username,
        role: admin.role,
        token: token
    }
}

export const hashingPassword = async (password: string) => {
    const newPass = await bcrypt.hash(password, 8)
    return newPass
}

export const addDetails = async (phoneObj: phoneProps) => {
    const mobile = await PRODUCTSTABLE.create({ ...phoneObj })
    return mobile;
}

export const deleteProduct = async (id: string) => {
    const del = await PRODUCTSTABLE.destroy({
        where: { id: id }
    })
    return del
}

export const ProderOrder = async (order: ordeProps) => {
    const result = await USERORDERTABLE.create({ ...order })
    return result;
}

export const getDash = async () => {
    const res = await USERORDERTABLE.findAll()
    return res;

}