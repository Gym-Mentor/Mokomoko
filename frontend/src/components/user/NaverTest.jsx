import React, { useEffect } from "react";

const { naver } = window;
const location = window.location;
const NaverTest = () => {
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
        /* (5) 필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크 */
        var email = naverLogin.user.getEmail();
        var id = naverLogin.user.getId();
        var name = naverLogin.user.getName();
        console.log(email);
        console.log(id);
        console.log(name);
        console.log(naverLogin.user);
        // axios로 백엔드와 통신 후 login 페이지로 redirect
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
