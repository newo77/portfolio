import React from "react";

function Navbar() {
  return (
    <div className="container_navbar">
      <div className="navbar_children">
        <ul className="container_list_menu">
          <li className="list_menu">Home</li>
          <li className="list_menu">About</li>
          <li className="list_menu">Skills</li>
          <li className="list_menu">Projects</li>
          <li className="list_menu">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
