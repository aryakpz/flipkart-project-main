import { CreationOptional,DataType,DataTypes,InferAttributes,InferCreationAttributes,Model } from "@sequelize/core";
import { Attribute,NotNull,Unique,PrimaryKey,AutoIncrement } from "@sequelize/core/decorators-legacy";

export class PRODUCTTABLE extends Model<InferAttributes<PRODUCTTABLE>,InferCreationAttributes<PRODUCTTABLE>>{
    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    declare id:CreationOptional<number>

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
    declare camara:String

    @Attribute(DataTypes.STRING)
    @NotNull
    declare processor:string

    @Attribute(DataTypes.STRING)
    @NotNull
    declare warrenty:string

    @Attribute (DataTypes.STRING)
    @NotNull
    declare discount:string

    @Attribute(DataTypes.STRING)
    @NotNull
    declare exchange:string

    @Attribute(DataTypes.STRING)
    @NotNull
    declare image:string
}