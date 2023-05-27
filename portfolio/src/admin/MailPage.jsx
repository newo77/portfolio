import React, { useState, useEffect } from "react";
import axios from "axios";

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
          </tr>
        </thead>
        <tbody>
          {mails.map((mail, index) => (
            <tr className="row_table_container" key={index}>
              <td className="row_table">{mail.name}</td>
              <td className="row_table">{mail.email}</td>
              <td className="row_table">{mail.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MailPage;
