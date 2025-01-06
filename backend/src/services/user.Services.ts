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

export const filterdbdata = async (values: {
    brand?: string[];
    ram?: string[];
    rom?: string[];
    price?: { min: string; max: string };
}) => {
    const filterQuery: any = {};
    // Brand filter
    if (values?.brand ) {
        filterQuery.brand = {
            [Op.or]: values.brand.map(value => ({
                [Op.iLike]: `%${value}%`
            }))
        };
    }

    // RAM filter
    if (values?.ram  ) {
        filterQuery.ram = {
            [Op.or]: values.ram.map(ram => ({
                [Op.iLike]: `%${ram}%`
            }))
        };
    }

    // ROM filter
    if (values?.rom ) {
        filterQuery.rom = {
            [Op.or]: values.rom.map(rom => ({
                [Op.iLike]: `%${rom}%`
            }))
        };
    }                                                                     
               
    // Price filter
    if (values?.price) {
        const minPrice = parseFloat(values.price.min);
        const maxPrice = parseFloat(values.price.max);

        if (!isNaN(minPrice) && !isNaN(maxPrice)) {
            filterQuery.price = {
                [Op.between]: [minPrice, maxPrice]
            };
        }
    }

                             
    const filteredProducts = await PRODUCTSTABLE.findAll({
        where: filterQuery,
    });

    const newdata = filteredProducts.map((item) => ({
        ...item.dataValues,
        link: `http://localhost:5002/${item.image}`
    }));
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


export const searchData = async (val: string) => {
    console.log(val)
    const data = await PRODUCTSTABLE.findOne({
        where:{name:val}
    })
    return { data }
}