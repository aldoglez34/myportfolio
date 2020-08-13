import React from "react";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import "./intro.scss";

const Intro = () => {
  return (
    <Fade>
      <h1 className="display-3 mb-4 mb-md-3" id="welcomemsg">
        Hola, me llamo Aldo Solano y hago páginas web.
      </h1>
      <div className="d-flex flex-column mb-4 mb-md-3">
        <span className="lead">
          <i
            className="far fa-arrow-alt-circle-right mr-2"
            style={{ color: "goldenrod" }}
          />
          Páginas de publicidad, anunciando tu servicio o compañía.
        </span>
        <span className="lead">
          <i
            className="far fa-arrow-alt-circle-right mr-2"
            style={{ color: "goldenrod" }}
          />
          Tiendas en línea, donde tú tienes el control sobre tus productos.
        </span>
        <span className="lead">
          <i
            className="far fa-arrow-alt-circle-right mr-2"
            style={{ color: "goldenrod" }}
          />
          Aplicaciones web complejas para tu empresa.
        </span>
      </div>

      <Link smooth to="/#Contacto">
        <Button variant="light" className="shadow mt-1" size="lg">
          Contáctame
        </Button>
      </Link>
    </Fade>
  );
};

export default Intro;
