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
  const [tagList, setTagList] = useState([]);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios({
      url: "https://i5d104.p.ssafy.io/api/rank",
      method: "get",
    })
      .then(({ data }) => {
        let newList = Object.assign([], userList);
        console.log(newList);
        newList = data.data.users;
        setUserList(newList);
        // console.log("data", data);
        console.log("data.users", data.data.users);
        // setUserList(data.data.users);
        // setTagList(data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    return () => {};
  }, [userList]);

  console.log(userList);
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
              <AwardTag tagList={tagList} />
              <AwardPost postList={postList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardMain;
