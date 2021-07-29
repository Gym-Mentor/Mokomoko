import React, { useState, useEffect } from "react";
import "../../css/main/Compass.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Compass = () => {
  // 탐색 피드 state 선언
  const [lists, setLists] = useState([]);

  // 탐색 피드 받아오기
  useEffect(() => {
    lists[lists.length] = {
      id: 0,
      name: 0,
      type: 0,
      img: 0,
    };
  });

  return (
    <div className="compass-wrapper">
      <div className="compass-row">
        <div className="compass-col">
          <header className="compass-header">
            {"\u00A0"}
            <Link to="/search">
              <FontAwesomeIcon icon="search" className="search fa-2x" />
            </Link>
          </header>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Compass;
