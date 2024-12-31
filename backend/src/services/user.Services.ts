import { PRODUCTSTABLE } from "../models/mobile.model";
import { Op } from "@sequelize/core";

export const displayProduct = async () => {
    const view = await PRODUCTSTABLE.findAll()
    const newView = view.map((item) => ({
        ...item.dataValues,
        link: `http://localhost:5002/${item.image}`
    }))
    return newView
}

export const getSingleProduct = async (id: any) => {
    const result = await PRODUCTSTABLE.findOne({
        where: { id: id }
    })
    if (!result) {
        return null;
    }
    const newResult =
        { ...result.dataValues, link: `http://localhost:5002/${result.image}` }
    return newResult
}

export const filterdbdata = async (values: { brand?: string[]; ram?: string[]; rom?: string[]; price?: { min: number; max: number } }) => {
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
    }))
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



