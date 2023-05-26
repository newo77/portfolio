import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MailPage = () => {
  const [mails, setMails] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    const description = searchParams.get('description');

    // Create a new mail object with the form data
    const newMail = {
      name: name || '',
      email: email || '',
      description: description || '',
    };

    // Add the new mail object to the mails array
    setMails((prevMails) => [...prevMails, newMail]);
  }, [location]);

  return (
    <div className='container_mail'>
      <h1 className='title_mail'>Consultation des courriers électroniques</h1>
      {mails.map((mail, index) => (
        <div key={index}>
          <p>Nom: {mail.name}</p>
          <p>Email: {mail.email}</p>
          <p>Description: {mail.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MailPage;
