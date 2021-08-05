import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../css/user/NaverLogin.css";
import axios from "axios";
const { naver } = window;

function NaverLogin(props) {
  const history = useHistory();
  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "nwk_DGz4Rg8qXKe4QUws",
      callbackUrl: "http://localhost:3000/account/login",
      isPopup: false, // popup 형식으로 띄울것인지 설정
      loginButton: { color: "green", type: 3, height: "28" }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();
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
            history.push("/main/feed");
            // 로그인 정보 저장 해야함
          })
          .catch((error) => {
            console.error(error);
            history.push("/account/login");
            alert("네이버 로그인에 실패했습니다.");
          });
      }
    });
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return <div id="naverIdLogin" />;
}

export default NaverLogin;
