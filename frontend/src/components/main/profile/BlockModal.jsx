import React from "react";
import "../../../css/main/profile/BlockModal.css";
import { setOtherUser } from "../../../modules/OtherUser";
import { setUserInfo } from "../../../modules/userInfo";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

const BlockModal = ({ showBlockModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => ({ user: state.userInfo.user }));
  const { OtherUser } = useSelector((state) => state.OtherUser);
  // 팔로우하기, 차단하기
  const MakeRelation = (flag) => {
    // flag가 true면 팔로우
    // flag가 false면 차단
    axios({
      method: "post",
      url: "https://i5d104.p.ssafy.io/api/relation",
      data: {
        send: user.id,
        receive: OtherUser.user.id,
        state: flag,
      },
    })
      .then((response) => {
        let newUser = Object.assign({}, user);
        let check = OtherUser.relationInfo.follow;
        let newOtherUser = Object.assign({}, OtherUser);
        newOtherUser.relationInfo = response.data.data;
        dispatch(setOtherUser(newOtherUser));
        if (!flag) {
          alert(OtherUser.user.nickname + "님을 차단했습니다.");
          if (check) {
            newUser.follower--;
            dispatch(setUserInfo(newUser));
          }
          history.push({
            pathname: "/main/feed",
          });
        } else {
          alert(OtherUser.user.nickname + "님을 팔로우했습니다.");

          newUser.follower++;
          dispatch(setUserInfo(newUser));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="background-block" onClick={showBlockModal} />
      <div className="blockList">
        <button className="block-user-btn" onClick={MakeRelation(false)}>
          차단하기
        </button>
      </div>
    </>
  );
};

export default BlockModal;
