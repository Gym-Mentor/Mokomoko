import { Avatar } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../../../css/main/profile/FollowProfile.css";
import testImg from "../../../img/user_image.png";

const FollowerProfile = () => {
  const { user } = useSelector((state) => ({ user: state.userInfo.user }));
  console.log(user);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://i5d104.p.ssafy.io/api/user/follower/" + user.id,
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
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

export default FollowerProfile;
