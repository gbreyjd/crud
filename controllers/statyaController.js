import People from "../models/modelpost.js";

export const Create = async (req, res) => {
  try {
    const post = await People.create({
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      birthDay: req.body.birthDay,
      address: req.body.address,
      snils: req.body.snils,
      polis: req.body.polis,
      phoneNumber: req.body.phoneNumber,
      peopleCreate: req.userId,
    });
    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать статью",
    });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updateId = req.params.id;
    const updatedPost = await Post.update(
      {
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        birthDay: req.body.birthDay,
        address: req.body.address,
        snils: req.body.snils,
        polis: req.body.polis,
        phoneNumber: req.body.phoneNumber,
        peopleCreate: req.userId,
      },
      {
        where: {
          id: updateId,
        },
      }
    );

    if (updatedPost[0] === 0) {
      return res.status(404).json({ message: "Статья не найдена" });
    }

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось обновить статью" });
  }
};
