import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/contact",
        formData
      );

      if (response.status === 200) {
        console.log("E-mail envoyé avec succès");
      } else {
        console.error("Erreur lors de l'envoi de l'e-mail");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
    }

    setFormData({
      name: "",
      email: "",
      description: "",
    });
  };

  return (
    <section id="contact" className="container_section_contact">
      <h1 className="title_contact">Contact</h1>
      <form className="form_contact" onSubmit={handleSubmit}>
        <div className="container_input">
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="container_input">
          <input
            className="input"
            type="email"
            id="email"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="container_input">
          <textarea
            className="input_area"
            id="description"
            placeholder="Describe your question"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button className="btn_contact_form" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
