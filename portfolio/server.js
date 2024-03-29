const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Reste du code de votre serveur

// Configuration de la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// établit la connexion
connection.connect((error) => {
  if (error) {
    console.error("Erreur de connexion à la base de données:", error);
  } else {
    console.log("Connexion à la base de données réussie");
  }
});

app.use(cors());
// Middleware pour le parsing des données JSON dans les requêtes
app.use(express.json());

// Route pour enregistrer les données du formulaire de contact dans la base de données
app.post("/contacts", (req, res) => {
  const { name, email, description } = req.body;

  // Requête SQL pour insérer les données dans la table "contacts"
  const sql =
    "INSERT INTO contacts (name, email, description) VALUES (?, ?, ?)";
  const values = [name, email, description];

  // Exécute la requête SQL avec les valeurs des champs du formulaire
  connection.query(sql, values, (error, result) => {
    if (error) {
      console.error(
        "Erreur lors de l'enregistrement des données du formulaire:",
        error
      );
      res
        .status(500)
        .send(
          "Une erreur est survenue lors de l'enregistrement des données du formulaire"
        );
    } else {
      console.log("Données du formulaire enregistrées avec succès");
      res
        .status(200)
        .send("Les données du formulaire ont été enregistrées avec succès");
    }
  });
});

// Route pour récupérer les données de la base de données
app.get("/contacts", (req, res) => {
  // Requête SQL pour récupérer tous les enregistrements de la table "contacts"
  const sql = "SELECT * FROM contacts";

  // Exécute la requête SQL
  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Erreur lors de la récupération des données:", error);
      res
        .status(500)
        .send("Une erreur est survenue lors de la récupération des données");
    } else {
      res.status(200).json(results);
    }
  });
});

app.delete("/contacts/:id", (req, res) => {
  const { id } = req.params;

  // Requête SQL pour supprimer le message avec l'id correspondant
  const sql = "DELETE FROM contacts WHERE id = ?";

  // Exécute la requête SQL avec l'id du message à supprimer
  connection.query(sql, id, (error, result) => {
    if (error) {
      console.error("Erreur lors de la suppression du message:", error);
      res
        .status(500)
        .send("Une erreur est survenue lors de la suppression du message");
    } else {
      console.log(`Le message avec l'id ${id} a été supprimé`);
      res.status(200).send("Le message a été supprimé avec succès");
    }
  });
});

// Port d'écoute du serveur
const port = 3001;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
