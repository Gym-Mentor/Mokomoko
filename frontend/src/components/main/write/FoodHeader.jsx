import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../css/main/write/Recipe.css";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setContent } from "../../../modules/Food";
// 헤더 컴포넌트
const FoodHeader = (props) => {
  const { navigation } = props;
  const { next } = props;
  const { write } = useSelector(
    (state) => ({
      write: state.Food,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // 받은 사진 순서로 배열을 만든다.
  const submit = (e) => {
    // 사진을 안넣었으면 다음으로 못가게 막는다.
    if (write.temp[0].media === "") {
      alert("사진이나 영상을 넣어주세요");
      e.preventDefault();
    }
    // 사용자가 지정한 순서대로 새로운 배열을 만든다.
    let temp = [];
    for (let i = 0; i < write.temp.length; i++) {
      for (let j = 0; j < write.temp.length; j++) {
        if (write.imgArr[j] === i) {
          temp.push(write.temp[j]);
          break;
        }
      }
    }
    let newWrite = Object.assign({}, write);
    newWrite.contents = temp;
    dispatch(setContent(newWrite));
  };
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
        }}
        className="food-link"
      >
        <span className="food-finish" onClick={submit}>
          다음
        </span>
      </Link>
    </header>
  );
};

export default FoodHeader;
