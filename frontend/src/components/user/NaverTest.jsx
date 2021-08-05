import React, { useEffect } from "react";
import axios from "axios";
const { naver } = window;
const location = window.location;
const NaverTest = (props) => {
  const naverLogin = new naver.LoginWithNaverId({
    clientId: "aZzX9db7PmSlUCampLBA",
    callbackUrl: "http://localhost:3000/account/naverLogin",
    isPopup: false, // popup 형식으로 띄울것인지 설정
    callbackHandle: true,
  });
  naverLogin.init();

  useEffect(() => {
    window.location.href.includes("access_token");
    const location = window.location.href.split("=")[1];

    naverLogin.getLoginStatus(function (status) {
      if (status) {
        //auth/sns post방식
        /* (5) 필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크 */
        let image = naverLogin.user.getProfileImage();
        let id = naverLogin.user.getId();
        let nickname = naverLogin.user.getNickName();
        const data = {
          id: id,
          nickname: nickname,
          image: image,
        };
        // axios로 백엔드와 통신 후 login 페이지로 redirect

        axios({
          method: "post",
          url: "/auth/sns",
          data: data,
        })
          .then((res) => {
            console.log(res);
            props.history.push("/main/feed");
          })
          .catch((error) => {
            console.error(error);
            props.history.push("/account/login");
            // alert("네이버 로그인에 실패했습니다.");
          });
      }
    });
  }, []);

  return (
    <div>
      <h1>네이버 로그인 테스트 화면입니다.</h1>
      <h3>{location.hash}</h3>
    </div>
  );
};

export default NaverTest;
