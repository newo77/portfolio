import React, { useEffect, useState } from "react";

import { BiMailSend } from "react-icons/bi";

function ContactForm() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector("#contact");
      const position = aboutSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [showPopup, setShowPopup] = useState(false);

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
      const mailtoLink = generateMailtoLink(formData);
      window.open(mailtoLink);

      setFormData({
        name: "",
        email: "",
        description: "",
      });
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données du formulaire:", error);
    }
  };

  function generateMailtoLink(formData) {
    const { name, email, description } = formData;
    const subject = encodeURIComponent("Prise de contact pour projet / renseignement");
    const body = encodeURIComponent(`
      Name: ${name}
      Email: ${email}
      Description: ${description}
    `);
    return `mailto:dayesowendev@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className={`container_section_contact ${
        isActive ? "fade-in active" : "fade-in"
      }`}
    >
      <h1 className="title_contact">Contact</h1>
      <form className="form_contact" onSubmit={handleSubmit}>
        <div className="container_input">
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="container_input">
          <input
            className="input"
            required
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
            required
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button className="btn_contact_form" type="submit">
          Send
        </button>
      </form>
      {showPopup && (
        <div className={`pop_up_sending ${showPopup ? "show" : ""}`}>
          <BiMailSend></BiMailSend>
          <p className="text_pop_up_sending">Redirect to Mail</p>
        </div>
      )}
    </section>
  );
}

export default ContactForm;
