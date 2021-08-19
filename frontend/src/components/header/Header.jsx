import React from "react";
import { Navbar, Container } from "react-bootstrap";
import ProfileNavbar from "./ProfileNavbar";
import "../../css/header/Header.css";
import logoImg from "../../img/logo-back.png";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => ({ user: state.userInfo.user }));
  const { OtherUser } = useSelector((state) => state.OtherUser);

  return (
    <div className="header-wrapper">
      <div className="header-row">
        <div className="header-col">
          <Navbar className="header-navbar">
            <Container className="logo">
              <Navbar.Brand href="/main/feed">
                <span id="profile-header-name">mokomoko</span>
                {/* <img id="logo-img" src={logoImg} /> */}
              </Navbar.Brand>
              <span id="profile-header-nick">
                {OtherUser.user.id === user.id ? user.nickname : OtherUser.user.nickname}
              </span>
            </Container>
            <ProfileNavbar />
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;
