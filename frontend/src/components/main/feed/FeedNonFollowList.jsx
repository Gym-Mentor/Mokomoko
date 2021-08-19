import React from "react";
import { Avatar } from "@material-ui/core";
import testImg from "../../../img/user_image.png";
const FeedNonFollowList = () => {
  return (
    <div>
      <div className="follower-profile-wrapper">
        <div className="follower-profile-list">
          <div className="follower-profile-img">
            <Avatar className="follow-avatar" src={testImg} />
          </div>
          <div className="follow-profile-nickname">
            <span className="follow-nickname">abcde</span>
          </div>
        </div>{" "}
        <div className="follow-profile-f">
          <button className="follow-profile-btn">팔로우</button>
        </div>
      </div>
    </div>
  );
};

export default FeedNonFollowList;
