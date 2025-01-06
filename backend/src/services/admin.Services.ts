import { ADMINTABLE } from "../models/admin.Model"
import { PRODUCTSTABLE } from "../models/mobile.model";
import { USERTABLE } from "../models/user.model"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { adminProps, ordeProps, phoneProps } from "../Types/type";
import { Op } from "@sequelize/core";
import { USERORDERTABLE } from "../models/userOrder.model";

export const getAllUser = async () => {
    const users = await USERTABLE.findAll()
    return users
}

export const hashingPassword = async (password: string) => {
    const newPass = await bcrypt.hash(password, 8)
    return newPass
}

export const addAdminToDb = async (details: adminProps) => {
    const insert = await ADMINTABLE.create({ ...details })
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

//=============================== data filtering section ====================================//

export const filterdbdata = async (values: { brand?: string[]; ram?: string[]; rom?: string[] }) => {
    const filterQuery: any = {};


    if (values?.brand && Array.isArray(values.brand) && values.brand.length > 0) {
        filterQuery.brand = {
            [Op.or]: values.brand.map(value => ({
                [Op.iLike]: `%${value}%`
            }))
        };
    }

    if (values?.ram && Array.isArray(values.ram) && values.ram.length > 0) {
        filterQuery.ram = {
            [Op.or]: values.ram.map(ram => ({
                [Op.iLike]: `%${ram}%`
            }))
        };
    }

    if (values?.rom && Array.isArray(values.rom) && values.rom.length > 0) {
        filterQuery.rom = {
            [Op.or]: values.rom.map(rom => ({
                [Op.iLike]: `%${rom}%`
            }))
        };
    }

    const filteredProducts = await PRODUCTSTABLE.findAll({
        where: filterQuery,
    });

    const newdata = filteredProducts.map((item) => ({
        ...item.dataValues,
        link: `http://localhost:5002/${item.image}`
    })
    )
    return newdata;

};

export const sortingDb = async (id: string) => {
    let result: Array<[string, 'ASC' | 'DESC']> = [];

    switch (id) {
        case "low":
            result = [['price', 'ASC']];
            break;
        case "high":
            result = [['price', 'DESC']];
            break;
        case "new":
            result = [['createdAt', 'DESC']]
            break;
        default:
            result = [];
    }
    const products = await PRODUCTSTABLE.findAll({
        order: result
    });

    const newres = products.map((item) => ({
        ...item.dataValues,
        link: `http://localhost:5002/${item.image}`
    }));

    return newres;
};

export const ProderOrder = async (order: ordeProps) => {
    const result = await USERORDERTABLE.create({ ...order })
    return result;
}

export const getDash = async () => {
    const res = await USERORDERTABLE.findAll()
    return res;
}