import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../css/main/profile/ProfilePost.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { setContent, setPost, setTags, setUserImage, setUserName } from "../../../modules/Post";
  

const ProfilePost = () => {
  const [isDetail, setIsDetail] = useState(false);
  const [postList, setPostList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

  const { user,userImage,userName,post,tags,content } = useSelector((state) => ({
    user: state.userInfo.user,
    userImage : state.Post.userImage,
    userName : state.Post.userName,
    post : state.Post.post,
    tags : state.Post.tags,
    content : state.Post.content,
  }));

    //useDispatch 사용해서 리덕스 스토어의 dispatch를 함수에서 사용할 수 있도록 해준다.
    const dispatch = useDispatch();

    const onSetUserImage = (userImage) => dispatch(setUserImage(userImage));
    const onSetUserName = (userName) => dispatch(setUserName(userName));
    const onSetPost = (post) => dispatch(setPost(post));
    const onSetTags = (tags) => dispatch(setTags(tags));
    const onSetContent = (content) => dispatch(setContent(content));
  


  useEffect(() => {
    
    const fetchPostList = async () =>{
      try{
        //요청 시작 시  error와 postList 초기화
        setError(null);
        setPostList(null);

        //loading 상태 true로 바꾸기
        setLoading(true);

        const response = await axios.get("http://i5d104.p.ssafy.io:8080/post/user/"+user.email);

        console.log(response.data.data);
        setPostList(response.data.data);
      }catch(e){
        setError(e);
      }

      setLoading(false);
    }
    fetchPostList();

  }, []);

  const showDetail = (e, postid) => {
    e.preventDefault();

    //redux초기화
    onSetUserImage("");
    onSetUserName("");
    onSetPost({});
    onSetTags([]);
    onSetContent([]);

    setIsDetail((prev) => !prev);
    
    console.log(postid);
    //받아온 postid 통해서 GET 으로 정보 얻어오기
    axios({
      url :"http://i5d104.p.ssafy.io:8080/post/"+postid,
      method: "get",
    })
    .then((response) => {
      console.log(response);
      onSetUserImage(response.data.data.userImage);
      onSetUserName(response.data.data.userName);
      onSetPost(response.data.data.post);
      onSetTags(response.data.data.tags);
      onSetContent(response.data.data.contents);

    })
    .catch((error) =>{
      console.log(error);
    });

    history.push(`testt/${postid}`);

  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <div>
      <div className="userPost">
        {postList &&
          postList.map((item, index) => {
            return (
              <div key={index} className="postGrid" onClick={(e) => showDetail(e, `${item.post.id}`)}>
                  <img className="postImg" src={item.image} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProfilePost;
