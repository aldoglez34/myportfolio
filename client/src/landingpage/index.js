import React from "react";
import Layout from "../components/Layout";
import Intro from "./sections/intro/Intro";
import MyProjects from "./sections/projects/MyProjects";
import Contact from "./sections/contact/Contact";
import MySocials from "./sections/socials/MySocials";

const LandingPage = () => {
  return (
    <Layout>
      <Intro />
      <hr className="myDivider" id="Proyectos" />
      <MyProjects />
      <hr className="myDivider" id="Sociales" />
      <MySocials />
      <hr className="myDivider" id="Contacto" />
      <Contact />
    </Layout>
  );
};

export default LandingPage;
