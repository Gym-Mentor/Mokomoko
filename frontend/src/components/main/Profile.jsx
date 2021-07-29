import React from "react";
import Header from "../../components/header/Header";
import UserInfo from "../../components/main/profile/UserInfo";
import Post from "./profile/ProfilePost";

import "../../css/main/profile/Profile.css";

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
