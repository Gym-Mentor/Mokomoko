import React from "react";

import "../../../css/award/AwardTag.css";

const AwardTag = () => {
  return (
    <div>
      <div className="awardTag-wrapper">
        <div className="awardTag-row">
          <div className="awardTag-col">
            <div className="awardTag-content">
              <div className="awardTag-content item">1</div>
              <div className="awardTag-content item">2</div>
              <div className="awardTag-content item">3</div>
            </div>
            <br></br>
            <div className="awardTag-content">
              <div className="awardTag-content item">4</div>
              <div className="awardTag-content item">5</div>
              <div className="awardTag-content item">6</div>
            </div>
            <br></br>

            <div className="awardTag-content">
              <div className="awardTag-content item">7</div>
              <div className="awardTag-content item">8</div>
              <div className="awardTag-content item">9</div>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardTag;
