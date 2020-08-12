import React from "react";
import Project from "./components/Project";
import { ButtonGroup } from "react-bootstrap";

const MyProjects = () => {
  const myprojects = [
    {
      img: "/images/math.png",
      title: "MeXmáticas",
      link: "https://mathprojectmex.herokuapp.com/",
    },
    {
      img: "/images/math.png",
      title: "Complemento",
      link: "https://mathprojectmex.herokuapp.com/",
    },
    {
      img: "/images/math.png",
      title: "WebScraping",
      link: "https://mathprojectmex.herokuapp.com/",
    },
    {
      img: "/images/math.png",
      title: "APAG",
      link: "https://mathprojectmex.herokuapp.com/",
    },
  ];

  return (
    <section>
      <h2 className="text-center">Proyectos</h2>
      <div className="text-center">
        Estos son algunos de los proyectos en los que he trabajado.
      </div>
      <div className=" mt-3 d-flex flex-row justify-content-center">
        <ButtonGroup aria-label="Basic example">
          {myprojects.map((p) => {
            return <Project img={p.img} link={p.link} title={p.title} />;
          })}
        </ButtonGroup>
      </div>
    </section>
  );
};

export default MyProjects;
