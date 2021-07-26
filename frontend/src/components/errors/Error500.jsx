import React from "react";
import { Link } from "react-router-dom";
import "../../css/Error.css";
const Error500 = () => {
  return (
    <div>
      <div className="error-icon">
        <img src="500.png" alt="500 icon" />
      </div>
      <div className="home-icon">
        <Link to="/login">
          <h2>홈으로 가기</h2>
        </Link>
      </div>
      <h2>Error 500</h2>
    </div>
  );
};

export default Error500;
