import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../css/main/write/Recipe.css";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setContent, setInitValue } from "../../../modules/Food";
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
  // recipeIndex 더하기
  const count = (e) => {
    if (props.first) {
      // 사진을 안넣었으면 다음으로 못가게 막는다.
      if (write.contents[0].media === "") {
        alert("사진이나 영상을 넣어주세요");
        e.preventDefault();
      }
      return;
    }
    let newWrite = Object.assign({}, write);
    newWrite.recipeIndex = write.recipeIndex + 1;
    dispatch(setContent(newWrite));
  };
  // 백엔드와 통신
  const submit = (e) => {
    if (props.first) {
      // 사진을 안넣었으면 다음으로 못가게 막는다.
      if (write.contents.length === 0 || write.contents[0].media === "") {
        alert("사진이나 영상을 넣어주세요");
        e.preventDefault();
      }
      return;
    }
    const data = {
      email: "임시이메일@naver.com",
      contents: write.contents,
      tag: write.tag,
      setting: write.setting,
      isRecipe: write.isRecipe,
    };
    console.log(data);
    // 초기화
    dispatch(setInitValue());
    //axios 통신 후 상세페이지로 이동하게 수정하기!
    props.history.push("/main/feed");
    e.preventDefault();
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
        <span className="food-finish" onClick={props.submit ? submit : count}>
          다음
        </span>
      </Link>
    </header>
  );
};

export default withRouter(FoodHeader);
