import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FoodTag from "./FoodTag";
import FoodSetting from "./FoodSetting";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setContent } from "../../../modules/Food";
import "../../../css/main/write/Food.css";

// foodHeader에서 images 값 받아서 출력하기
const FoodText = (props) => {
  const { write } = useSelector(
    (state) => ({
      write: state.Food,
    }),
    shallowEqual
  );
  // dispatch 생성
  const dispatch = useDispatch();

  // 뒤로가기 이벤트
  const goBack = () => {
    props.history.goBack();
  };

  // 백엔드와 통신
  const submit = () => {
    const data = {
      email: "임시이메일@naver.com",
      contents: write.contents,
      tag: write.tag,
      setting: write.setting,
      isRecipe: write.isRecipe,
    };
    console.log(data);
    //axios 통신
  };
  // text onchange event
  const onDescChange = (e) => {
    let newWrite = Object.assign({}, write);
    newWrite.contents[0].desc = e.target.value;
    dispatch(setContent(newWrite));
  };

  return (
    <div className="food-wrapper">
      <div className="food-row">
        <div className="food-col">
          <header className="food-header">
            <span className="food-icon">
              <div className="food-link" onClick={goBack}>
                <FontAwesomeIcon icon="chevron-left" />
              </div>
            </span>
            <span className="food-title">음식 피드 작성</span>
            <span className="food-finish" onClick={submit}>
              다음
            </span>
          </header>
          <div className="food-content">
            <div className="food-top">
              <div className="food-top-border">
                {write.contents[0].isImage ? (
                  <img className="food-top-image" src={write.contents[0].media}></img>
                ) : (
                  <video className="food-top-image" src={write.contents[0].media}></video>
                )}

                <div className="food-top-info">{write.contents.length}장</div>
              </div>
              <textarea
                className="food-desc"
                value={write.contents[0].desc}
                onChange={onDescChange}
                placeholder="내용을 입력해주세요"
              ></textarea>
              <FoodTag></FoodTag>
            </div>
            <div className="food-setting">
              <FoodSetting></FoodSetting>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodText;
