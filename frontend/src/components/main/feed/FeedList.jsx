import React from "react";
import Post from "./Post";

const FeedList = ({ list }) => {
  console.log(list);
  return (
    <div className="explore-list">
      {list && list.map((item, i) => <Post {...item} key={`item_${i}`} />)}
    </div>
  );
};

export default FeedList;
