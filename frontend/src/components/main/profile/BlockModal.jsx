import React from "react";
import "../../../css/main/profile/BlockModal.css";
const BlockModal = ({ showBlockModal }) => {
  return (
    <>
      <div className="background-block" onClick={showBlockModal} />
      <div className="blockList">
        <button className="block-user-btn">차단하기</button>
      </div>
    </>
  );
};

export default BlockModal;
