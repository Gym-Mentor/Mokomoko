import React from "react";
import "../../../css/main/profile/FollowModal.css";
import FeedNonFollowList from "./FeedNonFollowList";

const FeedNonFollow = () => {
  return (
    <>
      <div className="background" />
      <div className="followList">
        <div className="follower-title">
          <p>팔로워</p>
        </div>
        <hr className="follower-hr" />
        <FeedNonFollowList />
      </div>
    </>
  );
};

export default FeedNonFollow;
