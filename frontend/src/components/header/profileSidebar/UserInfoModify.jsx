import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, setUserInfo } from "../../../modules/userInfo";
import { IoIosArrowBack } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import userImg from "../../../img/user_image.png";
import "../../../css/header/profileSidebar/UserInfoModify.css";
import axios from "axios";

// 프로필 이미지 바꾸기, 사용자 정보 바꾸기 백엔드 완성되면 직접해보기
// 탐색 페이지 완성하기 (백엔드랑 연결하기)
// 글작성 버그 고치기(session)
const UserInfoModify = () => {
  // 현재 로그인된 사용자의 정보 받아오기
  const { user } = useSelector((state) => ({ user: state.userInfo.user }));

  const dispatch = useDispatch();
  const onSetUserInfo = (userInfo) => dispatch(setUserInfo(userInfo));

  const [userInfo, SetUserInfo] = useState(user);

  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState("");

  // 뒤로가기
  const goBack = () => {
    window.history.back();
  };

  // 사진이 수정될 때 호출 -> 임시로 담고있는 유저정보의 사진을 바꿔줌
  const handleImageUpload = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      // 백엔드에 넘겨주는 실제파일
      setFile(file);
      // 임시로 담고있는 유저정보의 image 수정
      let newUserInfo = Object.assign({}, userInfo);
      newUserInfo.image = file;
      SetUserInfo(newUserInfo);
      // 프로필에 실제로 보이는 이미지
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // 닉네임이 수정될 때 호출 -> 임시로 담고있는 유저정보의 nickname을 바꿔줌
  const onNicknameChange = (e) => {
    let newUserInfo = Object.assign({}, userInfo);
    newUserInfo.nickname = e.target.value;
    SetUserInfo(newUserInfo);
  };

  // 소개가 수정될 때 호출 -> 임시로 담고있는 유저정보의 소개를 바꿔줌
  const onIntroduceChange = (e) => {
    let newUserInfo = Object.assign({}, userInfo);
    newUserInfo.introduce = e.target.value;
    SetUserInfo(newUserInfo);
  };

  // 이미지 없애기
  const handleImageRemove = () => {
    // 백엔드에 넘겨주는 실제파일
    setFile("");
    // 임시로 담고있는 유저정보의 image 수정
    let newUserInfo = Object.assign({}, userInfo);
    newUserInfo.image = "";
    SetUserInfo(newUserInfo);
    // 프로필에 실제로 보이는 이미지
    setPreviewURL("/profileImg/user_image.png");
  };
  // 현재 프로필 수정에 보여줄 사진을 담고있는 변수
  let preview_img = null;
  // 사용자가 프로필 사진을 변경하면 변경한 사진으로 바뀜
  if (file !== "") {
    preview_img = <img className="userModify img" src={previewURL}></img>;
  }
  // 사용자 사진이 있으면 보여주고 없으면 기본사진 보여줌
  else {
    preview_img = <img className="userModify img" src={user.image}></img>;
  }

  // 백엔드와 통신하여 유저 정보 바꾸기
  const saveUserInfo = (e) => {
    // userInfo.image = file !== "" ? previewURL : user.image;
    console.log(userInfo);
    //멀티 파트로 바꾸기
    // formData로 변환
    const formData = new FormData();
    formData.append("image", userInfo.image);
    formData.append("id", userInfo.id);
    formData.append("nickname", userInfo.nickname);
    formData.append("introduce", userInfo.introduce);
    // 백엔드와 통신하기
    axios({
      method: "put",
      url: "http://i5d104.p.ssafy.io:8080/user",
      data: formData,
      contentType: "application/json; charset=utf-8",
      processData: false,
      enctype: "multipart/form-data",
    })
      .then((res) => {
        // res.data.image를 받아서 userInfo 바꿔주기(이미지 경로를 받아서 수정)
        // SetUserInfo(res.user);
        console.log(res);
        console.log(res.data);
      })
      .catch((res) => {
        console.log(res);
      });

    // 현재 로그인한 사용자의 정보 바꾸기
    onSetUserInfo(userInfo);
  };

  const removeUser = (e) => {
    e.preventDefault();
    console.log("탈퇴");
    if (!window.confirm("탈퇴하시겠습니까?")) {
    } else {
      alert("탈퇴되었습니다.");
    }
  };

  return (
    <div className="userModify-wrapper">
      <div className="userModify-row">
        <div className="userModify-col">
          <div className="userModify-header">
            <div className="userModify-header back" onClick={goBack}>
              <IoIosArrowBack />
            </div>
            <div className="userModify-header title">사용자 정보 수정</div>
          </div>

          <div className="userModify main">
            <div className="userModify userImg">{preview_img}</div>
            <div className="userImg input">
              <label htmlFor="img-file">
                <FontAwesomeIcon icon="images" />
                <span>프로필 사진 변경</span>
              </label>
              <input
                type="file"
                id="img-file"
                multiple="multiple"
                accept="image/jpg,image/png,image/jpeg,image/gif"
                onChange={handleImageUpload}
              />
            </div>
            <div className="userImg input">
              <label htmlFor="img-fil" onClick={handleImageRemove}>
                <FontAwesomeIcon icon="images" />
                <span>프로필 사진 삭제</span>
              </label>
            </div>
            <div className="userModify-title">닉네임</div>
            <div className="userName">
              <input
                className="user-nickname-input"
                type="text"
                value={userInfo.nickname}
                onChange={onNicknameChange}
              />
            </div>

            <div className="userModify-title">소개</div>
            <div className="userName">
              <input
                className="user-nickname-input"
                type="text"
                value={userInfo.introduce}
                onChange={onIntroduceChange}
              />
            </div>

            <div className="remove-user" onClick={removeUser}>
              <span>탈퇴하시겠습니까?</span> {/*클릭되게 바꿔주기 */}
            </div>

            <div className="apply-button">
              <button onClick={saveUserInfo}>저장</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoModify;
