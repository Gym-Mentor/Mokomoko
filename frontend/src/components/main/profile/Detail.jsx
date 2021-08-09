import React, { useEffect } from "react";
import "../../../css/main/profile/Detail.css";
import { getDetailNumber, setDetail } from "../../../modules/profileDetail";
import { IoIosArrowBack } from "react-icons/io";
import { Avatar } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";

const Detail = ({ location: { state } }, profilePhoto) => {
  //Link to 로 이동할 때 state로 넘겨준 값 받기 위해 사용
  const { idx, item } = state;

  const onClickBack = () => {
    console.log("뒤로 가는거 처리");
  };

  return (
    <>
      <div className="detail-content">
        <div className="headerDiv">
          <div className="headerDiv icon">
            <IoIosArrowBack onClick={onClickBack} />
          </div>
          <div className="headerDiv title">사진</div>
        </div>
        <div className="detail-userInfo">
          <Avatar className="detail-avatar" src={profilePhoto} />
          <span className="detail-username">admin</span>
        </div>
        <div className="detail-img">
          <img src={item.img} alt="image" />
        </div>
        <div className="detail-things">
          <div className="detail-like">
            <FavoriteBorderOutlinedIcon fontSize="large" />
          </div>
          <div className="detail-comment">
            <ChatBubbleOutlinedIcon fontSize="large" />
          </div>
          <div className="detail-scrap">
            <BookmarkBorderOutlinedIcon fontSize="large" />
          </div>
        </div>
        <div className="detail-likecnt">
          <p className="detail-user-likecnt">좋아요 23개</p>
        </div>
        <div className="detail-bottom">
          <h5 className="detail-desc-username">admin </h5>
          {item.content}
          {/* <h1>{idx}</h1> */}
          {/* <h1>{item.content}</h1> */}
        </div>
      </div>
    </>
  );
};

export default Detail;
