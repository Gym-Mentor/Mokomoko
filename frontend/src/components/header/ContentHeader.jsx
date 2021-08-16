import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import "../../css/header/ContentHeader.css";

const ContentHeader = (props) => {
  const onClickBack = () => {
    console.log("뒤로 가는거 처리");
    window.history.back();
  };
  return (
    <div>
      <div className="headerDiv">
        <div className="headerDiv icon">
          <IoIosArrowBack onClick={onClickBack} />
        </div>
        <div className="headerDiv title">{props.title}</div>
      </div>
    </div>
  );
};

export default ContentHeader;
