import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { ComentarioModel } from "./ComentarioModel.js";

export const UserModel = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
  },
  {
    timestamps: false,
  }
);

 ComentarioModel.belongsTo(UserModel, { foreignKey: "user_id" });
UserModel.hasMany(ComentarioModel, { foreignKey: "user_id" });
 
/* TypeUsersModel.hasMany(UserModel, { foreignKey: "typeusers_id" });
UserModel.belongsTo(TypeUsersModel, { foreignKey: "typeusers_id" });
 */