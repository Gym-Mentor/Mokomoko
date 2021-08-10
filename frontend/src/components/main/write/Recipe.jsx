import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FoodHeader from "./FoodHeader";
import "../../../css/main/write/Food.css";
// 다음 버튼을 누르면 현재 이미지 정렬해서 state넘겨주기
// 컴포넌트 바꾸기
// 동영상 넣기
const Recipe = ({ history }) => {
  const [detailImgs, setDetailImgs] = useState([
    {
      file: "",
      type: "image",
    },
  ]); // 사용자가 선택한 이미지 배열 state
  const [nowImage, setNowImage] = useState(0); // 현재 선택된 이미지 인덱스를 저장하는 state
  const [imgArr, setImgArr] = useState([]); // 이미지 순서를 저장할 배열 state
  const handleImageUpload = (e) => {
    const fileArr = e.target.files;

    let fileURLs = [];
    let fileIdx = [];
    let file;
    let filesLength = fileArr.length > 12 ? 12 : fileArr.length;
    for (let i = 0; i < filesLength; i++) {
      file = fileArr[i];
      fileIdx[i] = i;
      fileURLs[i] = {
        file: file,
        type: file.type.includes("video") ? "video" : "image",
      };
      let reader = new FileReader();
      reader.onload = () => {
        fileURLs[i].file = reader.result;
        setNowImage(i);
        setImgArr([...fileIdx]);
        setDetailImgs([...fileURLs]);
      };
      reader.readAsDataURL(file);
    }
  };
  // };
  // 3가지 기능 수행
  // 사진 클릭하면 메인화면 변환, 사진 두번 클릭하면 이미지 배열에서 삭제, 이미지 배열에 없는 사진 클릭하면 배열에 넣기
  const handleImageClick = (idx) => {
    const idxValue = imgArr[idx];

    let tempLength = 0;
    for (let i = 0; i < imgArr.length; i++) {
      if (imgArr[i] !== null) {
        tempLength++;
      }
    }

    let newImgArr = Object.assign([], imgArr); // imgArr 배열 복사
    // 현재 배열에 없으면 추가
    if (idxValue === null) {
      newImgArr[idx] = tempLength; // 배열의 마지막 순서로 추가
      setImgArr(newImgArr);
      setNowImage(idx);
    } else {
      // 현재 배열에 있으면
      // 현재 선택되지 않았다면 선택
      if (nowImage !== idx) {
        setNowImage(idx);
      } else {
        // 현재 이미지가 선택되어있고 한번 더 누를 경우에 삭제
        let max = 0; //
        for (let i = 0; i < imgArr.length; i++) {
          if (newImgArr[i] > idxValue) {
            // 현재 삭제한 순서보다 큰 순서를 모두 1씩 감소
            newImgArr[i]--;
          }
          if (newImgArr[i] !== idxValue && newImgArr[i] !== null) {
            // 순서에 포함되어있는 가장 큰 인덱스 번호 찾기
            max = Math.max(max, i);
          }
        }
        newImgArr[idx] = null;
        setNowImage(max);
        setImgArr(newImgArr);
      }
    }
  };
  // 똑같은 사진을 넣었을 때 onChange를 적용하기위해 input의 값을 초기화
  const handleUploadClick = (e) => {
    e.target.value = null;
  };
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="food-wrapper">
      <div className="food-row">
        <div className="food-col">
          <FoodHeader
            navigation={{ goBack: () => goBack() }}
            next="/main/writeFoodText"
            data={{
              imgArr: imgArr,
              detailImgs: detailImgs,
            }}
          ></FoodHeader>
          <div className="food-content">
            <div className="food-image-border">
              {detailImgs[nowImage].type === "image" ? (
                <img className="food-image" src={detailImgs[nowImage].file}></img>
              ) : (
                <video className="food-video" src={detailImgs[nowImage].file} controls></video>
              )}
            </div>
            <div className="food-filebox">
              <label htmlFor="food-file">
                <FontAwesomeIcon icon="images" />
              </label>
              <input
                type="file"
                id="food-file"
                multiple
                accept="image/jpg,image/png,image/jpeg,image/gif,video/*"
                onChange={handleImageUpload}
                onClick={handleUploadClick}
              />
            </div>

            {detailImgs[0].file !== "" &&
              detailImgs.map((content, idx) => (
                <div className="food-border" onClick={handleImageClick.bind(this, idx)} key={idx}>
                  {content.type === "image" ? (
                    <img
                      className={idx === nowImage ? "food-images food-selected" : "food-images"}
                      src={content.file}
                    ></img>
                  ) : (
                    <video
                      className={idx === nowImage ? "food-images food-selected" : "food-images"}
                      src={content.file}
                    ></video>
                  )}

                  <div className={imgArr[idx] !== null ? "food-item-selected" : "food-item"}>
                    {imgArr[idx] == null ? null : imgArr[idx] + 1}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
