import React, { useState, useEffect } from "react";
import axios from "axios";
import {FiTrash} from 'react-icons/fi'

const MailPage = () => {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/contacts");
        setMails(response.data);
      } catch (error) {
        console.log("error =>", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteMail = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/contacts/${id}`);
      // Mettre à jour la liste des mails après la suppression réussie
      setMails(mails.filter((mail) => mail.id !== id));
      console.log(`Le message avec l'id ${id} a été supprimé`);
    } catch (error) {
      console.error('Erreur lors de la suppression du message:', error);
    }
  };

  // FAIRE EN CSS LA BARRE DE SCROLL

  return (
    <div className="container_mail">
      <h1 className="title_mail">📧 MAIL VIA FORMULAIRE DE CONTACT 📧</h1>
      <table className="mail_table">
        <thead className="head_table">
          <tr>
            <th className="row_table_header">Nom</th>
            <th className="row_table_header">Email</th>
            <th className="row_table_header">Description</th>
            <th className="row_table_header">Suppression</th>

          </tr>
        </thead>
        <tbody>
          {mails.map((mail, index) => (
            <tr className="row_table_container" key={index}>
              <td className="row_table">{mail.name}</td>
              <td className="row_table">{mail.email}</td>
              <td className="row_table">{mail.description}</td>
              <td className="row_table">
                <button onClick={() => handleDeleteMail(mail.id)}>
                 <FiTrash></FiTrash> Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MailPage;
