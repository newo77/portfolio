import React, { useState } from "react";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vous pouvez ajouter ici la logique pour traiter les données du formulaire
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      description: "",
    });
  };

  return (
    <div id="contact" className="container_section_contact">
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
        <button className="btn_contact_form" type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
