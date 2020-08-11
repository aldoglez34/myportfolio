import React from "react";
import { Navbar, Container } from "react-bootstrap";
import MyLogo from "../logo/MyLogo";
import MyMenu from "../menu/MyMenu";
import "./mynavbar.scss";

const MyNavbar = React.memo(() => {
  return (
    <Navbar fixed="top" id="navbarstyle">
      <Container id="navbarcontainer">
        <MyLogo />
        <MyMenu />
      </Container>
    </Navbar>
  );
});

export default MyNavbar;
