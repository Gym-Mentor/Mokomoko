import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../../modules/userInfo";
import { testImg } from "../../../img/user_image.png";
import * as HiIcons from "react-icons/hi";

import userImg from "../../../img/user_image.png";
import FollowModal from "./FollowModal";
import FollowerModal from "./FollowerModal";
import "../../../css/main/profile/UserInfo.css";
import BlockModal from "./BlockModal";

const UserInfo = () => {
  const { user } = useSelector((state) => ({ user: state.userInfo.user }));

  const dispatch = useDispatch();

  const [userInfo, SetUesrInfo] = useState(user);

  const [isFollow, setIsFollow] = useState(false);
  const [isFollower, setIsFollower] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const modifyProfileHandler = () => {
    window.alert("프로필 편집 화면으로 이동");
  };
  const showFollowModal = () => {
    setIsFollow((prev) => !prev);
  };

  const showFollowerModal = () => {
    setIsFollower((prev) => !prev);
  };
  const showBlockModal = () => {
    setModalShow((prev) => !prev);
  };

  return (
    <div className="userInfo-wrapper">
      <div className="userInfo-row">
        <div className="userInfo-col">
          <div className="userInfo">
            <div className="userImg">
              <img
                className="userImg-img"
                alt="my-image"
                // src={user.image != null ? user.image : `${userImg}`}
                src={userImg}
              />
            </div>
            <div className="userInfo-nickname">
              <span>{user.nickname}nickname</span>
              {/* 자기 계정일 경우 아래의 태그 및 모달을 띄우지 않음  */}
              <HiIcons.HiOutlineDotsHorizontal id="block-icon" onClick={showBlockModal} />
              {modalShow && <BlockModal showBlockModal={showBlockModal} />}
            </div>

            {/* 자기 계정일 경우 userInfo-follow 안보이게 하고 userInfo-modify 보이게
            타인의 계정일 경우 userInfo-modify 안보이게 하고 userInfo-follow 보이게 */}
            <div className="userInfo-modify">
              <button className="userInfo-modify-btn" onClick={modifyProfileHandler}>
                프로필 편집
              </button>
            </div>
            <div className="userInfo-follow">
              <button className="userInfo-modify-btn">팔로우</button>
            </div>
            <div className="userInfo-introduce">
              <span className>{user.introduce}introintrointrointrointro</span>
            </div>

            <div className="userFriend">
              <hr className="usrf-hr" />
              <div className="userFriend postcnt">
                <p className="uf-title">
                  <b>게시물</b>
                </p>
                <div className="uf-numb">3</div>
              </div>
              <div className="userFriend follow" onClick={showFollowModal}>
                <p className="uf-title">
                  <b>팔로우</b>
                </p>
                <div className="uf-numb">{user.following}3</div>
              </div>

              {isFollow && <FollowModal showFollowModal={showFollowModal} />}

              <div className="userFriend follower" onClick={showFollowerModal}>
                <p className="uf-title">
                  <b>팔로워</b>
                </p>
                <div className="uf-numb">{user.follower}6</div>
              </div>
              {isFollower && <FollowerModal showFollowerModal={showFollowerModal} />}
            </div>
          </div>
          <hr className="usrf-hr" />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
