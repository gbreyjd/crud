import { sequelize } from "../seaquelize.js";
import { DataTypes, Sequelize } from "sequelize";
import UserAuth from "./UserAuth.js";

const People = sequelize.define("people", {
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  middleName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDay: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  snils: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  polis: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  peopleCreate: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

// Устанавливаем связь между Post и User (пост принадлежит пользователю)
People.belongsTo(UserAuth, { foreignKey: "peopleCreate" });

export default People;
