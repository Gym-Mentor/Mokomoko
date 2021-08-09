import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FoodTag from "./FoodTag";
import FoodSetting from "./FoodSetting";
import "../../../css/main/write/Food.css";

// foodHeader에서 images 값 받아서 출력하기
const FoodText = (props) => {
  const [desc, setDesc] = useState();
  const [tag, setTag] = useState([]);
  const [setting, setSetting] = useState({
    like: true,
    comment: true,
  });
  const goBack = () => {
    props.history.goBack();
  };
  const write = () => {
    // 이메일 받아서 수정하기
    let contents = [];
    for (let i = 0; i < props.location.state.images.length; i++) {
      contents.push({
        images: props.location.state.images[i],
        desc: desc,
      });
    }
    const data = {
      email: "임시이메일@naver.com",
      contents: contents,
      tag: tag,
      setting: setting,
      type: 0,
    };
    console.log(data);
    //axios 통신
  };
  // text onchange event
  const onDescChange = (e) => {
    setDesc(e.target.value);
  };
  const onTagChange = (value) => {
    setTag(value);
  };
  const onSettingChange = (value) => {
    setSetting(value);
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
            <span className="food-finish" onClick={write}>
              다음
            </span>
          </header>
          <div className="food-content">
            <div className="food-top">
              <div className="food-top-border">
                {props.location.state.images[0].type === "image" ? (
                  <img className="food-top-image" src={props.location.state.images[0].file}></img>
                ) : (
                  <video
                    className="food-top-image"
                    src={props.location.state.images[0].file}
                  ></video>
                )}

                <div className="food-top-info">{props.location.state.images.length}장</div>
              </div>
              <textarea
                className="food-desc"
                value={desc}
                onChange={onDescChange}
                placeholder="내용을 입력해주세요"
              ></textarea>
              <FoodTag tag={tag} onTagChange={onTagChange}></FoodTag>
            </div>
            <div className="food-setting">
              <FoodSetting setting={setting} onSettingChange={onSettingChange}></FoodSetting>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodText;
