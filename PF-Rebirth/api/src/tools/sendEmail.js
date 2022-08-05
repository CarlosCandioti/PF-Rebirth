const nodemailer = require("nodemailer");

const sendEmailConfirmation = (userInformation) => {
  const email = userInformation.mail;
  const body = userInformation;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "rebirthpetspf@gmail.com",
      pass: "pwxdidflyzumqaop", 
    },
  });

  let mailOption = {
    from: " 'Rebirth.App 🐾' <rebirthpetspf@gmail.com>",
    to: email,
    subject: "Rebirth.App 🐾",
    text: "Gracias por registrarte en Rebirth!",
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      console.log("mail sent successfully", body);
      res.status(200).send(body);
    }
  });
};

module.exports = {
  sendEmailConfirmation,
};
