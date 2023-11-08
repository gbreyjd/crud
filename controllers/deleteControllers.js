import UserAuth from "../models/UserAuth.js";


const deletePaytient = async (req, res) => {
  const id = req.params.id;

  

  try {
    // Попробуйте найти запись по ID
    const deleteUser = await UserAuth.findByPk(id);

    if (!deleteUser) {
      // Если запись не найдена, верните ошибку 404 (не найдено)
      res.status(404).json({ error: "Запись не найдена" });
    } else {
      // Если запись найдена, удалите её
      await deleteUser.destroy();
      res.status(200).json({ message: "Запись успешно удалена" });
    }
  } catch (err) {
    console.error("Ошибка при удалении записи:", err);
    res.status(500).json({ error: "Произошла ошибка при удалении записи" });
  }
};

export default deletePaytient;
