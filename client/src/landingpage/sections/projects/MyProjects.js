import React from "react";
import Project from "./components/Project";
import { CardDeck } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Subtitle from "../../../components/subtitle/Subtitle";

const MyProjects = () => {
  const myprojects = [
    {
      img: "/images/math.png",
      title: "MeXmáticas",
      link: "https://mathprojectmex.herokuapp.com/",
      description:
        "Escuela de matemáticas, venta de cursos en línea, miles de ejercicios.",
    },
    {
      img: "/images/complemento.png",
      title: "Complemento",
      link: "https://young-mesa-38921.herokuapp.com/",
      description:
        "Tienda en línea, venta de productos de salud complementarios.",
    },
    {
      img: "/images/calentadores.png",
      title: "WebScraping",
      link: "https://calentadores.herokuapp.com/",
      description: "Extracción de información de diferentes sitios web.",
    },
    {
      img: "/images/audit.png",
      title: "APAG",
      link: "https://immense-badlands-57890.herokuapp.com/login",
      description: "Auxiliar en el proceso de auditoría gubernamental.",
    },
  ];

  return (
    <Fade>
      <Subtitle text="Proyectos" />
      <p className="text-center">
        Estos son algunos de los proyectos en los que he trabajado.
      </p>
      <div className=" mt-3 d-flex flex-row justify-content-center">
        <CardDeck>
          {myprojects.map((p) => {
            return (
              <Project
                key={p.title}
                img={p.img}
                link={p.link}
                title={p.title}
                description={p.description}
              />
            );
          })}
        </CardDeck>
      </div>
    </Fade>
  );
};

export default MyProjects;
