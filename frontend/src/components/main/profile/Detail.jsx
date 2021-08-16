import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import "../../../css/main/profile/Detail.css";
import {Avatar} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import testImg from "../../../img/user.jpg";

import {Col, Form, Row} from "react-bootstrap";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import axios from "axios";

const Detail = (props) => {

  const {userImage,userName,post,tags,content } = useSelector((state) => ({
    userImage : state.Post.userImage,
    userName : state.Post.userName,
    post : state.Post.post,
    tags : state.Post.tags,
    content : state.Post.content,
  }));

  const [bookmark,setBookmark] = useState(false);
  const [like,setLike] = useState(false);

  const isPostLike = () =>{
      console.log("좋아요");
      setLike(!like);
  }

  const isBookmark = () =>{
      setBookmark(!bookmark);
  }


  const goToShop =(e, shoppingUrl) =>{
      e.preventDefault();

      window.open(shoppingUrl);
  }

    
    return (
        <> < div className = "detail-contents" > {/* <div className="mobile-headerDiv">
          <div className="mobile-headerDiv icon">
            <IoIosArrowBack onClick={onClickBack} />
          </div>
          <div className="mobile-headerDiv title">사진</div>
        </div> */
        } < div className = "mobile-detail-contents-wrapper" > <div className="mobile-detail-userInfo">
            <Avatar className="mobile-detail-avatar"/>
            <span className="mobile-detail-username">{userName}</span>
        </div>
        <div className="mobile-detail-img">
            {/* <img src={item.img} alt="image" /> */}
            {content.map((item,index) =>{
              return(
                  <img alt="image" key = {index} src={item.image}/>
                )
              })}
            <img className="mobile-detail-img"/>
        </div>
        <div className="mobile-detail-things">
            <div className="mobile-detail-like" onClick={isPostLike}>
                {
                    like
                    ?<FavoriteIcon fontSize="large"/>
                    :<FavoriteBorderOutlinedIcon fontSize="large"/>
                }
            </div>
            <div className="mobile-detail-comment">
                <ChatBubbleOutlinedIcon fontSize="large"/>
            </div>
            <div className="mobile-detail-scrap" onClick={isBookmark}>
                {bookmark 
                ? <BookmarkIcon fontSize="large"/>
                : <BookmarkBorderOutlinedIcon fontSize="large"/>}
            </div>
        </div>
        <div className="mobile-detail-likecnt">
            <p className="mobile-detail-user-likecnt">좋아요  {post.likeCnt}</p>
        </div>
        <div className="mobile-detail-bottom">
            <h5 className="mobile-detail-desc-username">{userName}</h5>
            {content.map((item,index) =>{
              return(
                <span key={index}> {item.description}</span>
              )
            })}
        </div>
    </div>

            {/* 큰화면  */
        } < div className = "dt" > <div className="dt-details-content">
            <div className="dt-details-content2">
                <div className="dt-img-section">
                  {content.map((item,index) =>{
                      return(
                        <img alt="image" key = {index} src={item.image}/>
                      )
                    })}
                </div>
                <div className="dt-right-section">
                    <div className="dt-right-header">
                        <div className="dt-detail-userInfo">
                            <Avatar className="dt-detail-avatar"/>
                            <span className="dt-detail-username">{userName}</span>
                        </div>
                    </div>
                    <div className="dt-right-content">
                        <div className="dt-right-content-desc">
                            <div className="content-description">
                                {content.map((item,index) =>{
                                  return(
                                    <span key={index}> {item.description}</span>
                                  )
                                })}
                            </div>
                        </div>
                        <div className="dt-right-content-comment"></div>
                    </div>
                    <div className="dt-right-footer">
                        <div className="dt-right-footer-btn-section">
                            <div className="dt-detail-like">
                                {
                                like
                                ?<FavoriteIcon fontSize="large"/>
                                :<FavoriteBorderOutlinedIcon fontSize="large"/>
                                }
                            </div>
                            <div className="dt-detail-comment">
                                <ChatBubbleOutlinedIcon fontSize="large"/>
                            </div>
                            <div className="dt-detail-scrap" onClick={isBookmark}>
                                {bookmark 
                                ? <BookmarkIcon fontSize="large"/>
                                : <BookmarkBorderOutlinedIcon fontSize="large"/>}
                            </div>
                        </div>
                        <div className="dt-right-footer-likecnt">
                            <a href="#">
                                <b>좋아요 {post.likeCnt}</b>
                            </a>
                        </div>
                        <div className="dt-right-footer-upload-date">2일전</div>
                        <div className="dt-right-footer-upload-comment">
                            <input id="footer-comments" type="text" placeholder="댓글 입력..."/>
                            <button id="footer-btn" type="submit">
                                게시
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    링크
    {tags.map((item,index) =>{
        return(
            <div key = {index} onClick={(e) => goToShop(e,`${item.url}`)}>{item.name}</div>
        );
    })}
</div>
</>
    );
};

export default Detail;
