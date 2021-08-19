import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../css/main/Comment.css";
import ContentHeader from "../header/ContentHeader";
import { Avatar } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import axios from "axios";
import { setPostData } from "../../modules/PostData";
import SubdirectoryArrowRightIcon from "@material-ui/icons/SubdirectoryArrowRight";

const CommentPage = () => {
  // 출력할 데이터
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({
    user: state.userInfo.user,
  }));
  const { PostData } = useSelector((state) => state.PostData);
  const [writeComment, setWriteComment] = useState(null);
  const [isModify, setIsModify] = useState(false); //수정 인지 아닌지 확인하기 위해
  const [whichComment, setWhichComment] = useState(null); //수정하는 댓글 몇번 째 댓글인지 확인하기 위해 사용
  const [modifyComment, setModifyComment] = useState(null); //수정한 내용 저장
  const [isRecomment, setIsRecomment] = useState(false);
  const [whichRecomment, setWhichRecomment] = useState(null); //대댓글 몇번 째 인지
  const [recomment, setRecomment] = useState("");

  const [recommentIsModify,setRecommentIsModify] = useState(false); //대댓글 수정 여부
  const [whichRecommentModify,setWhichRecommentModify] = useState(null); //수정하는 대댓글 몇번째
  const [modifyRecomment,setModifyRecomment] = useState(null); //대댓글 수정내용 저장

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
        console.log(response);
        dispatch(setPostData(response.data.data));
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
        postid: PostData.post.id,
        description: writeComment,
      },
    })
      .then((response) => {
        updateInfo();
      })
      .catch((error) => {
        console.log(error);
      });
    // .then((response) => {
    //   updateInfo();
    // })
    // .catch((error) => {
    //   console.log(error);
    // });

    setWriteComment("");
  };
  const showModify = (e, description, index) => {
    console.log("수정");
    setModifyComment(description);
    setIsModify(!isModify);
    setWhichComment(index);
  };

  const onChangeModifyComment = (e) => {
    setModifyComment(e.target.value);
  };

  const modifyComments = (e, index) => {
    //작성한 댓글 서버에 보내기 userid,postid,description
    // console.log(item.id);
    e.preventDefault();
    console.log(index);

    axios({
      method: "put",
      url: "https://i5d104.p.ssafy.io/api/comment",
      data: {
        id: index,
        description: modifyComment,
      },
    })
      .then((response) => {
        console.log("성공", response);
        setIsModify(false);
        setWhichComment(null);
        updateInfo();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // 대댓글
  const showChildComment = (e, index) => {
    setWhichRecomment(index);
    setIsRecomment(!isRecomment);
    setRecomment("");
  };

  const onChangeRecomment = (e) => {
    setRecomment(e.target.value);
  };

  const submitRecomment = (e, index) => {
    axios({
      method: "post",
      url: "https://i5d104.p.ssafy.io/api/child",
      data: {
        userid: user.id,
        commentid: index,
        postid: PostData.post.id,
        description: recomment,
      },
    })
      .then((response) => {
        setIsRecomment(false);
        setRecomment("");
        setWhichRecomment(null);
        updateInfo();
      })
      .catch((error) => {
        console.error("답글 에러", error);
      });
  };

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
        });
    }
  };

  const showReModify = (e,description,index) =>{
    e.preventDefault();
    console.log(description);
    console.log(index);

    setModifyRecomment(description);
    setRecommentIsModify(!recommentIsModify);
    setWhichRecomment(index);
  }

  const onChangeModifyRecomment = (e) =>{
    setModifyRecomment(e.target.value);
  }

  const deleteRecomments = (e,recommentid) =>{

    e.preventDefault();
    var isDelete = window.confirm("삭제하시겠습니까?");

    if (isDelete == true) {
      axios({
        method: "delete",
        url: "https://i5d104.p.ssafy.io/api/child/" + recommentid,
      })
        .then((response) => {
          updateInfo();
        })
        .catch((error) => {
          console.error(error);
        });
    }

  }


  const modifyRecomments = (e,recommentid) =>{
    e.preventDefault();
    console.log(recommentid);

    axios({
      method: "put",
      url: "https://i5d104.p.ssafy.io/api/child",
      data: {
        id: recommentid,
        description: modifyRecomment,
      },
    })
      .then((response) => {
        console.log("성공", response);
        setIsModify(false);
        setWhichComment(null);
        updateInfo();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {

    return () => {};
  }, [PostData.comments]);

  return (
    <div className="comments-wrapper">
      <ContentHeader title="댓글" />
      <div className="type-comment">
        {/* body-comment는 댓글 페이지의 헤더부분 제외한 전반적인 영역 담당 */}
        <div className="comment-type-container">
          {/* container1, 2 는 댓글 작성자의 입력폼 */}
          <div className="comment-type-container2">
            <div className="comment-avatar-container">
              <Avatar id="comment-avatar" className="post-avatar" src={user.image} />
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
          {PostData.comments &&
            PostData.comments.map((item, index) => {
              return (
                <li className="comment-list-detail" key={index}>
                  <div className="usr-comment-userInfo">
                    <Avatar id="usr-comment-avatar" className="post-avatar" src={item.image} />
                    <p className="usr-comment-username">{item.name}</p>
                    {isModify && whichComment == index ? (
                      <input
                        className="usr-comment-desc"
                        type="text"
                        value={modifyComment}
                        onChange={onChangeModifyComment}
                      ></input>
                    ) : (
                      <span className="usr-comment-desc">{item.description}</span>
                    )}
                    {isModify && whichComment == index ? (
                      <button onClick={(e) => modifyComments(e, `${item.id}`)}>수정</button>
                    ) : (
                      ""
                    )}
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
                        <button id="recomment-btn" onClick={(e) => showChildComment(e, `${index}`)}>
                          <p id="recomment">답글 달기</p>
                        </button>
                        {user.nickname == item.name ? (
                          <button
                            id="modify-btn"
                            onClick={(e) => showModify(e, `${item.description}`, `${index}`)}
                          >
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

                  {/*답글 작성 띄우기 */}
                  {isRecomment && whichRecomment == index ? (
                    <div className="usr-recomment">
                      <div className="user-recomment-arrow">
                        <SubdirectoryArrowRightIcon fontSize="large" />
                      </div>
                      <div className="user-recomment-input">
                        <textarea
                          type="textarea"
                          id="comment-ipt"
                          name="commenttext"
                          placeholder="대댓글 달기"
                          value={recomment}
                          onChange={onChangeRecomment}
                        ></textarea>
                        <button
                          type="submit"
                          className="comment-btn"
                          onClick={(e) => {
                            submitRecomment(e, `${item.id}`);
                          }}
                        >
                          <CheckCircleIcon />
                        </button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}


                  {/* 답글 목록 */}
                  <ul className="recomment-list">
                    {item.childComment != null?
                    <div>
                      {item.childComment.map((child,idx) =>{
                        return(
                          <li className="recomment-list-detail" key={idx}>
                          <div className="usr-recomment-userInfo">
                            <Avatar id="usr-recomment-avatar" className="post-avatar" src={child.image} />
                            <p className="usr-recomment-username">{child.name}</p>
                            <span className="usr-recomment-commentname"><b>@{item.name}</b></span>
                            {/* 수정 부분 */}
                            {recommentIsModify && whichRecommentModify == idx ?(
                             <input className="usr-recomment-desc"
                              type="text"
                              value={modifyRecomment}
                              onChange={onChangeModifyRecomment}
                             /> 
                            )
                            :(
                              <span className="usr-recomment-desc">{child.description}</span>
                            )
                            }
                            {recommentIsModify && whichRecommentModify == idx ?(
                              <button onClick = {(e) => modifyRecomments(e,`${child.id}`)}>수정</button>
                            ):""}
                          </div>
                          <div className="usr-recomment-like">
                          <FavoriteBorderIcon id="recomment-like" />
                          </div>
                          <div className="usr-recomment-footer">
                            <div className="comment-likecnt-cont">
                            <a href="#" id="comment-likecnt">
                            <p id="comment-likecnt-desc">좋아요 30개</p></a>
                            </div>
                            <div className="recomment-footer-recomment-cont">
                              <div className="recomment-footer-re">
                                {user.nickname == child.name ? (
                                  <button id="re-modify-btn" onClick={(e) =>showReModify(e,`${child.description}`,`${idx}`)}>
                                    <p id="reModify">수정</p>
                                  </button>
                                ):""}
                                {user.nickname == child.name ?(
                                  <button id="re-delete-btn" onClick={(e)=> deleteRecomments(e,`${child.id}`)}>
                                    <p id="reDelete">삭제</p>
                                  </button>
                                ):""}
                              </div>
                            </div>
                          </div>
                        </li>
                        );
                      })}
                    </div>
                    :""}
                  </ul>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export default CommentPage;
