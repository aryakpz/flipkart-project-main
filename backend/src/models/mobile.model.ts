import { CreationOptional,DataType,DataTypes,InferAttributes,InferCreationAttributes,Model } from "@sequelize/core";
import { Attribute,NotNull,Unique,PrimaryKey,AutoIncrement } from "@sequelize/core/decorators-legacy";

export class MOBILETABLE extends Model<InferAttributes<MOBILETABLE>,InferCreationAttributes<MOBILETABLE>>{
    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    declare id:CreationOptional<number>

    @Attribute(DataTypes.STRING)
    declare brand:string

    @Attribute (DataTypes.STRING)
    declare ram:string

    @Attribute (DataTypes.STRING)
    declare rom:string

    @Attribute (DataTypes.STRING)
    declare screen:string

    @Attribute (DataTypes.STRING)
    declare camara:String

    @Attribute(DataTypes.STRING)
    declare processor:string

    @Attribute(DataTypes.STRING)
    declare warrenty:string

    @Attribute (DataTypes.INTEGER)
    declare price:number

    @Attribute (DataTypes.STRING)
    declare discount:string

    @Attribute(DataTypes.STRING)
    declare exchange:string
}