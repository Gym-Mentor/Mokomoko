import React, { useState, useEffect } from "react";
import List from "./List";
import FetchMore from "./FetchMore";
import { useSelector, useDispatch } from "react-redux";
import { setIndex } from "../../../modules/MainNav";
// import { getUserInfo, setUserInfo } from "../../../modules/userInfo";
import ExploreHeader from "./ExploreHeader";
// import jQuery from "jquery";
import "../../../css/main/explore/Explore.css";
// test 이미지
import image1 from "../../../img/햄버거1.jpg";
import image2 from "../../../img/햄버거2.jpg";
import image3 from "../../../img/햄버거3.jpg";
import axios from "axios";
export default function App() {
  // 현재 로그인된 사용자의 정보 받아오기
  const { user } = useSelector((state) => ({ user: state.userInfo.user }));

  const dispatch = useDispatch();
  // const onSetUserInfo = (userInfo) => dispatch(setUserInfo(userInfo));

  // const [userInfo, SetUserInfo] = useState(user);

  const onSetIndex = (activeNav) => dispatch(setIndex(activeNav));

  const [page, setPage] = useState(0);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  var postId = 0;
  console.log(postId);
  // 탐색 피드 받아오기
  useEffect(() => {
    onSetIndex(2);
  });
  useEffect(() => {
    setLoading(true);
    // let list = [
    //   { url: image1, isImage: true },
    //   { url: image2, isImage: true },
    //   { url: image3, isImage: true },
    //   { url: image1, isImage: true },
    //   { url: image2, isImage: true },
    //   { url: image3, isImage: true },
    //   { url: image1, isImage: true },
    //   { url: image2, isImage: true },
    //   { url: image3, isImage: true },
    //   { url: image1, isImage: true },
    //   { url: image2, isImage: true },
    //   { url: image3, isImage: true },
    // ];
    axios({
      method: "post",
      url: "http://i5d104.p.ssafy.io:8080/post/explore/",
      data: {
        postId: postId,
        block: user.block,
      },
    })
      .then((result) => {
        console.log(result);
        console.log(result.data);
        list = result.data;
      })
      .catch((res) => {
        console.log(res);
      });
    setList((prev) => [...prev, ...list]);
    setLoading(false);
  }, [page]);

  return (
    <div className="explore-wrapper">
      <div className="explore-row">
        <div className="explore-col">
          <ExploreHeader />
          <div id="explore" className={page === 0 && loading ? "loading" : ""}>
            <List list={list} />
            <FetchMore loading={page !== 0 && loading} setPage={setPage} />
          </div>
        </div>
      </div>
    </div>
  );
}
