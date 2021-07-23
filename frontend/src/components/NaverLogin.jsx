import React, { useEffect } from "react";

const { naver } = window;

function NaverLogin() {
  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "nwk_DGz4Rg8qXKe4QUws",
      callbackUrl: "http://localhost:3000/naverLogin",
      isPopup: false, // popup 형식으로 띄울것인지 설정
      loginButton: { color: "white", type: 1, height: "47" }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return <div id="naverIdLogin" />;
}

export default NaverLogin;
