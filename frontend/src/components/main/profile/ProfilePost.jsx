import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../css/main/profile/ProfilePost.css";
import { Link } from "react-router-dom";
import axios from "axios";
  

const ProfilePost = () => {
  const [isDetail, setIsDetail] = useState(false);
  const [postList, setPostList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useSelector((state) => ({
    user: state.userInfo.user,
  }));


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

  const showDetail = (e, index) => {
    e.preventDefault();

    setIsDetail((prev) => !prev);
    console.log(isDetail);
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <div>
      <div className="userPost">
        {postList &&
          postList.map((item, index) => {
            return (
              <div key={index} className="postGrid" onClick={(e) => showDetail(e, { index })}>
                <Link
                  to={{
                    pathname: `/main/testt/${item.post.id}`,
                    state: {
                      idx: item.post.id,
                    },
                  }}
                > 
                  <img className="postImg" src={item.image} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProfilePost;
