import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { VscBell } from "react-icons/vsc";
import ProfileHambar from "./ProfileHambar";
import "../../css/header/Header.css";
import logoImg from "../../img/logo-back.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <Navbar bg="light">
          <Container className="logo">
            <Navbar.Brand href="/account/login">
              <img id="logoimg" src={logoImg} />
            </Navbar.Brand>
          </Container>
          <VscBell className="VscBell" />
          <ProfileHambar />
        </Navbar>
      </div>
    </>
  );
};

export default Header;
