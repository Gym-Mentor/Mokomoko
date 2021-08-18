import React from "react";
import axios from "axios";
import { useSelector, useDispatch, useHistory } from "react-redux";
const Item = ({ image, post }) => {
  const { user } = useSelector((state) => ({
    user: state.userInfo.user,
  }));
  let history = useHistory();
  const showDetail = () => {
    console.log(post.id);
    //받아온 postid 통해서 GET 으로 정보 얻어오기
    axios({
      url: "https://i5d104.p.ssafy.io/api/post/" + user.id + "/" + post.id,
      method: "get",
    })
      .then((response) => {
        console.log(response);
        history.push({
          pathname: `testt/${post.id}`,
          data: response.data.data,
        });
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
      <img className="element-media-content" src={image} onClick={showDetail} />

      {/* ) : (
        <video className="element-media-content" src={url}></video>
      )} */}
    </div>
  );
};

export default Item;
