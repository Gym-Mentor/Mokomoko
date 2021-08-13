import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIndex } from "../../modules/MainNav";
import "../../css/main/Compass.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CompassHeader from "./CompassHeader";
// import jQuery from "jquery";
const Compass = () => {

  const { activeNav } = useSelector((state) => ({
    activeNav: state.activeNav,
  }));

  const dispatch = useDispatch();

  const onSetIndex = (activeNav) => dispatch(setIndex(activeNav));

  // 탐색 피드 state 선언
  const [lists, setLists] = useState([]);

  // 탐색 피드 받아오기
  useEffect(() => {
    onSetIndex(2);
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
            <CompassHeader />

            {/* <div className="search-form">
              <div className="search-box">
                <input id="search-ipt" type="text" />
                <span id="ospan"></span>
              </div>
            </div> */}
            {/* {"\u00A0"}
            <Link to="/search">
              <FontAwesomeIcon icon="search" className="search fa-2x" />
            </Link> */}
          </header>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Compass;
