import express from "express";
import multer from "multer";
import { sequelize } from "./seaquelize.js";
import cors from "cors";
import createPaytient from "./controllers/postControllers.js";
import deletePaytient from "./controllers/deleteControllers.js";
import authPaytient from "./controllers/authController.js";
import { getAll } from "./controllers/postControllers.js";
import { getOne } from "./controllers/postControllers.js";
import { remove } from "./controllers/postControllers.js";
import { Create } from "./controllers/statyaController.js";
import { updatePost } from "./controllers/statyaController.js";
import CheckAuth from "./utils/CheckAuth.js";

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use("/uploads", express.static("uploads"));

sequelize.sync();
sequelize
  .authenticate()
  .then(() => {
    console.log("Подключение к базе данных установленно");
  })
  .catch((err) => {
    console.log("Ошибка подключения к базе данных", err);
  });
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("heasdasdsdflo world");
});

app.get("/auth/me", CheckAuth, (req, res) => {
  try {
    res.json({
      success: true,
    });
  } catch (err) {}
});

app.use("/auth/login", authPaytient);
app.use("/add/register", createPaytient);
app.use("/delete/paytient/:id", deletePaytient);
app.post("/upload", CheckAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `'uploads/${req.file.originalname}`,
  });
});

app.get("/posts/:id", getOne);
app.patch("/posts/:id", updatePost);
app.delete("/posts/:id", remove);
app.get("/posts", getAll);
app.use("/posts", CheckAuth, Create);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
