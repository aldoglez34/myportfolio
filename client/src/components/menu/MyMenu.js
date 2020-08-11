import React from "react";
import { Nav } from "react-bootstrap";
import "./mymenustyle.scss";

const MyMenu = () => {
  return (
    <Nav className="ml-auto">
      <a className="nav-link active" href="/">
        Acerca
      </a>
      <a className="nav-link" href="/">
        Contacto
      </a>
      <a className="nav-link" href="/">
        Proyectos
      </a>
    </Nav>
  );
};

export default MyMenu;
