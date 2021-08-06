import axios from "axios";
import React from "react";
import "../../css/user/KakaoLogin.css";

const { Kakao } = window;
const loginWithKakao = () => {

  const scope = "profile_nickname,profile_image, account_email";
  Kakao.Auth.login({
    scope,
    // success는 인증 정보를 응답(response)으로 받는다. 
    success: function (response) {
     //카카오 SDK에 사용자 토큰을 설정한다.
      window.Kakao.Auth.setAccessToken(response.access_token);
      console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);
      
      var ACCESS_TOKEN = window.Kakao.Auth.getAccessToken();

      
      window.Kakao.API.request({
      url: "/v2/user/me",
      success: function (response) {
        //어떤 정보 넘어오는지 확인
        // console.log(response);
        // console.log("정보확인");

        // console.log(response.id);
        // console.log(response.properties.nickname);
        // console.log(response.properties.profile_image);
        axios({
          method: "post",
          url: "/auth/sns",
          data: {
            "id": response.id,
            "nickname": response.properties.nickname,
            "image" :response.properties.profile_image,
          },
        })
          .then((res) => {
            console.log(res);
            // history.push("/main/feed");
          })
          .catch((error) => {
            // console.log(error);
            console.error(error);
            alert("카카오 로그인 에러?");
          });

      },
      fail: function (error) {
        console.log(error);
      },
    });


    },
    fail: function (error) {
      console.log(error);
    },
  });

};


const KakaoLogin = () => {

  
  return (
    <div>
      <button>
        <a id="custom-login-btn" onClick={loginWithKakao}>
          <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="130" />
        </a>
      </button>
    </div>
    
  );
};

export default KakaoLogin;
