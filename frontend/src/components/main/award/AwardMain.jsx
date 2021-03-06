import React, { useEffect, useState } from "react";
import AwardUser from "./AwardUser";
import AwardTag from "./AwardTag";
import AwardPost from "./AwardPost";

import "../../../css/award/AwardMain.css";
import Cheader from "../../header/Cheader";
import { useSelector } from "react-redux";
import axios from "axios";

const AwardMain = () => {
  const [userList, setUserList] = useState();
  const [tagList, setTagList] = useState();
  const [postList, setPostList] = useState();
  const { user } = useSelector((state) => ({
    user: state.userInfo.user,
  }));
  useEffect(() => {
    axios({
      url: "https://i5d104.p.ssafy.io/api/rank/" + user.id,
      method: "get",
    })
      .then(({ data }) => {
        console.log(data);
        let newList = Object.assign([], userList);
        newList = data.data.users;
        setUserList(newList);

        let newTag = Object.assign([], tagList);
        newTag = data.data.tags;
        setTagList(newTag);

        let newPost = Object.assign([], postList);
        newPost = data.data.postInfos;
        setPostList(newPost);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    return () => {};
  }, [userList, tagList, postList]);

  console.log(userList);
  console.log(tagList);
  console.log(postList);
  return (
    <div>
      <div className="awardMain-wrapper">
        <div className="awardMain-row">
          <div className="awardMain-col">
            <div className="awardMain-header">
              <Cheader title="명예의 전당" />
            </div>
            <div className="awardMain-content">
              <br />
              {userList === undefined ? "" : <AwardUser userList={userList} />}
              {tagList === undefined ? "" : <AwardTag tagList={tagList} />}
              {postList === undefined ? "" : <AwardPost postList={postList} />}
              {/* <AwardTag tagList={tagList} /> */}
              {/* <AwardPost postList={postList} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardMain;
