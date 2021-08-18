import React from "react";

import "../../../css/award/AwardTag.css";

const AwardTag = (props) => {
  return (
    <div>
      <div className="awardTag-wrapper">
        <div className="awardTag-row">
          <div className="awardTag-col">
            <h3 className="award-user-title">인기 태그</h3>
            <div className="awardTag-content">
              <div className="awardTag-content item">
                <span>
                  <b>1. {props.tagList[0].name}</b>
                </span>
              </div>
              <div className="awardTag-content item">
                <span>
                  <b>4. {props.tagList[3].name}</b>
                </span>
              </div>
              <div className="awardTag-content item">
                <span>
                  <b>7. {props.tagList[6].name}</b>
                </span>
              </div>
            </div>
            <br></br>
            <div className="awardTag-content">
              <div className="awardTag-content item">
                <span>
                  <b>2. {props.tagList[1].name}</b>
                </span>
              </div>
              <div className="awardTag-content item">
                <span>
                  <b>5. {props.tagList[4].name}</b>
                </span>
              </div>
              <div className="awardTag-content item">
                <span>
                  <b>8. {props.tagList[7].name}</b>
                </span>
              </div>
            </div>
            <br></br>

            <div className="awardTag-content">
              <div className="awardTag-content item">
                <span>
                  <b>3. {props.tagList[2].name}</b>
                </span>
              </div>
              <div className="awardTag-content item">
                <span>
                  <b>6. {props.tagList[5].name}</b>
                </span>
              </div>
              <div className="awardTag-content item">
                <span>
                  <b>9. {props.tagList[8].name}</b>
                </span>
              </div>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardTag;
