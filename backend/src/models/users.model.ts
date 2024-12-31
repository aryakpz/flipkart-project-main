import { Attribute, PrimaryKey, NotNull, Unique, AutoIncrement } from "@sequelize/core/decorators-legacy";
import { InferAttributes, InferCreationAttributes, CreationOptional, DataType, Model, DataTypes } from "@sequelize/core";

export class USERSTABLE extends Model<InferAttributes<USERSTABLE>, InferCreationAttributes<USERSTABLE>> {

    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    declare id: CreationOptional<number>

    @Attribute(DataTypes.STRING)
    @NotNull
    @Unique
    declare username: string

    @Attribute(DataTypes.STRING)
    @NotNull
    @Unique
    declare password: string

    @Attribute(DataTypes.STRING)
    @NotNull
    declare role: "admin" | "user"
}
          
 