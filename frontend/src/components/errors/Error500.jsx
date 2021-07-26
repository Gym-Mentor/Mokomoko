import React from "react";
import { Link } from "react-router-dom";
import "../../css/Error.css";
const Error500 = () => {
  return (
    <div>
      <div className="home-icon">
        <Link to="/login">
          <img src="mokomoko.png" alt="home icon" />
        </Link>
      </div>
      <div className="error-icon">
        <img src="500.png" alt="500 icon" />
      </div>
      <h2>500 Error</h2>
    </div>
  );
};

export default Error500;
