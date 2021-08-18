import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../css/main/Comment.css";
import ContentHeader from "../header/ContentHeader";
import { Avatar } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import axios from "axios";
import {
  setContent,
  setContentImage,
  setPost,
  setTags,
  setUserImage,
  setUserName,
  setLike,
  setComments,
} from "../../modules/Post";

const Comment = () => {
  const { user, userImage, userName, post, tags, content, contentImage, like, comments } =
    useSelector((state) => ({
      user: state.userInfo.user,
      userImage: state.Post.userImage,
      userName: state.Post.userName,
      post: state.Post.post,
      tags: state.Post.tags,
      content: state.Post.content,
      contentImage: state.Post.contentImage,
      like: state.Post.like,
      comments: state.Post.comments,
    }));

  const dispatch = useDispatch();

  const onSetUserImage = (userImage) => dispatch(setUserImage(userImage));
  const onSetUserName = (userName) => dispatch(setUserName(userName));
  const onSetPost = (post) => dispatch(setPost(post));
  const onSetTags = (tags) => dispatch(setTags(tags));
  const onSetContent = (content) => dispatch(setContent(content));
  const onSetContentImage = (contentImage) => dispatch(setContentImage(contentImage));
  const onSetLike = (like) => dispatch(setLike(like));
  const onSetComments = (comments) => dispatch(setComments(comments));

  const [writeComment, setWriteComment] = useState(null);
  const [isModify,setIsModify] = useState(false);
  const [modifyComment,setModifyComment] = useState(null);

  const onChangeWriteComment = (e) => {
    setWriteComment(e.target.value);
  };

  const updateInfo = () => {
    //화면 정보 갱신하기 위해 사용
    var url = window.location.href.split("/");
    var postid = url[6];
    axios({
      method: "get",
      url: "https://i5d104.p.ssafy.io/api/post/" + user.id + "/" + postid,
    })
      .then((response) => {
        onSetUserImage(response.data.data.userImage);
        onSetUserName(response.data.data.userName);
        onSetPost(response.data.data.post);
        onSetTags(response.data.data.tags);
        onSetContent(response.data.data.contents);
        onSetLike(response.data.data.like);
        onSetComments(response.data.data.comments);

        var contentImage = new Array();
        var content_box = response.data.data.contents;

        for (var i = 0; i < content_box.length; i++) {
          contentImage.push(content_box[i].image);
        }

        //이미지 여러장 처리 위해 사용
        onSetContentImage(contentImage);
      })
      .catch((error) => {
        console.error(error);
      })
      .then((response) => {
        onSetUserImage(response.data.data.userImage);
        onSetUserName(response.data.data.userName);
        onSetPost(response.data.data.post);
        onSetTags(response.data.data.tags);
        onSetContent(response.data.data.contents);
        onSetLike(response.data.data.like);
        onSetComments(response.data.data.comments);

        var contentImage = new Array();
        var content_box = response.data.data.contents;

        for (var i = 0; i < content_box.length; i++) {
          contentImage.push(content_box[i].image);
        }

        //이미지 여러장 처리 위해 사용
        onSetContentImage(contentImage);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const submitComment = () => {
    //댓글 작성 함수
    axios({
      method: "post",
      url: "https://i5d104.p.ssafy.io/api/comment",
      data: {
        userid: user.id,
        postid: post.id,
        description: writeComment,
      },
    })
      .then((response) => {
        updateInfo();
      })
      .catch((error) => {
        console.log(error);
      })
      .then((response) => {
        updateInfo();
      })
      .catch((error) => {
        console.log(error);
      });

    setWriteComment("");
  };

  const showModify = (e,description) => {
    console.log("수정");
    setModifyComment(description);
    setIsModify(!isModify);
  };

  const onChangeModifyComment = (e)=>{
    setModifyComment(e.target.value);
  }

  const modifyComments = () =>{
    //작성한 댓글 서버에 보내기
    //userid,postid,description
    axios({
      method:"put",
      url:"http://i5d104.p.ssafy.io/api/comment",
      data:{
        "userid" : user.id,
        "postid" : post.id,
        "description" : modifyComment
      }
    })
    .then((response) =>{
      console.log("성공",response);
      updateInfo();
    })
    .catch((error) =>{
      console.error(error);
    })

  }

  const childComment = () =>{
    console.log("답글 달기");
  }

  const deleteComments = (e, commentid) => {
    e.preventDefault();
    var isDelete = window.confirm("삭제하시겠습니까?");

    if (isDelete == true) {
      axios({
        method: "delete",
        url: "https://i5d104.p.ssafy.io/api/comment/" + commentid,
      })
        .then((response) => {
          updateInfo();
        })
        .catch((error) => {
          console.error(error);
        })
        .then((response) => {
          updateInfo();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    return () => {};
  }, [comments]);

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
          {comments &&
            comments.map((item, index) => {
              return (
                <li className="comment-list-detail" key={index}>
                  <div className="usr-comment-userInfo">
                    <Avatar id="usr-comment-avatar" className="post-avatar" src={item.image} />
                    <p className="usr-comment-username">{item.name}</p>
                    {isModify == false 
                    ?<span className="usr-comment-desc">{item.description}</span>
                    :<input className="usr-comment-desc"type="text" value={modifyComment} onChange={onChangeModifyComment}></input>
                   }
                   {isModify == true?<button onClick={modifyComments}>수정</button>:""}

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
                        <button id="recomment-btn" onClick={childComment}>
                          <p id="recomment">답글 달기</p>
                        </button>
                        {user.nickname == item.name ? (
                          <button id="modify-btn" onClick={(e) =>showModify(e,`${item.description}`)}>
                            <p id="modify">수정</p>
                          </button>
                        ) : (
                          ""
                        )}
                        {user.nickname == item.name ? (
                          <button id="delete-btn" onClick={(e) => deleteComments(e, `${item.id}`)}>
                            <p id="delete">삭제</p>
                          </button>
                        ) : (
                          ""
                        )}
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
