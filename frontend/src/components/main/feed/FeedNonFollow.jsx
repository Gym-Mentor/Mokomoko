import axios from "axios";
import React, { useEffect } from "react";
import "../../../css/main/feed/FeedNonFollow.css";
import FeedNonFollowList from "./FeedNonFollowList";
const FeedNonFollow = (list) => {
  return (
    <>
      <div className="non-background" />
      <div className="non-followList">
        <div className="follower-title">
          <p>사용자 추천</p>
        </div>
        <hr className="follower-hr" />
        {list.map((item, i) => (
          <FeedNonFollowList {...item} key={`item_${i}`} />
        ))}
      </div>
    </>
  );
};

export default FeedNonFollow;
