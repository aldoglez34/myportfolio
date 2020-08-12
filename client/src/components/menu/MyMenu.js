import React from "react";
import { Nav } from "react-bootstrap";
import "./mymenustyle.scss";
import Slide from "react-reveal/Slide";

const MyMenu = () => {
  return (
    <Nav className="ml-auto">
      <Slide top>
        <a className="nav-link active" href="/">
          Acerca
        </a>
        <a className="nav-link" href="/">
          Proyectos
        </a>
        <a className="nav-link" href="/">
          Contacto
        </a>
      </Slide>
    </Nav>
  );
};

export default MyMenu;
