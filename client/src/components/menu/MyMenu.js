import React from "react";
import { Nav } from "react-bootstrap";
import "./mymenustyle.scss";
import Slide from "react-reveal/Slide";
import { HashLink as Link } from "react-router-hash-link";

const MyMenu = () => {
  return (
    <Nav className="ml-auto">
      <Slide top>
        <Link className="nav-link" smooth to="/#Proyectos">
          Proyectos
        </Link>
        <Link className="nav-link" smooth to="/#Sociales">
          Sociales
        </Link>
        <Link className="nav-link" smooth to="/#Contacto">
          Contacto
        </Link>
      </Slide>
    </Nav>
  );
};

export default MyMenu;
