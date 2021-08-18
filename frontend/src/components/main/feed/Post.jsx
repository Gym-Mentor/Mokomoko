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
import { setPostData } from "../../../modules/PostData";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Carousel } from "react-bootstrap";
const Post = ({ contents, image, like, nickname, post }) => {
  // 출력할 데이터
  const dispatch = useDispatch();
  let history = useHistory();
  // 출력할 데이터
  const { user } = useSelector((state) => ({
    user: state.userInfo.user,
  }));
  const [islike, setIsLike] = useState(like);
  const [tempPost, setTempPost] = useState(post);
  const { PostData } = useSelector((state) => state.PostData);
  const [scrollState, setScrollState] = useState(Number(0));
  // 댓글은 페이지 이동
  // 사진 누르면 상세페이지 이동
  // 프로필 누르면 상세 프로필 이동
  // 스크랩 누르면 스크랩 적용

  // 댓글 누르면 이동
  const goToComment = () => {
    //받아온 postid 통해서 GET 으로 정보 얻어오기
    axios({
      url: "https://i5d104.p.ssafy.io/api/post/" + user.id + "/" + post.id,
      method: "get",
    })
      .then((response) => {
        console.log(response);
        dispatch(setPostData(response.data.data));
        history.push({
          pathname: `/main/p/commentPage/${post.id}`,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 사진 누르면 이동
  const showDetail = () => {
    console.log(post.id);
    //받아온 postid 통해서 GET 으로 정보 얻어오기
    axios({
      url: "https://i5d104.p.ssafy.io/api/post/" + user.id + "/" + post.id,
      method: "get",
    })
      .then((response) => {
        console.log(response);
        dispatch(setPostData(response.data.data));
        history.push({
          pathname: `detailPresenter/${post.id}`,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 좋아요
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
  const showNextImage = () => {
    console.log("다음 이미지 보여주기");
    if (scrollState === tempPost.contents.length - 1) {
      setScrollState(0);
    } else {
      setScrollState(scrollState + 1);
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
        {/* <div className="post-image" onClick={showDetail}>
          <img src={contents[scrollState].image} alt="image" />
          <div className="post-image-next" onClick={showNextImage}>
            <NavigateNextIcon fontSize="large" />
          </div>
        </div> */}

        <Carousel>
          {tempPost.contents.map((item, index) => (
            <Carousel.Item>
              <img className="d-block w-100" src={item.image} />
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="post-things">
          <div className="post-like" onClick={isPostLike}>
            {islike ? (
              <FavoriteIcon fontSize="large" />
            ) : (
              <FavoriteBorderOutlinedIcon fontSize="large" />
            )}
          </div>
          <div className="post-comment" onClick={goToComment}>
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
        <div className="likecnt">
          <p className="feed-user-likecnt" onClick={goToComment}>
            댓글 {tempPost.comCnt}개 모두 보기
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
