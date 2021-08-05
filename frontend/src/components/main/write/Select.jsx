import React from "react";
import { Link } from "react-router-dom";
import "../../../css/main/write/Select.css";
const Select = () => {
  return (
    <div className="select-wrapper">
      <div className="select-row">
        <div className="select-col">
          <header className="select-header">피드 작성</header>
          <div className="select-content">
            <div className="select-btn">
              <Link to="/main/writeFood" className="select-link">
                <button>음식 피드 작성</button>
              </Link>
            </div>
            <div className="select-btn">
              <Link to="/main/writeRecipe" className="select-link">
                <button>레시피 피드 작성</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
