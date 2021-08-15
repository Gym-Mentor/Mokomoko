import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Detail from "./Detail";
// import store from '../../../store/store';

import "../../../css/main/profile/ProfilePost.css";
import { setDetail } from "../../../modules/profileDetail";
import { Link } from "react-router-dom";
import axios from "axios";


const ProfilePost = (/*{ postList, post, number, onSetDetail, onGetDetailNumber, onGetDetail }*/) => {
  const [isDetail, setIsDetail] = useState(false);
  const postList = [];
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
      console.log(response.data.data);
      for(var i=0;i<response.data.data.length;i++){
        console.log(response.data.data[i]);
        var postItem = {
          image : "http://i5d104.p.ssafy.io"+response.data.data[i].image,
          postId : response.data.data[i].post.id,
        }

        postList.push(postItem);
      }

      console.log(postList[0]);
      console.log(postList[1]);
    })
    .catch(function(error){
      console.log(error);
    })

    // onSetDetail(PostList);
    // console.log(postList);

    // console.log("useEffect", number);
    // console.log(number);

    //한박자 씩 늦게 찍힘
    return () => {
      console.log("값이 바뀌거나 컴포넌트 이동되었을 시 ");
      // console.log(post);
    };
  }, [/*number, post*/postList]);

  const showDetail = (e, index) => {
    e.preventDefault();

    setIsDetail((prev) => !prev);
    console.log(isDetail);

    // onGetDetailNumber(index.index);
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
        {postList &&
          postList.map((item, index) => {
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
