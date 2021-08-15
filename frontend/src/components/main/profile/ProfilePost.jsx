import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Detail from "./Detail";
// import store from '../../../store/store';

import "../../../css/main/profile/ProfilePost.css";
import { setDetail } from "../../../modules/profileDetail";
import { Link } from "react-router-dom";
import axios from "axios";

const PostList = [
  {
    img: "https://i.pinimg.com/originals/20/27/3b/20273b98f34d8d467b906fb5a17bd939.jpg",
    content: "재밌다1",
    date: "2021-07-27",
    path: "/test",
  },
  {
    img: "https://i.pinimg.com/originals/20/27/3b/20273b98f34d8d467b906fb5a17bd939.jpg",
    content: "재밌다2",
    date: "2021-07-27",
    path: "/test",
  },
  {
    img: "https://i.pinimg.com/originals/20/27/3b/20273b98f34d8d467b906fb5a17bd939.jpg",
    content: "재밌다3",
    date: "2021-07-27",
    path: "/test",
  },
  {
    img: "https://i.pinimg.com/564x/fa/e3/50/fae3500cc623c6b6051f33ef2dda9205.jpg",
    content: "재밌다4",
    date: "2021-07-27",
    path: "/test",
  },
];

const ProfilePost = ({ postList, post, number, onSetDetail, onGetDetailNumber, onGetDetail }) => {
  const [isDetail, setIsDetail] = useState(false);
  
  const { user } = useSelector((state) => ({
    user: state.userInfo.user,
  }));


  useEffect(() => {
    axios({
      method : "get",
      url: "http://i5d104.p.ssafy.io:8080/post/user/"+user.email,
    })
    .then(function(response){
      console.log(response);
      console.log(response.data.post);
    })
    .catch(function(error){
      console.log(error);
    })

    onSetDetail(PostList);
    console.log(postList);

    console.log("useEffect", number);
    console.log(number);

    //한박자 씩 늦게 찍힘
    return () => {
      console.log("값이 바뀌거나 컴포넌트 이동되었을 시 ");
      console.log(post);
    };
  }, [number, post]);

  const showDetail = (e, index) => {
    e.preventDefault();

    setIsDetail((prev) => !prev);
    console.log(isDetail);

    onGetDetailNumber(index.index);
    // onGetDetail(index.index);
    // store.dispatch({type:'SHOW_PROFILE_DETAIL', item: detail})
    // if(!isDetail){
    //   history.pushState({},'main/profile/detail');
    // }

    // location.href(`/mian/detail/${index}`);
  };

  return (
    <div>
      <div className="userPost" on>
        {PostList &&
          PostList.map((item, index) => {
            return (
              <div key={index} className="postGrid" onClick={(e) => showDetail(e, { index })}>
                <Link
                  to={{
                    pathname: `/main/testt/${index}`,
                    state: {
                      idx: index,
                      item: postList[index],
                    },
                  }}
                >
                  <img className="postImg" src={item.img} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProfilePost;
