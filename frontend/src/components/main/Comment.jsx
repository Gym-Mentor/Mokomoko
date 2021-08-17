import React ,{useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../css/main/Comment.css";
import ContentHeader from "../header/ContentHeader";
import { Avatar } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import axios from "axios";

import { setComments } from "../../modules/Post";

const Comment = () => {

  const {user,userImage,post,comments} = useSelector(state => ({
    user : state.userInfo.user,
    userImage : state.Post.userImage,
    post : state.Post.post,
    comments : state.Post.comments,
  }));

  const dispatch = useDispatch();
  const onSetComments = (comments) => dispatch(setComments(comments));
  
  const [writeComment,setWriteComment] = useState(null);

  const onChangeWriteComment = (e) =>{
    setWriteComment(e.target.value);
  };

  const submitComment = () =>{
    console.log(writeComment);
    console.log("댓글 전송");

    axios({
      method : "post",
      url: "http://i5d104.p.ssafy.io:8080/comment",
      data :{
        "userid": user.id,
        "postid": post.id,
        "description": writeComment,
      }
    })
    .then((response) =>{
      console.log(response);
    })
    .catch((error) =>{
      console.log(error);
    })

    setWriteComment(null);
  }

  useEffect(() => {
    
    return () => {
      
    }
  }, [writeComment])
  return (
    <div className="comments-wrapper">
      <ContentHeader title="댓글" />
      <div className="type-comment">
        {/* body-comment는 댓글 페이지의 헤더부분 제외한 전반적인 영역 담당 */}
        <div className="comment-type-container">
          {/* container1, 2 는 댓글 작성자의 입력폼 */}
          <div className="comment-type-container2">
            <div className="comment-avatar-container">
              <Avatar id="comment-avatar" className="post-avatar" src={userImage} />
            </div>
            <textarea
              type="textarea"
              id="comment-ipt"
              name="commenttext"
              placeholder="댓글 달기..."
              value={writeComment}
              onChange={onChangeWriteComment}
            ></textarea>
            <button type="submit" className="comment-btn" onClick={submitComment}>
              <CheckCircleIcon id="submit-icon" />
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="user-comment">
        <ul className="comment-list">
          {/* <li className="comment-list-detail">
            <div className="usr-comment-userInfo">
              <Avatar id="usr-comment-avatar" className="post-avatar" src={userImage} />
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
          </li> */}
          {comments && comments.map((item,index) =>{
            return(
            <li className="comment-list-detail" key = {index}>
            <div className="usr-comment-userInfo">
              <Avatar id="usr-comment-avatar" className="post-avatar" src={item.image} />
              <p className="usr-comment-username">{item.name}</p>
              <span className="usr-comment-desc">
                {item.description}
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
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Comment;
