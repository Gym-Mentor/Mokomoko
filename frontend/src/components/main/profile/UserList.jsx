import React from "react";
import FollowerProfile from "./FollowerProfile";
const UserList = ({ list, onRemoveUser }) => {
  return (
    <div className="follow-list">
      {list.map((item, i) => (
        <FollowerProfile {...item} key={`item_${i}`} onRemoveUser={() => onRemoveUser()} />
      ))}
      {list.length === 0 ? <div className="follower-title">사용자 목록이 없습니다.</div> : ""}
    </div>
  );
};

export default UserList;
