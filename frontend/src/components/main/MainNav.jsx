import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/main/MainNav.css";
const MainNav = () => {
  // activeNav는 현재 선택된 네비게이션 아이템(값)을 저장한다
  // 1이면 첫 번째 네비게이션, 2이면 두 번째 ... 5이면 다섯 번째
  // 현재 새로고침하면 activeNav가 초기화되는 버그.. Redux로 해결가능
  const [activeNav, setActiveNav] = useState(1);
  return (
    <div className="wrapper">
      <div className="Navs">
        {/*첫 번째 아이콘을 클릭하면 activeNav가 1로 바뀐다. activeNav와 각 아이콘의 숫자가 같으면 classname이 바뀌고 적용된 css가 바뀜 */}
        <Link to="/main/feed" className="nav-link" onClick={() => setActiveNav(1)}>
          <FontAwesomeIcon
            icon="home"
            className={activeNav === 1 ? "nav-item active" : "nav-item"}
          />
        </Link>
        <Link to="/main/compass" className="nav-link" onClick={() => setActiveNav(2)}>
          <FontAwesomeIcon
            icon="compass"
            className={activeNav === 2 ? "nav-item active" : "nav-item"}
          />
        </Link>
        <Link to="/main/write" className="nav-link" onClick={() => setActiveNav(3)}>
          <FontAwesomeIcon
            icon="plus"
            className={activeNav === 3 ? "nav-item active" : "nav-item"}
          />
        </Link>
        <Link to="/account/login" className="nav-link" onClick={() => setActiveNav(4)}>
          <FontAwesomeIcon
            icon="medal"
            className={activeNav === 4 ? "nav-item active" : "nav-item"}
          />
        </Link>
        <Link to="/main/profile" className="nav-link" onClick={() => setActiveNav(5)}>
          <FontAwesomeIcon
            icon="user"
            className={activeNav === 5 ? "nav-item active" : "nav-item"}
          />
        </Link>
      </div>
    </div>
  );
};
export default MainNav;
