import React from "react";
import Header from "../../../components/header/Header";
import UserInfo from "./UserInfo";

import "../../../css/main/profile/Profile.css";
import ProfilePost from "./ProfilePost";

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="profile">
        <UserInfo />
      </div>
      <ProfilePost />
    </div>
  );
};

export default Profile;
