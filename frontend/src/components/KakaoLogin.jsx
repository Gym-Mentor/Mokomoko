import React from "react";
import "../css/user/KakaoLogin.css";
import kakao from "../img/kakao.png";

const { Kakao } = window;
const loginWithKakao = () => {
  console.log("hello");
  Kakao.Auth.authorize({
    redirectUri: "http://localhost:3000/kakaoLogin",
  });
};

const KakaoLogin = () => {
  return (
    <div>
      <a id="custom-login-btn" onClick={loginWithKakao}>
        <img src={kakao} width="50" />
      </a>
    </div>
  );
};

export default KakaoLogin;
