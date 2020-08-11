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
      <MyProjects />
      <Contact />
    </Layout>
  );
};

export default LandingPage;
