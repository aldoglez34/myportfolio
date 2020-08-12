import React from "react";
import Layout from "../components/Layout";
import Intro from "./sections/intro/Intro";
import MyProjects from "./sections/projects/MyProjects";
import Contact from "./sections/contact/Contact";
import "./landingpage.scss";

const LandingPage = () => {
  return (
    <Layout>
      <Intro />
      <hr className="myDivider" />
      <MyProjects />
      <hr className="myDivider" />
      <Contact />
    </Layout>
  );
};

export default LandingPage;
