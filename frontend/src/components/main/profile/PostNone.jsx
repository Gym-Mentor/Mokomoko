import React from "react";
import { FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../../../css/main/profile/PostNone.css";
const PostNone = ({ history }) => {
  const writeHandler = () => {
    history.push("/main/select");
  };
  return (
    <div>
      <div className="none-post-wrapper">
        <div className="none-post-pic">
          <div className="none-cam-wrap">
            <Link to="/main/select" className="non-cam-w" onClick={writeHandler}>
              <FiCamera id="fi-cam" />
            </Link>
          </div>
          <div className="share-msg">
            <p className="sharem">사진 공유</p>
          </div>
          <div className="share-msg-child">
            <span className="sharem-msg">소중한 당신의 한끼를 공유해보세요 !</span>
          </div>
          <div className="share-a">
            <Link id="gotowrite" to="/main/select">
              <span className="share-to-msg">첫 게시글 공유하기</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostNone;
