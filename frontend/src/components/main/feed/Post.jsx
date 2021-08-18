import { Avatar } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import React, { useState, useEffect } from "react";
import "../../../css/main/feed/Post.css";
import testImg from "../../../img/logo-back.png";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
const Post = ({ contents, image, like, nickname, post }) => {
  // 출력할 데이터
  const dispatch = useDispatch();
  // 출력할 데이터
  const { user } = useSelector((state) => ({
    user: state.userInfo.user,
  }));
  const [islike, setIsLike] = useState(like);
  const [tempPost, setTempPost] = useState(post);
  // 좋아요 누르기
  // 좋아요는 따로 state 저장
  // 댓글은 페이지 이동
  // 사진 누르면 상세페이지 이동
  // 프로필 누르면 상세 프로필 이동
  // 스크랩 누르면 스크랩 적용
  const isPostLike = () => {
    if (islike === false) {
      setIsLike(!islike);

      axios({
        method: "post",
        url: "https://i5d104.p.ssafy.io/api/likes",
        data: {
          userid: user.id,
          postid: post.id,
        },
      })
        .then((response) => {
          let newTempPost = Object.assign({}, tempPost);
          newTempPost.likeCnt = response.data.data;
          setTempPost(newTempPost);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setIsLike(!islike);

      axios({
        method: "delete",
        url: "https://i5d104.p.ssafy.io/api/likes",
        data: {
          userid: user.id,
          postid: post.id,
        },
      })
        .then((response) => {
          let newTempPost = Object.assign({}, tempPost);
          newTempPost.likeCnt = response.data.data;
          setTempPost(newTempPost);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div className="post">
      <div className="post-content">
        <div className="post-header">
          <Avatar className="post-avatar" src={image} />
          <div className="post-info">
            <h3>{nickname}</h3>
            <p className="upload-date">{post.createdate}</p>
          </div>
        </div>
        <div className="post-image">
          {/* <img src={image} alt="image" /> */}
          <img src={contents[0].image} alt="image" />
        </div>

        <div className="post-things">
          <div className="post-like" onClick={isPostLike}>
            {islike ? (
              <FavoriteIcon fontSize="large" />
            ) : (
              <FavoriteBorderOutlinedIcon fontSize="large" />
            )}
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
          <p className="feed-user-likecnt">좋아요 {tempPost.likeCnt}개</p>
        </div>
        <div className="post-bottom">
          <h5 className="post-desc-username">{nickname} </h5>
          <p>{contents[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
