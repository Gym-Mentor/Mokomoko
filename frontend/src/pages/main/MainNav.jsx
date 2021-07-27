import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/main/MainNav.css";
const MainNav = () => {
  const [activeNav, setActiveNav] = useState(1);
  return (
    <div className="wrapper">
      <ul className="Navs">
        <Link to="/first" className="nav-link" onClick={() => setActiveNav(1)}>
          <li>
            <FontAwesomeIcon
              icon="home"
              className={activeNav === 1 ? "nav-item active" : "nav-item"}
            />
          </li>
        </Link>
        <Link to="/compass" className="nav-link" onClick={() => setActiveNav(2)}>
          <li>
            <FontAwesomeIcon
              icon="compass"
              className={activeNav === 2 ? "nav-item active" : "nav-item"}
            />
          </li>
        </Link>
        <Link to="/third" className="nav-link" onClick={() => setActiveNav(3)}>
          <li>
            <FontAwesomeIcon
              icon="plus"
              className={activeNav === 3 ? "nav-item active" : "nav-item"}
            />
          </li>
        </Link>
        <Link to="/fourth" className="nav-link" onClick={() => setActiveNav(4)}>
          <li>
            <FontAwesomeIcon
              icon="medal"
              className={activeNav === 4 ? "nav-item active" : "nav-item"}
            />
          </li>
        </Link>
        <Link to="/fifth" className="nav-link" onClick={() => setActiveNav(5)}>
          <li>
            <FontAwesomeIcon
              icon="user"
              className={activeNav === 5 ? "nav-item active" : "nav-item"}
            />
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default MainNav;
