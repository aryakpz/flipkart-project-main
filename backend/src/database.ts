import Sequelize from "@sequelize/core";
import "dotenv/config";
import { PostgresDialect } from "@sequelize/postgres";
import { PRODUCTSTABLE } from "./models/mobile.model";
import { USERTABLE } from "./models/user.model";
import { ADMINTABLE } from "./models/admin.Model";

const SequelizeOptions={
    dialect:PostgresDialect,
    database:process.env.DB_BASE,
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    password:process.env.DB_PASS,
    port:5432,
    models:[PRODUCTSTABLE,USERTABLE,ADMINTABLE]
}

const sequelizeConnection=new Sequelize(SequelizeOptions)

export const dbconnection = async ()=>{
    sequelizeConnection.sync().then(()=>{
        console.log("Table created successfully")
    }).catch((error)=>{
        console.log("Error: ",error)
    })
}