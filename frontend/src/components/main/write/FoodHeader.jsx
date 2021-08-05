import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../css/main/write/Recipe.css";
import { useEffect } from "react";

// 헤더 컴포넌트
const FoodHeader = (props) => {
  const { navigation } = props;
  const { next } = props;
  const { data } = props;
  const [images, setImages] = useState([]);
  // 받은 사진 순서로 배열을 만든다.
  useEffect(() => {
    if (data.detailImgs === undefined) return;
    let temp = [];
    for (let i = 0; i < data.detailImgs.length; i++) {
      for (let j = 0; j < data.detailImgs.length; j++) {
        if (data.imgArr[j] === i) {
          temp.push(data.detailImgs[j]);
          break;
        }
      }
    }
    setImages(temp);
  }, [data]);
  return (
    <header className="food-header">
      <span className="food-icon">
        <div className="food-link" onClick={navigation.goBack}>
          <FontAwesomeIcon icon="chevron-left" />
        </div>
      </span>
      <span className="food-title">음식 피드 작성</span>
      <Link
        to={{
          pathname: next,
          state: {
            images: images,
          },
        }}
        className="food-link"
      >
        <span className="food-finish">다음</span>
      </Link>
    </header>
  );
};

export default FoodHeader;
