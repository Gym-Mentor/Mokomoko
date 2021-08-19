import React, { useEffect, useState } from "react";
import "../../../css/main/profile/FollowModal.css";
import FollowerProfile from "./FollowerProfile";
import { useSelector } from "react-redux";
import axios from "axios";
import { setUserInfo } from "../../../modules/userInfo";
import UserList from "./UserList";
const FollowerModal = ({ showFollowerModal }) => {
  const { user } = useSelector((state) => ({
    user: state.userInfo.user,
  }));
  const [userList, setUserList] = useState([]);
  const { OtherUser } = useSelector((state) => state.OtherUser);
  // 팔로워 목록 받기
  useEffect(() => {
    axios({
      url: "https://i5d104.p.ssafy.io/api/user/follower",
      method: "post",
      data: {
        selectid: OtherUser.user.id,
        userid: user.id,
      },
    })
      .then(({ data }) => {
        console.log(data);
        let newList = Object.assign([], userList);
        newList = data.data;
        setUserList(newList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const onRemoveUser = () => {
    axios({
      url: "https://i5d104.p.ssafy.io/api/user/follower",
      method: "post",
      data: {
        selectid: OtherUser.user.id,
        userid: user.id,
      },
    })
      .then(({ data }) => {
        console.log(data);
        let newList = Object.assign([], userList);
        newList = data.data;
        setUserList(newList);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    return () => {};
  }, [userList]);

  return (
    <>
      <div className="background" onClick={showFollowerModal} />
      <div className="followList">
        <div className="follower-title">
          <p>팔로워</p>
        </div>
        <hr className="follower-hr" />

        <UserList list={userList} onRemoveUser={() => onRemoveUser()} />
      </div>
    </>
  );
};

export default FollowerModal;
