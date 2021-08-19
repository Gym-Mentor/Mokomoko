import React from "react";
import "../../../css/main/profile/FollowModal.css";
import FollowerProfile from "./FollowerProfile";

const FollowModal = ({ showFollowModal }) => {
  return (
    <>
      <div className="background" onClick={showFollowModal} />
      <div className="followList">
        <div className="follower-title">
          <p>팔로우</p>
        </div>
        <hr className="follower-hr" />
        <FollowerProfile />
        <FollowerProfile />
        <FollowerProfile />
        <FollowerProfile />
        <FollowerProfile />
        <FollowerProfile />
        <FollowerProfile />
        <FollowerProfile />
        <FollowerProfile />
        <FollowerProfile />
        <FollowerProfile />
        <FollowerProfile />
      </div>
    </>
  );
};

export default FollowModal;
