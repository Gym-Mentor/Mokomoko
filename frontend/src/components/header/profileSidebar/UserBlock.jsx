import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "../../../css/header/profileSidebar/UserBlock.css";
import Cheader from "../Cheader";
import BlockUserList from "./BlockUserList";
import * as BiIcons from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import UserList from "../../main/profile/UserList";

const UserBlock = () => {
  const { user } = useSelector((state) => ({
    user: state.userInfo.user,
  }));
  const [userList, setUserList] = useState([]);

  // 차단 계정 목록 받아오기
  // 팔로워 목록 받기
  useEffect(() => {
    axios({
      url: "https://i5d104.p.ssafy.io/api/user/block",
      method: "post",
      data: {
        selectid: user.id,
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
      url: "https://i5d104.p.ssafy.io/api/user/block",
      method: "post",
      data: {
        selectid: user.id,
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
  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      <Cheader title={<BiIcons.BiBlock />} />
      <div className="block-background" />
      <div className="block-list">
        <div className="block-title">
          <p id="block-title-msg">차단 계정</p>
          <button id="block-esc-btn" onClick={goBack}>
            <IoClose id="close-block-icon" />
          </button>
        </div>
        <hr className="follower-hr" />
        {/* <BlockUserList /> */}
        <BlockUserList list={userList} onRemoveUser={() => onRemoveUser()} />
      </div>
    </>
  );
};

export default UserBlock;
