import React from "react";
import { Link } from "react-router-dom";
import "../css/BottomNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomNav = () => {
  const changeColor = (e) => {
    alert(e.target.className);
    // e.target.className = "nav-item";
  };
  return (
    <div className="nav-wrap">
      <nav className="nav-bottom">
        <div className="nav-item active" onClick={changeColor}>
          <Link to="/login">
            <FontAwesomeIcon icon="home" />
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/login">
            <FontAwesomeIcon icon="compass" />
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/login">
            <FontAwesomeIcon icon="plus" />
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/login">
            <FontAwesomeIcon icon="medal" />
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/login">
            <FontAwesomeIcon icon="user" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default BottomNav;
