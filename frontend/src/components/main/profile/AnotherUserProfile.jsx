import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIndex } from "../../../modules/MainNav";
import Header from "../../../components/header/Header";
import UserInfo from "./UserInfo";

import "../../../css/main/profile/AnotherProfile.css";
import ProfilePostContainer from "../../../container/ProfilePostContainer";
import ProfilePost from "./ProfilePost";
import AnotherUserInfo from "./AnotherUserInfo";

const AnotherUserProfile = () => {
  //userSelector로 리덕스 스토어의 상태 조회하기
  const { activeNav } = useSelector((state) => ({ activeNav: state.activeNav }));

  const dispatch = useDispatch();

  const onSetIndex = (activeNav) => dispatch(setIndex(activeNav));

  useEffect(() => {
    onSetIndex(5);
    return () => {};
  }, []);

  return (
    <div className="profile-wrapper">
      <div className="profile-row">
        <div className="profile-col">
          <Header />
          <div className="profile">
            <AnotherUserInfo />
          </div>
          <ProfilePost />
        </div>
      </div>
    </div>
  );
};

export default AnotherUserProfile;
