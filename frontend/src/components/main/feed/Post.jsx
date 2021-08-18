import { Avatar } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import React from "react";
import "../../../css/main/feed/Post.css";
import testImg from "../../../img/logo-back.png";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Post = ({ contents, image, like, nickname, post }) => {
  // 출력할 데이터
  const dispatch = useDispatch();
  // 출력할 데이터
  const { user } = useSelector((state) => ({
    user: state.userInfo.user,
  }));
  return (
    <div className="post">
      <div className="post-content">
        <div className="post-header">
          <Avatar className="post-avatar" src={image} />
          <div className="post-info">
            <h3>{nickname}</h3>
            {/* <p className="upload-date">{new Date(timestamp?.toDate()).toUTCString()}</p> */}
          </div>
        </div>
        <div className="post-image">
          {/* <img src={image} alt="image" /> */}
          <img src={contents[0].image} alt="image" />
        </div>

        <div className="post-things">
          <div className="post-like">
            <FavoriteBorderOutlinedIcon fontSize="large" />
          </div>
          <div className="post-comment">
            <ChatBubbleOutlinedIcon fontSize="large" />
          </div>
          <div className="post-scrap">
            <BookmarkBorderOutlinedIcon fontSize="large" />
          </div>
        </div>
        <div className="likecnt">
          <p className="feed-user-likecnt">좋아요 {post.likeCnt}개</p>
        </div>
        <div className="post-bottom">
          <h5 className="post-desc-username">{nickname} </h5>
          <p>{contents.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
