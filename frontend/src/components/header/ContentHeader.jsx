import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import "../../css/header/ContentHeader.css";
import { useHistory, useLocation } from "react-router-dom";

const ContentHeader = (props) => {
  const location = useLocation();
  // 출력할 데이터
  const onClickBack = () => {
    console.log("뒤로 가는거 처리");
    console.log(location.data);
    console.log(props.data);
    if (props.data !== undefined)
      window.history.back({
        data: { ...props.data },
      });
    else {
      window.history.back();
    }
  };

  return (
    <div>
      <div className="headerDiv" onClick={onClickBack}>
        <div className="headerDiv icon">
          <IoIosArrowBack />
        </div>
        <div className="headerDiv title">{props.title}</div>
      </div>
    </div>
  );
};

export default ContentHeader;
