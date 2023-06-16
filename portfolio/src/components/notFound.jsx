import React from "react";

const NotFound = () => {
  return (
    <div className="container_page_not_found">
      <h1 className="title_not_found">Erreur 404 - Page non trouvée</h1>
      <p className="text_not_found">
        Vous vous êtes égaré. Veuillez revenir en lieu sûr.
      </p>
      <button className="redirect_to_homepage">revenir en lieux sûr</button>
    </div>
  );
};

export default NotFound;
