import { Sequelize } from "sequelize";
import express from "express";

const app = express();
app.use(express.json());

const sequelize = new Sequelize('postgres', 'postgres', '03041989', {
  host: 'localhost',
  dialect: 'postgres',
});

export { sequelize };