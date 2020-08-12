import React from "react";
import PropTypes from "prop-types";
import MyNavbar from "./navbar/MyNavbar";
import { Container } from "react-bootstrap";
import ScrollButton from "./scrollbutton";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <MyNavbar />
      <Container id="maincontainer" className="py-4 px-0">
        {children}
      </Container>
      <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
