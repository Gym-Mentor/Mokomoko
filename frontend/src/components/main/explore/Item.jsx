import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
const Item = ({ image, post }) => {
  const { user } = useSelector((state) => ({
    user: state.userInfo.user,
  }));
  const showDetail = (e, postid) => {
    e.preventDefault();
    //받아온 postid 통해서 GET 으로 정보 얻어오기
    axios({
      url: "https://i5d104.p.ssafy.io/api/post/" + user.id + "/" + postid,
      method: "get",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    // history.push(`testt/${postid}`);
  };
  // const onImageClick = (id) => {
  //   console.log(id);
  // };
  return (
    <div className="element-media-border">
      {/* {isImage ? ( */}
      <img className="element-media-content" src={image} onClick={(post) => showDetail(post.id)} />

      {/* ) : (
        <video className="element-media-content" src={url}></video>
      )} */}
    </div>
  );
};

export default Item;
