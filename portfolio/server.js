const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors()); // Utilisation du middleware cors

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_PROVIDER,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post("/contact", (req, res) => {
  const { name, email, description } = req.body;

  const mailOptions = {
    from: email,
    to: "dayesowendev@gmail.com",
    subject: "Nouveau message de contact",
    text: `Nom: ${name}\nEmail: ${email}\nDescription: ${description}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Erreur lors de l'envoi de l'e-mail");
    } else {
      console.log("E-mail envoyé :", info.response);
      res.status(200).send("E-mail envoyé avec succès");
    }
  });
});

app.listen(3001, () => {
  console.log("Serveur en cours d'écoute sur le port 3001");
});
