import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { VscBell } from "react-icons/vsc";
import ProfileNavbar from "./ProfileNavbar";
import "../../css/header/Header.css";
import logoImg from "../../img/logo-back.png";

const Header = () => {
  const showAlarm = () => {
    alert("알람 설정");
  };
  return (
    <div className="header-wrapper">
      <div className="header-row">
        <div className="header-col">
          <Navbar>
            <Container className="logo">
              <Navbar.Brand href="/account/login">
                <span id="profile-header-name">mokomoko</span>
                {/* <img id="logo-img" src={logoImg} /> */}
              </Navbar.Brand>
            </Container>
            <VscBell className="VscBell" onClick={showAlarm} />
            <ProfileNavbar />
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;
