import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../css/main/profile/ProfilePost.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { setPostData } from "../../../modules/PostData";
import { setOtherUser } from "../../../modules/OtherUser";
import { Tab, Tabs } from "react-bootstrap";
import AppsIcon from "@material-ui/icons/Apps";
import BookmarkIcon from "@material-ui/icons/Bookmark";
const OtherUserPost = () => {
  const [isDetail, setIsDetail] = useState(false);
  const [postList, setPostList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

  const { user } = useSelector((state) => ({
    user: state.userInfo.user,
  }));
  const { OtherUser } = useSelector((state) => state.OtherUser);
  const { PostData } = useSelector((state) => state.PostData);

  //useDispatch 사용해서 리덕스 스토어의 dispatch를 함수에서 사용할 수 있도록 해준다.
  const dispatch = useDispatch();

  // 스크랩한 목록 불러오기
  // useEffect(() => {
  //   const fetchPostList = async () => {
  //     try {
  //       //요청 시작 시  error와 postList 초기화
  //       setError(null);
  //       setPostList(null);

  //       //loading 상태 true로 바꾸기
  //       setLoading(true);

  //       const response = await axios.get(
  //         "https://i5d104.p.ssafy.io/api/post/user/" + user.id + "/" + user.email
  //       );

  //       console.log(response);
  //       console.log(response.data.data);
  //       setPostList(response.data.data.postInfo);
  //     } catch (e) {
  //       setError(e);
  //     }

  //     setLoading(false);
  //   };
  //   fetchPostList();
  // }, []);

  const showDetail = (e, postid) => {
    e.preventDefault();
    setIsDetail((prev) => !prev);

    console.log(postid);
    //받아온 postid 통해서 GET 으로 정보 얻어오기
    axios({
      url: "https://i5d104.p.ssafy.io/api/post/" + user.id + "/" + postid,
      method: "get",
    })
      .then((response) => {
        dispatch(setPostData(response.data.data));
        history.push({
          pathname: `detailPresenter/${postid}`,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  // if(postList.length == 0) return <div>글을 작성해주세요</div>

  return (
    <div>
      <Tabs
        defaultActiveKey="내 게시물"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="내 게시물" title={<AppsIcon id="grid-icon" fontSize="large" />}>
          <div className="userPost">
            {OtherUser.postInfo &&
              OtherUser.postInfo.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="postGrid"
                    onClick={(e) => showDetail(e, `${item.post.id}`)}
                  >
                    <img className="postImg" src={item.image} />
                  </div>
                );
              })}
          </div>
        </Tab>
        <Tab eventKey="스크랩" title={<BookmarkIcon fontSize="large" />} disabled></Tab>
      </Tabs>
    </div>
  );
};

export default OtherUserPost;
