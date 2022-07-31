const { Router } = require("express");
const bcrypt = require('bcrypt');
const { updateUser } = require("../tools/userUpdate");
const router = Router();
const { User } = require("../db");
const { getUserInfo } = require("../tools/getUserInfo.js");
const { sendEmailConfirmation } = require("../tools/sendEmail.js");


router.put("/:mail", updateUser 
// async (req, res, next) => {
//   try {
//     const id = req.params.mail;
//     const {
//       formBasicUserName,
//       formBasicName,
//       formBasicLastName,
//       formBasicPassword,
//       formBasicImage,
//       formBasicMail
//     } = req.body;
    
//     const pass = formBasicPassword

//     await User.update(
      
//       {
//         userName: formBasicUserName,
//         name: formBasicName,
//         lastName: formBasicLastName,
//         password: await bcrypt.hash(pass, 10),
//         image: formBasicImage,
//         mail: formBasicMail ? formBasicMail : id
//       },
//       { where: { mail: id } }
//     );
//     res.send("Usuario modificado");
//   } catch (error) {
//     next(error);
//   }}
);


router.patch("/:mail", async (req, res, next) => {
  const { mail } = req.params;
  await User.restore({
    where: { mail: mail },
  });
  res.send("User Restored");
});

router.get("/:mail", async (req, res, next) => {
  const { mail } = req.params;
  try {
    const userMail = await User.findByPk(mail);
    if (!userMail) {
      res.status(404).send("no se encontro el usuario con ese mail");
    } else {
      res.status(200).send(userMail);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  const allUsers = await User.findAll();
  try {
    allUsers.length
      ? res.status(200).send(allUsers)
      : res.status(400).send("No se encuentra ningun usuario");
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let userInformation = await getUserInfo(req);
    await User.create(userInformation);

    sendEmailConfirmation(userInformation);
    res
      .status(201)
      .send(`El usuario ${userInformation.name} fue creado con exito`);
  } catch (error) {
    res.status(409).send("El usuario ya se encuentra registrado");
  }
});

router.delete("/:mail", async (req, res, next) => {
  const { mail } = req.params;
  try {
    const userDelete = await User.findByPk(mail);
    if (!userDelete) {
      res
        .status(404)
        .send(`No se encuentra el usuario con el mail ${req.params.mail}😒`);
    } else {
      await User.destroy({ where: { mail: mail } });
      res.status(200).send(`se elimino el usuario `);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
