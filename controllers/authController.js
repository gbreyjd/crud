import UserAuth from "../models/UserAuth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authPaytient = async (req, res) => {
  try {
    const user = await UserAuth.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(404).json({
        message: "Пользователь не найден",
      });
    }

    const isValidPass = await bcrypt.compare(req.body.password, user.password);

    if (!isValidPass) {
      return res.status(404).json({
        message: "Неверный логин или пароль",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      "secret123",
      {
        expiresIn: "1h",
      }
    );

    res
      .status(201)
      .json({ message: "Вы успешно авторизовались", id: user.id, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось авторизоваться",
    });
  }
};

export default authPaytient;
