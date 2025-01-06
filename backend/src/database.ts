import Sequelize from "@sequelize/core";
import "dotenv/config";
import { PostgresDialect } from "@sequelize/postgres";
import { PRODUCTSTABLE } from "./models/mobile.model";
import { USERORDERTABLE } from "./models/userOrder.model";
import { USERSTABLE } from "./models/users.model";

const SequelizeOptions={
    dialect:PostgresDialect,
    database:process.env.DB_BASE,
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    password:process.env.DB_PASS,
    port:5432,
    models:[PRODUCTSTABLE,USERORDERTABLE,USERSTABLE]
}

const sequelizeConnection=new Sequelize(SequelizeOptions)

export const dbconnection = async ()=>{
    sequelizeConnection.sync().then(()=>{
        console.log("Table created successfully")
    }).catch((error)=>{
        console.log("Error: ",error)
    })
}