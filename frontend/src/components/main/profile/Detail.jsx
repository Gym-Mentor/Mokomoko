import React, { useEffect } from "react";
import "../../../css/main/profile/Detail.css";
import { getDetailNumber, setDetail } from "../../../modules/profileDetail";
import { IoIosArrowBack } from "react-icons/io";
import { Avatar } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import testImg from "../../../img/user.jpg";
import { Col, Form, Row } from "react-bootstrap";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Detail = (profilePhoto) => {
  //Link to 로 이동할 때 state로 넘겨준 값 받기 위해 사용
  // const { idx, item } = state;

  const onClickBack = () => {
    console.log("뒤로 가는거 처리");
  };

  return (
    <>
      <div className="detail-contents">
        {/* <div className="mobile-headerDiv">
          <div className="mobile-headerDiv icon">
            <IoIosArrowBack onClick={onClickBack} />
          </div>
          <div className="mobile-headerDiv title">사진</div>
        </div> */}
        <div className="mobile-detail-contents-wrapper">
          <div className="mobile-detail-userInfo">
            <Avatar className="mobile-detail-avatar" src={profilePhoto} />
            <span className="mobile-detail-username">admin</span>
          </div>
          <div className="mobile-detail-img">
            {/* <img src={item.img} alt="image" /> */}
            <img className="mobile-detail-img" src={testImg} />
          </div>
          <div className="mobile-detail-things">
            <div className="mobile-detail-like">
              <FavoriteBorderOutlinedIcon fontSize="large" />
            </div>
            <div className="mobile-detail-comment">
              <ChatBubbleOutlinedIcon fontSize="large" />
            </div>
            <div className="mobile-detail-scrap">
              <BookmarkBorderOutlinedIcon fontSize="large" />
            </div>
          </div>
          <div className="mobile-detail-likecnt">
            <p className="mobile-detail-user-likecnt">좋아요 23개</p>
          </div>
          <div className="mobile-detail-bottom">
            <h5 className="mobile-detail-desc-username">admin </h5>
            {/* {item.content} */}
            {/* <h1>{idx}</h1> */}
            {/* <h1>{item.content}</h1> */}
            asdf
          </div>
        </div>

        <div className="dt">
          <div className="dt-details-content">
            <div className="dt-details-content2">
              <div className="dt-img-section">
                <img src={testImg} alt="test" />
              </div>
              <div className="dt-right-section">
                <div className="dt-right-header">
                  <div className="dt-detail-userInfo">
                    <Avatar className="dt-detail-avatar" src={profilePhoto} />
                    <span className="dt-detail-username">admin</span>
                  </div>
                </div>
                <div className="dt-right-content">
                  <div className="dt-right-content-desc">
                    <div className="content-descrip">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but also the
                    </div>
                  </div>
                  <div className="dt-right-content-comment"></div>
                </div>
                <div className="dt-right-footer">
                  <div className="dt-right-footer-btn-section">
                    <div className="dt-detail-like">
                      <FavoriteBorderOutlinedIcon fontSize="large" />
                    </div>
                    <div className="dt-detail-comment">
                      <ChatBubbleOutlinedIcon fontSize="large" />
                    </div>
                    <div className="dt-detail-scrap">
                      <BookmarkBorderOutlinedIcon fontSize="large" />
                    </div>
                  </div>
                  <div className="dt-right-footer-likecnt">
                    <a href="#">
                      <b>좋아요 25,378개</b>
                    </a>
                  </div>
                  <div className="dt-right-footer-upload-date">2일전</div>
                  <div className="dt-right-footer-upload-comment">
                    <input id="footer-comments" type="text" placeholder="댓글 입력..." />
                    <button id="footer-btn" type="submit">
                      게시
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
