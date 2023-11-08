import UserAuth from "../models/UserAuth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import People from "../models/modelpost.js";

export const getAll = async (req, res) => {
  try {
    const people = await People.findAll({
      include: UserAuth, // Включаем связанные данные с UserAuth
    });
    res.json(people);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "не удалось получить статьи",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const postId = req.params.id;

    const onePost = await People.findOne({
      include: UserAuth,
      where: { id: postId },
    });

    res.json(onePost);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "не удалось получить статью",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const postId = req.params.id;

    const removePost = await Post.destroy({ where: { id: postId } });

    if (removePost === 0) {
      return res.status(404).json({ message: "Статья не найдена" });
    }

    res.json({ message: "Статья успешно удалена" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "не удалось получить статью",
    });
  }
};

const createPaytient = async (req, res) => {
  const { username, email } = req.body;

  const password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  try {
    const newUser = await UserAuth.create({
      username,
      email,
      password: passwordHash,
    });

    const token = jwt.sign(
      {
        id: newUser.id,
      },
      "secret123",
      {
        expiresIn: "1h",
      }
    );

    console.log("Запись успешно создана. ID:", newUser.id);
    res
      .status(201)
      .json({ message: "Запись успешно создана", id: newUser.id, token });
  } catch (err) {
    console.error("Ошибка при создании записи:", err);
    res.status(500).json({ error: "Произошла ошибка при создании записи" });
  }
};

export default createPaytient;
