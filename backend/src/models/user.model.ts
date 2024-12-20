import { Attribute,PrimaryKey,NotNull,Unique, AutoIncrement } from "@sequelize/core/decorators-legacy";
import { InferAttributes,InferCreationAttributes,CreationOptional,DataType, Model, DataTypes} from "@sequelize/core";

export class USERTABLE extends Model <InferAttributes<USERTABLE>,InferCreationAttributes<USERTABLE>>{
    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    declare id:CreationOptional<number>
    
    @Attribute(DataTypes.STRING)
    @NotNull
    declare name:string

    @Attribute(DataTypes.STRING)
    @NotNull
    @Unique
    declare username:string

    @Attribute(DataTypes.STRING)
    @NotNull
    @Unique
    declare password:string

    @Attribute(DataTypes.STRING)
    @NotNull
    declare email:string

}