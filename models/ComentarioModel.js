import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const ComentarioModel = sequelize.define(
  "comentarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comentario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_id:{
      type:DataTypes.INTEGER,
      allowNull:false,
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
