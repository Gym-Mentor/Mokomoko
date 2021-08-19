import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setPostData } from "../../../modules/PostData";

const Item = ({ image, post }) => {
  // 출력할 데이터
  const dispatch = useDispatch();
  // 출력할 데이터
  const { user } = useSelector((state) => ({
    user: state.userInfo.user,
  }));
  const { PostData } = useSelector((state) => state.PostData);
  let history = useHistory();
  const showDetail = () => {
    console.log(post.id);
    //받아온 postid 통해서 GET 으로 정보 얻어오기
    axios({
      url: "https://i5d104.p.ssafy.io/api/post/" + user.id + "/" + post.id,
      method: "get",
    })
      .then((response) => {
        dispatch(setPostData(response.data.data));
        history.push({
          pathname: `detailPresenter/${post.id}`,
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
      {image.charAt(image.length - 1) == 4 ? (
        <video className="element-media-content">
          <source src={image} type="video/mp4" />
        </video>
      ) : (
        <img className="element-media-content" src={image} onClick={showDetail} />
      )}

      {/* ) : (
        <video className="element-media-content" src={url}></video>
      )} */}
    </div>
  );
};

export default Item;
