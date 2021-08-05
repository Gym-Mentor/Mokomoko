import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../css/main/write/Recipe.css";
const Recipe = () => {
  return (
    <div className="recipe-wrapper">
      <div className="recipe-row">
        <div className="recipe-col">
          <header className="recipe-header">피드 작성</header>
          <div className="recipe-content">
            <div className="recipe-btn">
              <Link to="/main/writeFood" className="recipe-link">
                <button>이미지 피드 작성</button>
              </Link>
            </div>
            <div className="recipe-btn">
              <Link to="/main/writeRecipe" className="recipe-link">
                <button>레시피 피드 작성</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
