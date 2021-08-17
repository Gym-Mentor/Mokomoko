import React from "react";
import "../../css/header/Cheader.css";

const Cheader = (props) => {
  return (
    <div className="cheader-wrapper">
      <div className="headerDiv">
        <div className="headerDiv icon">
          <span id="profile-header-name">mokomoko</span>
        </div>
        <div className="headerDiv title">{props.title}</div>
      </div>
    </div>
  );
};

export default Cheader;
