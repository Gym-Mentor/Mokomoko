import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../../css/main/feed/FeedNonFollow.css";
import FeedNonFollowList from "./FeedNonFollowList";
const FeedNonFollow = (props) => {
  return (
    <>
      <div className="non-background" onClick={props.showFollowModal} />
      <div className="non-followList">
        <div className="follower-title">
          <p>사용자 추천</p>
        </div>
        <hr className="follower-hr" />
        {props.list.length > 0
          ? props.list.map((item, i) => <FeedNonFollowList {...item} key={`item_${i}`} />)
          : ""}
      </div>
    </>
  );
};

export default FeedNonFollow;
