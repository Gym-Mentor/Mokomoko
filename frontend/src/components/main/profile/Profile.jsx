import React from "react";
import Header from "../../../components/header/Header";
import UserInfo from "./UserInfo";

import "../../../css/main/profile/Profile.css";
// import ProfilePost from "./ProfilePost";
import ProfilePostContainer from "../../../container/ProfilePostContainer";

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="profile">
        <UserInfo />
      </div>
      <ProfilePostContainer />
    </div>
  );
};

export default Profile;
