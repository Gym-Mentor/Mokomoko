import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProfileSideBarData } from "./ProfileSidebarData";

import "../../css/header/ProfileHambar.css";

const ProfileHambar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      {/*네비게이션 토글 코드 */}
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-itmes" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="navbar-toggle">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {/* ProfileSideBarData 순서대로 담기 */}
          {ProfileSideBarData &&
            ProfileSideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icons}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </>
  );
};

export default ProfileHambar;
