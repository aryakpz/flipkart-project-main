import { CreationOptional,DataType,DataTypes,InferAttributes,InferCreationAttributes,Model } from "@sequelize/core";
import { Attribute,NotNull,Unique,PrimaryKey,AutoIncrement } from "@sequelize/core/decorators-legacy";
import { string } from "zod";

export class PRODUCTSTABLE extends Model<InferAttributes<PRODUCTSTABLE>,InferCreationAttributes<PRODUCTSTABLE>>{
    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    declare id:CreationOptional<number>

    @Attribute(DataTypes.STRING)
    @NotNull
    declare name:string

    @Attribute(DataTypes.STRING)
    @NotNull
    declare color:string

    @Attribute(DataTypes.STRING)
    @NotNull
    declare brand:string

    @Attribute (DataTypes.INTEGER)
    @NotNull
    declare price:number

    @Attribute (DataTypes.STRING)
    @NotNull
    declare ram:string

    @Attribute (DataTypes.STRING)
    @NotNull
    declare rom:string

    @Attribute (DataTypes.STRING)
    @NotNull
    declare screen:string

    @Attribute (DataTypes.STRING)
    @NotNull
    declare frontcamera:String

    @Attribute (DataTypes.STRING)
    @NotNull
    declare backcamera:String

    @Attribute(DataTypes.STRING)
    @NotNull
    declare processor:string

    @Attribute(DataTypes.STRING)
    @NotNull
    declare warranty:string

    @Attribute (DataTypes.STRING)
    @NotNull
    declare discount:string

    @Attribute(DataTypes.STRING)
    @NotNull
    declare exchange:string

    @Attribute(DataTypes.STRING)
    @NotNull
    declare image:string

    @Attribute(DataTypes.STRING)
    @NotNull
    declare battery:string

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare oldprice:string


}
