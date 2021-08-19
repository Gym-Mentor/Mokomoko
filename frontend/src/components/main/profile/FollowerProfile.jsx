import { Avatar } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../css/main/profile/FollowProfile.css";
import testImg from "../../../img/user_image.png";
import { setUserInfo } from "../../../modules/userInfo";
// 나랑 다른 사용자 정보 받아서 팔로우 했냐 안했냐를 따져서 팔로우버튼 팔로우해제 버튼 이벤트 구현하기
// 프로필 누르면 그 사용자로 이동하게하는 이벤트
// item.id를 받아서 /api
const FollowerProfile = (item) => {
  const { user } = useSelector((state) => ({ user: state.userInfo.user }));
  console.log(user);
  const dispatch = useDispatch();
  // 팔로우하기, 차단하기
  const MakeRelation = (flag) => {
    // flag가 true면 팔로우
    // flag가 false면 차단
    axios({
      method: "post",
      url: "https://i5d104.p.ssafy.io/api/relation",
      data: {
        send: user.id,
        receive: item.id,
        state: flag,
      },
    })
      .then((response) => {
        let newUser = Object.assign({}, user);
        // let check = OtherUser.relationInfo.follow;
        // let newOtherUser = Object.assign({}, OtherUser);
        // newOtherUser.relationInfo = response.data.data;
        // dispatch(setOtherUser(newOtherUser));
        // if (!flag) {
        //   alert(OtherUser.user.nickname + "님을 차단했습니다.");
        //   if (check) {
        //     newUser.following--;
        //     dispatch(setUserInfo(newUser));
        //   }
        //   history.push({
        //     pathname: "/main/feed",
        //   });
        // } else {
        alert(item.nickname + "님을 팔로우했습니다.");
        newUser.following++;
        dispatch(setUserInfo(newUser));
        // }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // 팔로우해제, 차단풀기
  const RemoveRelation = (flag) => {
    // flag가 true면 팔로우해제
    // flag가 false면 차단해제
    axios({
      method: "delete",
      url: "https://i5d104.p.ssafy.io/api/relation",
      data: {
        send: user.id,
        receive: item.id,
        state: flag,
      },
    })
      .then((response) => {
        // let newOtherUser = Object.assign({}, OtherUser);
        // newOtherUser.relationInfo = response.data.data;
        // dispatch(setOtherUser(newOtherUser));
        if (!flag) {
          alert(item.nickname + "님을 차단해제 했습니다.");
        } else {
          let newUser = Object.assign({}, user);
          newUser.following--;
          dispatch(setUserInfo(newUser));
          alert(item.nickname + "님을 팔로우해제 했습니다.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="follower-profile-wrapper">
        <div className="follower-profile-list">
          <div className="follower-profile-img">
            <Avatar className="follow-avatar" src={item.image} />
          </div>
          <div className="follow-profile-nickname">
            <span className="follow-nickname">{item.nickname}</span>
          </div>
        </div>{" "}
        <div className="follow-profile-f">
          {item.state === "yes" ? (
            <button className="follow-profile-btn" onClick={() => RemoveRelation(true)}>
              팔로우 해제
            </button>
          ) : item.state === "no" ? (
            <button className="follow-profile-btn" onClick={() => MakeRelation(true)}>
              팔로우
            </button>
          ) : (
            <button className="follow-profile-btn" onClick={() => RemoveRelation(false)}>
              차단 해제
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FollowerProfile;
