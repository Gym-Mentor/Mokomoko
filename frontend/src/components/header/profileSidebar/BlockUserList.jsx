import React from "react";
import BlockUserItem from "./BlockUserItem";
const BlockUserList = ({ list, onRemoveUser }) => {
  return (
    <div className="follow-list">
      {list.map((item, i) => (
        <BlockUserItem {...item} key={`item_${i}`} onRemoveUser={() => onRemoveUser()} />
      ))}
      {list.length === 0 ? <div className="follower-title">사용자 목록이 없습니다.</div> : ""}
    </div>
  );
};

export default BlockUserList;
