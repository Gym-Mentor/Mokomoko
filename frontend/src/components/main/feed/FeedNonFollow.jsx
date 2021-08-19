import React from "react";
import "../../../css/main/feed/FeedNonFollow.css";
import FollowerProfile from "../profile/FollowerProfile";

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
          <FollowerProfile {...item} key={`item_${i}`} />
        ))}
      </div>
    </>
  );
};

export default FeedNonFollow;
