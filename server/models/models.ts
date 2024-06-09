const { DataTypes } = require("sequelize");
const sequelize = require("../db.ts");

//Описание моделей
const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

module.exports = {
  User,
};
