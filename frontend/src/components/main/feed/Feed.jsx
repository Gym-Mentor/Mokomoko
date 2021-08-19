import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIndex } from "../../../modules/MainNav";
import Post from "./Post";
import FeedList from "./FeedList";
import FetchMore from "../explore/FetchMore";
import { Container, Row, Col } from "react-bootstrap";
import Cheader from "../../header/Cheader";
import axios from "axios";
import "../../../css/main/explore/Explore.css";
import FeedNonFollow from "./FeedNonFollow";
const Feed = ({ history }) => {
  const { activeNav, user } = useSelector((state) => ({
    activeNav: state.activeNav,
    user: state.userInfo.user,
  }));
  const [isFollow, setIsFollow] = useState(true);

  const dispatch = useDispatch();

  const onSetIndex = (activeNav) => dispatch(setIndex(activeNav));

  const [page, setPage] = useState(0);
  const [data, setData] = useState();
  const [list, setList] = useState();
  // let list;
  const [loading, setLoading] = useState(false);
  const [postid, setPostid] = useState(0);
  const [postCheck, setPostCheck] = useState(true);
  useEffect(() => {
    onSetIndex(1);
    if (user.nickname == null) {
      console.log(user);
      history.push("/main/settingNick");
    }
    return () => {};
  }, []);

  //피드 받아오기
  useEffect(() => {
    setLoading(true);
    axios({
      method: "post",
      url: "https://i5d104.p.ssafy.io/api/post/main/",
      data: {
        postid: postid,
        userid: user.id,
      },
    })
      .then((result) => {
        console.log(result);
        console.log(result.data.data);
        let newData = Object.assign({}, data);
        console.log(newData);
        newData = result.data.data;
        setData(newData);
        let newList = Object.assign([], list);
        if (newData.mainFeedDto != null) newList.push(...newData.mainFeedDto);
        console.log(newData.mainFeedDto);
        // list = newList;
        setList(newList);
        // console.log(list);
        if (result.data.data.mainFeedDto != null && result.data.data.mainFeedDto.length > 0) {
          setPostid(result.data.data.mainFeedDto[result.data.data.mainFeedDto.length - 1].post.id);
        } else {
          setPostCheck(false);
        }
      })
      .catch((res) => {
        console.log(res);
      });
    setLoading(false);
  }, [page]);
  // useEffect(() => {
  //   return () => {};
  // }, [list]);
  const showFollowModal = () => {
    setIsFollow((prev) => !prev);
  };
  return (
    <div className="explore-wrapper">
      <div className="explore-row">
        <div className="explore-col">
          <Cheader title="피드" />
          <div id="explore" className={page === 0 && loading ? "loading" : ""}>
            {list && <FeedList list={list} />}
            {postCheck ? (
              <FetchMore loading={page !== 0 && loading} setPage={setPage} page={page} />
            ) : !data.type ? (
              isFollow && (
                <FeedNonFollow showFollowModal={showFollowModal} list={data.randomUsers} />
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
