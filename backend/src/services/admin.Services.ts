import { ADMINTABLE } from "../models/admin.Model"
import { PRODUCTSTABLE } from "../models/mobile.model";
import { USERTABLE } from "../models/user.model"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { phoneProps } from "../Types/type";
import { Op, Value } from "@sequelize/core";

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

export const addDetails = async (phoneObj: phoneProps) => {
    const mobile = await PRODUCTSTABLE.create({ ...phoneObj })
    return mobile;
}

export const displayProduct = async () => {
    console.log("sdclnoe")
    const view = await PRODUCTSTABLE.findAll()
    const newView = view.map((item) => ({
        ...item.dataValues,
        link: `http://localhost:5002/${item.image}`
    }))
    return newView
}

export const deleteProduct = async (id: string) => {
    const del = await PRODUCTSTABLE.destroy({
        where: { id: id }
    })
    return del
}


export const filterdbdata = async (values: { values?: string[] }) => {
    const filterQuery: any = {};
    // Validate input and check if there are valid values
    if (values?.values && Array.isArray(values.values) && values.values.length > 0) {
        // Create an array of conditions for each brand with Op.iLike
        filterQuery.brand = {
            [Op.or]: values.values.map(value => ({  
                [Op.iLike]: `%${value}%`
            }))
        };
    } else {
        return [];
    }
    const filteredProducts = await PRODUCTSTABLE.findAll({
        where: filterQuery,
    });
    return filteredProducts;
};


