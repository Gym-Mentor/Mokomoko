import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../css/main/profile/ProfilePost.css";
import { Link, useHistory } from "react-router-dom";
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
} from "../../../modules/Post";

import { setPostData } from "../../../modules/PostData";
import PostNone from "./PostNone";

const ProfilePost = () => {
  const [isDetail, setIsDetail] = useState(false);
  const [postList, setPostList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

  const { user, userImage, userName, post, tags, content, contentImage, like, comments } =
    useSelector((state) => ({
      user: state.userInfo.user,
    }));

  const { PostData } = useSelector((state) => state.PostData);

  //useDispatch 사용해서 리덕스 스토어의 dispatch를 함수에서 사용할 수 있도록 해준다.
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        //요청 시작 시  error와 postList 초기화
        setError(null);
        setPostList(null);

        //loading 상태 true로 바꾸기
        setLoading(true);

        const response = await axios.get(
          "https://i5d104.p.ssafy.io/api/post/user/" + user.id + "/" + user.id
        );

        console.log(response);
        console.log(response.data.data);
        setPostList(response.data.data.postInfo);
      } catch (e) {
        setError(e);
      }

      setLoading(false);
    };
    fetchPostList();
  }, []);

  const showDetail = (e, postid) => {
    e.preventDefault();

    //redux초기화
    // onSetUserImage("");
    // onSetUserName("");
    // onSetPost({});
    // onSetTags([]);
    // onSetContent([]);
    // onSetContentImage([]);
    // onSetLike(false);
    // onSetComments([]);

    setIsDetail((prev) => !prev);

    console.log(postid);
    //받아온 postid 통해서 GET 으로 정보 얻어오기
    axios({
      url: "https://i5d104.p.ssafy.io/api/post/" + user.id + "/" + postid,
      method: "get",
    })
      .then((response) => {
        console.log(response);

        // onSetUserImage(response.data.data.userImage);
        // onSetUserName(response.data.data.userName);
        // onSetPost(response.data.data.post);
        // onSetTags(response.data.data.tags);
        // onSetContent(response.data.data.contents);
        // onSetLike(response.data.data.like);
        // onSetComments(response.data.data.comments);

        console.log(response.data.data.comments);

        // var contentImage = new Array();
        // var content_box = response.data.data.contents;

        // for (var i = 0; i < content_box.length; i++) {
        //   contentImage.push(content_box[i].image);
        // }

        // //이미지 여러장 처리 위해 사용
        // onSetContentImage(contentImage);

        console.log(response);
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
  // if (postList == null || postList.length == 0) return <PostNone />;

  return (
    <div>
      <div className="userPost">
        {postList &&
          postList.map((item, index) => {
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
    </div>
  );
};

export default ProfilePost;
