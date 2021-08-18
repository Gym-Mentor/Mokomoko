import React from "react";
import Post from "./Post";

const FeedList = ({ list }) => {
  return (
    <div className="explore-list">
      {list.map((item, i) => (
        <Post {...item} key={`item_${i}`} />
      ))}
    </div>
  );
};

export default FeedList;
