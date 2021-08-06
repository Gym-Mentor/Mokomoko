import React, { useEffect } from "react";
import axios from "axios";
const { naver } = window;
const NaverCallBack = (props) => {
  const naverLogin = new naver.LoginWithNaverId({
    clientId: "aZzX9db7PmSlUCampLBA",
    callbackUrl: "http://localhost:3000/account/naverLogin",
    isPopup: false, // popup 형식으로 띄울것인지 설정
    callbackHandle: true,
  });
  useEffect(() => {
    naverLogin.getLoginStatus(function (status) {
      if (status) {
        let image = naverLogin.user.getProfileImage();
        let id = naverLogin.user.getId();
        let nickname = naverLogin.user.getNickName();
        const data = {
          id: id,
          nickname: nickname,
          image: image,
        };
        // axios로 백엔드와 통신 후 login 페이지로 redirect
        props.history.push("/account/login");
        axios({
          method: "post",
          url: "http://localhost:8080/auth/sns",
          data: data,
        })
          .then((res) => {
            console.log(res);
            props.history.push("/main/feed");
          })
          .catch((error) => {
            console.error(error);
            props.history.push("/account/login");
            alert("네이버 로그인에 실패했습니다.");
          });
      }
    });
  }, []);

  return <div></div>;
};

export default NaverCallBack;
