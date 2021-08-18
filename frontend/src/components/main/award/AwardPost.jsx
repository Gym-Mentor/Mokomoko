import React from "react";

import "../../../css/award/AwardPost.css";
import List from "../explore/List";

const AwardPost = (props) => {
  console.log("props awardPost : ", props);
  return (
    <div>
      <div className="awardPost-wrapper">
        <div className="awardPost-row">
          <div className="awardPost-col">
            <h3 className="award-user-title">인기 게시글</h3>
            <div className="awardPost-content">
              <List list={props.postList} />
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardPost;
