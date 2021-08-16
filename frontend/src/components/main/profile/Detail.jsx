import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import "../../../css/main/profile/Detail.css";
import {Avatar} from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
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

    // const [userImage, setUserImage] = useState(null); //사용자 이미지
    // const [userName, setUserName] = useState(null); //사용자 아이디
    // const [post, setPost] = useState({}); //포스트 관련 정보 (좋아요 할지 안할지 등)
    // const [tags, setTags] = useState(null); //태그 관련 정보
    // const [content, setContent] = useState(null); //포스트 내용 관련 정보
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

    //사용자 정보 && 포스트 정보
    // useEffect(() => {

    //     const fetchDetail = async () => {
    //         try {
    //             //요청 시작 시  error와 postList 초기화
    //             setError(null);

    //             // setUserImage(null); setUserName(null); setPost(null); setTags(null);
    //             // setContent(null); loading 상태 true로 바꾸기
    //             setLoading(true);
    //             console.log(props.postid);
    //             const response = await axios.get(
    //                 "http://i5d104.p.ssafy.io:8080/post/" + props.postid
    //             );

    //             console.log(response);
    //             setUserImage(response.data.data.userImage);
    //             setUserName(response.data.data.userName);
    //             setPost(response.data.data.post);
    //             setTags(response.data.data.tags);
    //             setContent(response.data.data.contents);

    //             console.log("userImage",userImage);
    //             console.log("userName",userName);
    //             console.log("POST", post);
    //             console.log("TAGS",tags);
    //             console.log("Content",content);

    //         } catch (error) {
    //             setError(error);
    //         }

    //         setLoading(false);
    //     }

    //     fetchDetail();

    // }, []);

    
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
            <div className="mobile-detail-like">
                <FavoriteBorderOutlinedIcon fontSize="large"/>
            </div>
            <div className="mobile-detail-comment">
                <ChatBubbleOutlinedIcon fontSize="large"/>
            </div>
            <div className="mobile-detail-scrap">
                <BookmarkBorderOutlinedIcon fontSize="large"/>
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
                                <FavoriteBorderOutlinedIcon fontSize="large"/>
                            </div>
                            <div className="dt-detail-comment">
                                <ChatBubbleOutlinedIcon fontSize="large"/>
                            </div>
                            <div className="dt-detail-scrap">
                                <BookmarkBorderOutlinedIcon fontSize="large"/>
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
</div>
</>
    );
};

export default Detail;
