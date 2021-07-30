import React from "react";
import Header from "../../../components/header/Header";
import UserInfo from "./UserInfo";
import Post from "../Post";

import "../../../css/main/profile/Profile.css";

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="profile">
        <UserInfo />
      </div>
      <Post />
    </div>
  );
};

export default Profile;
