import React from "react";
import "../../../css/main/profile/FollowModal.css";
import FollowerProfile from "./FollowerProfile";

const FollowerModal = ({ showFollowerModal }) => {
  return (
    <>
      <div className="background" onClick={showFollowerModal} />
      <div className="followList">
        <div className="follower-title">
          <p>팔로워</p>
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

export default FollowerModal;
