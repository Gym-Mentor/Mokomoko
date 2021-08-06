import React from "react";
import Switch from "react-switch";

const FoodSetting = (props) => {
  // 부모 컴포넌트에서 얻은 props의 like의 반대값으로 세팅한다.
  const onLikeChange = () => {
    let newTemp = Object.assign({}, props.setting);
    newTemp.like = !newTemp.like;
    props.onSettingChange(newTemp);
  };
  // 부모 컴포넌트에서 얻은 props의 comment의 반대값으로 세팅한다.
  const onCommentChange = () => {
    let newTemp = Object.assign({}, props.setting);
    newTemp.comment = !newTemp.comment;
    props.onSettingChange(newTemp);
  };
  return (
    <div>
      <div className="food-setting-header">설정</div>
      <div className="food-setting-body">
        <div className="food-setting-title">좋아요 표시하기</div>
        <div className="food-setting-toggle">
          <Switch onChange={onLikeChange} checked={props.setting.like} />
        </div>
      </div>
      <div className="food-setting-body">
        <div className="food-setting-title">댓글 표시하기</div>
        <div className="food-setting-toggle">
          <Switch onChange={onCommentChange} checked={props.setting.comment} />
        </div>
      </div>
    </div>
  );
};

export default FoodSetting;
