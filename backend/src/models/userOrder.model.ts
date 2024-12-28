import { CreationOptional,DataType,DataTypes,InferAttributes,InferCreationAttributes,Model } from "@sequelize/core";
import { Attribute,NotNull,Unique,PrimaryKey,AutoIncrement } from "@sequelize/core/decorators-legacy";

export class USERORDERTABLE extends Model<InferAttributes<USERORDERTABLE>,InferCreationAttributes<USERORDERTABLE>>{
    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    declare Oid:CreationOptional<number>

    @Attribute(DataTypes.STRING)
    @NotNull
    declare user:string

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare id:number

    @Attribute(DataTypes.STRING)
    @NotNull
    declare name:string

    @Attribute (DataTypes.INTEGER)
    @NotNull
    declare price:number

    @Attribute (DataTypes.INTEGER)
    @NotNull
    declare count:number

    @Attribute (DataTypes.INTEGER)
    @NotNull
    declare newPrice:number

    @Attribute (DataTypes.STRING)
    @NotNull
    declare change:string
}
