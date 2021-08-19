import { Avatar } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import React, { useState, useEffect, useRef } from "react";
import "../../../css/main/feed/Post.css";
import testImg from "../../../img/logo-back.png";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
import { setPostData } from "../../../modules/PostData";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Slider from "react-slick";
import { setOtherUser } from "../../../modules/OtherUser";
import BookmarkIcon from "@material-ui/icons/Bookmark";

const Post = ({ contents, image, like, scrap, nickname, post, userid }) => {
  // 출력할 데이터
  const dispatch = useDispatch();
  let history = useHistory();
  // 출력할 데이터
  const { user } = useSelector((state) => ({
    user: state.userInfo.user,
  }));
  const [islike, setIsLike] = useState(like);
  const [isScrap, setIsScrap] = useState(scrap);
  const [tempPost, setTempPost] = useState(post);
  const { PostData } = useSelector((state) => state.PostData);
  const [scrollState, setScrollState] = useState(Number(0));
  const [index, setIndex] = useState(0);
  const slider = useRef();
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
  };
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

  // 상세프로필 이동
  const showUserPage = (id) => {
    axios({
      method: "get",
      url: `https://i5d104.p.ssafy.io/api/post/user/${user.id}/${id}`,
    })
      .then((response) => {
        console.log(response);
        dispatch(setOtherUser({ ...response.data.data }));
        // 다른 사용자 프로필로 이동하기
        history.push({
          pathname: `/main/profile`,
        });
      })
      .catch((error) => {
        console.error(error);
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
          objectid: post.id,
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
          objectid: post.id,
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

  // 스크랩
  const isBookmark = () => {
    if (isScrap === false) {
      setIsScrap(!isScrap);
      //스크랩 저장
      axios({
        method: "post",
        url: "https://i5d104.p.ssafy.io/api/scrap",
        data: {
          postid: post.id,
          userid: user.id,
        },
      })
        .then((response) => {
          console.log("스크랩 성공");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setIsScrap(!isScrap);
      axios({
        method: "delete",
        url: "https://i5d104.p.ssafy.io/api/scrap",
        data: {
          postid: post.id,
          userid: user.id,
        },
      })
        .then((response) => {
          console.log("스크랩 취소 성공");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  // const showNextImage = () => {
  //   console.log("다음 이미지 보여주기");
  //   if (scrollState === tempPost.contents.length - 1) {
  //     setScrollState(0);
  //   } else {
  //     setScrollState(scrollState + 1);
  //   }
  // };
  const nowIndex = (e) => {
    console.log(e.target);
    // setIndex(e.target.index);
  };

  const addTime = (date) => {
    //시간 변환 함수

    const splitDate = date.split("T");
    //["2021-08-18", "12:20:40.304974"]

    const splitDate2 = splitDate[1].split(":");
    // ["12", "20", "40.304974"]

    const splitDate3 = splitDate[0].split("-");
    //[2021, 08, 18]
    var year = splitDate3[0];
    var month = splitDate3[1];
    var day = splitDate3[2];
    var hour = splitDate2[0];
    var min = splitDate2[1];

    var newDate = year + "-" + month + "-" + day + " " + hour + ":" + min;

    var finishDate = new Date(newDate);
    // console.log(finishDate);
    finishDate.setHours(finishDate.getDate() + 8);

    var today = finishDate;

    var year = today.getFullYear();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var day = ("0" + today.getDate()).slice(-2);

    var dateString = year + "-" + month + "-" + day;

    var hours = ("0" + today.getHours()).slice(-2);
    var minutes = ("0" + today.getMinutes()).slice(-2);

    var dateString = year + "-" + month + "-" + day + " " + hours + ":" + minutes;

    return dateString;
  };

  return (
    <div className="post">
      <div className="post-content">
        <div className="post-header">
          <Avatar className="post-avatar" src={image} onClick={() => showUserPage(userid)} />
          <div className="post-info">
            <h3 onClick={() => showUserPage(userid)}>{nickname}</h3>
            <p className="upload-date">{addTime(post.createdate)}</p>
          </div>
        </div>
        {/* <div className="post-image" onClick={showDetail}>
          <img src={contents[scrollState].image} alt="image" />
          <div className="post-image-next" onClick={showNextImage}>
            <NavigateNextIcon fontSize="large" />
          </div>
        </div> */}

        <Slider ref={slider} {...settings} afterChange={nowIndex}>
          {contents.map((item, index) => (
            <img className="d-block w-100" src={item.image} onClick={showDetail} />
          ))}
        </Slider>

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
          <div className="post-scrap" onClick={isBookmark}>
            {isScrap ? (
              <BookmarkIcon fontSize="large" />
            ) : (
              <BookmarkBorderOutlinedIcon fontSize="large" />
            )}
          </div>
        </div>
        <div className="likecnt">
          <p className="feed-user-likecnt">좋아요 {tempPost.likeCnt}개</p>
        </div>
        <div className="post-bottom">
          <p className="post-desc-username">{nickname} </p>
          <p className="post-desc-detail">{contents[0].description}</p>
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
