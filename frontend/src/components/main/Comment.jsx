import React from "react";
import "../../css/main/Comment.css";
import ContentHeader from "../header/ContentHeader";
import { Avatar } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Comment = (profilePhoto, nickname, comment) => {
  const onClickBack = () => {
    console.log("뒤로가기 처리");
  };
  return (
    <div className="comments-wrapper">
      <ContentHeader title="댓글" />
      <div className="type-comment">
        {/* body-comment는 댓글 페이지의 헤더부분 제외한 전반적인 영역 담당 */}
        <div className="comment-type-container">
          {/* container1, 2 는 댓글 작성자의 입력폼 */}
          <div className="comment-type-container2">
            <div className="comment-avatar-container">
              <Avatar id="comment-avatar" className="post-avatar" src={profilePhoto} />
            </div>
            <textarea
              type="textarea"
              id="comment-ipt"
              name="commenttext"
              placeholder="댓글 달기..."
            ></textarea>
            <button type="submit" className="comment-btn">
              <CheckCircleIcon id="submit-icon" />
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="user-comment">
        <ul className="comment-list">
          <li className="comment-list-detail">
            <div className="usr-comment-userInfo">
              <Avatar id="usr-comment-avatar" className="post-avatar" src={profilePhoto} />
              <p className="usr-comment-username">username</p>
              <span className="usr-comment-desc">
                this is test comment. plz type right messages
              </span>
            </div>
            <div className="usr-comment-like">
              <FavoriteBorderIcon id="comment-like" />
            </div>
            <div className="usr-comment-footer">
              <div className="comment-likecnt-cont">
                <a href="#" id="comment-likecnt">
                  <p id="comment-likecnt-desc">좋아요 30개</p>
                </a>
              </div>
              <div className="comment-footer-recomment-cont">
                <div className="comment-footer-re">
                  <button id="recomment-btn">
                    <p id="recomment">답글 달기</p>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li className="comment-list-detail">
            <div className="usr-comment-userInfo">
              <Avatar id="usr-comment-avatar" className="post-avatar" src={profilePhoto} />
              <p className="usr-comment-username">username</p>
              <span className="usr-comment-desc">
                this is test comment. plz type right messages
              </span>
            </div>
            <div className="usr-comment-like">
              <FavoriteBorderIcon id="comment-like" />
            </div>
            <div className="usr-comment-footer">
              <div className="comment-likecnt-cont">
                <a href="#" id="comment-likecnt">
                  <p id="comment-likecnt-desc">좋아요 30개</p>
                </a>
              </div>
              <div className="comment-footer-recomment-cont">
                <div className="comment-footer-re">
                  <button id="recomment-btn">
                    <p id="recomment">답글 달기</p>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Comment;
