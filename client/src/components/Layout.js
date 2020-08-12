import React from "react";
import PropTypes from "prop-types";
import MyNavbar from "./navbar/MyNavbar";
import { Container } from "react-bootstrap";
import ScrollButton from "./scrollbutton";
import MyFooter from "../landingpage/sections/footer/MyFooter";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <MyNavbar />
      <Container className="py-4" id="mainContainer">
        {children}
      </Container>
      <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
      <MyFooter />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
