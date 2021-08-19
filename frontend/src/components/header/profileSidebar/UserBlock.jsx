import axios from "axios";
import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "../../../css/header/profileSidebar/UserBlock.css";
import Cheader from "../Cheader";
import BlockUserList from "./BlockUserList";
import * as BiIcons from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const UserBlock = () => {
  useEffect(() => {
    axios({
      // url: ,
      // method: ,
    });
  });

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
        <BlockUserList />
      </div>
    </>
  );
};

export default UserBlock;
