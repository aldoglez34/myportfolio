import React from "react";
import { Navbar, Container } from "react-bootstrap";
import MyLogo from "../logo/MyLogo";
import MyMenu from "../menu/MyMenu";
import styles from "./mynavbar.module.scss";

const MyNavbar = React.memo(() => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      id={styles.navbarstyle}
      className="shadow"
    >
      <Container>
        {/* logo */}
        <MyLogo />
        {/* toggle */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* collapsed */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <MyMenu />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default MyNavbar;
