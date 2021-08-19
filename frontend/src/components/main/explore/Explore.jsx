import React, { useState, useEffect } from "react";
import List from "./List";
import FetchMore from "./FetchMore";
import { useSelector, useDispatch } from "react-redux";
import { setIndex } from "../../../modules/MainNav";
import ExploreHeader from "./ExploreHeader";
import "../../../css/main/explore/Explore.css";

import axios from "axios";
import ExHeader from "../../header/ExHeader";
import Loading from "../../util/Loading";
export default function App() {
  // 현재 로그인된 사용자의 정보 받아오기
  const { user } = useSelector((state) => ({ user: state.userInfo.user }));

  const dispatch = useDispatch();

  const onSetIndex = (activeNav) => dispatch(setIndex(activeNav));

  const [page, setPage] = useState(0);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postid, setPostid] = useState(0);
  const [postCheck, setPostCheck] = useState(true);

  // 탐색 피드 받아오기
  useEffect(() => {
    onSetIndex(2);
  }, []);
  useEffect(() => {
    setLoading(true);
    axios({
      method: "post",
      url: "https://i5d104.p.ssafy.io/api/post/explore/",
      data: {
        postid: postid,
        userid: user.id,
      },
    })
      .then((result) => {
        console.log(result);
        console.log(result.data.data);
        let newList = Object.assign([], list);
        console.log(newList);
        newList.push(...result.data.data);
        setList(newList);
        console.log(newList);
        if (result.data.data.length > 0) {
          setPostid(result.data.data[result.data.data.length - 1].post.id);
        } else {
          setPostCheck(false);
        }
      })
      .catch((res) => {
        console.log(res);
      });
    setLoading(false);
  }, [page]);

  return (
    <div className="explore-wrapper">
      <div className="explore-row">
        <div className="explore-col">
          <ExHeader />
          <div id="explore" className={page === 0 && loading ? <Loading /> : ""}>
            <List list={list} />
            {postCheck ? (
              <FetchMore loading={page !== 0 && loading} setPage={setPage} page={page} />
            ) : (
              <span className="no-data-msg">불러올 데이터가 없어요 :) </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
