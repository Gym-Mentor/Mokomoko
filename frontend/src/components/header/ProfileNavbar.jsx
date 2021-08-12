import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProfileSideBarData } from "./ProfileSidebarData";
import axios from "axios";

import "../../css/header/ProfileHambar.css";

const ProfileHambar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const logout = (e) =>{
    e.preventDefault();

    //localStorage 지워주기
    localStorage.removeItem("accessToken");

    //백엔드 통신
    // axois({
    //   method : "post",
    //   url :"http://localhost:8080/auth/logout",

    // })

  }

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
                <li key={index} className={item.cName} onClick={(item.title =='로그아웃'?logout:'')}>
                  <Link to={item.path}>
                    {item.icons}
                    <span className="navbar-item-title">{item.title}</span>
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
