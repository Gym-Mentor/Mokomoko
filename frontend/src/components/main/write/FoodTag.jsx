import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../css/main/write/Food.css";
// 태그 누르면 링크로 이동하게
// 태그 가로로 정렬
// 5개 이상이면 +버튼 안뜨게
// +버튼에 모달창 띄우기
const FoodTag = (props) => {
  const onTagChange = () => {
    let newTag = Object.assign([], props.tag);
    newTag.push({ title: "title", url: "www.naver.com" });
    props.onTagChange(newTag);
    console.log(props.tag);
  };
  return (
    <div className="food-tag-wrap">
      {props.tag.map((item, index) => (
        <div className="food-tag" key={index}>
          <a href={"https://" + item.url} target="_blank" rel="noopener noreferrer">
            {/* Tabnabbing 피싱 공격을 예방하기 위해 rel 속성 부여 */}
            <button type="button" className="btn btn-primary btn-xs food-tag-btn">
              {item.title}
            </button>
          </a>
        </div>
      ))}
      <div className="food-tag-create">
        <FontAwesomeIcon
          icon="plus"
          className="food-create-icon"
          onClick={onTagChange}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default FoodTag;
