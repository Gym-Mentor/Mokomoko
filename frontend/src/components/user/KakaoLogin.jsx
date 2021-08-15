import axios from "axios";
import { useHistory } from "react-router";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "../../modules/userInfo";
import "../../css/user/KakaoLogin.css";

const { Kakao } = window;

const KakaoLogin = () => {
  const history = useHistory();

  //userSelector로 리덕스 스토어의 상태 조회하기
  const { user } = useSelector((state) => ({
    user: state.userInfo.user,
  }));

  //useDispatch 사용해서 리덕스 스토어의 dispatch를 함수에서 사용할 수 있도록 해준다.
  const dispatch = useDispatch();

  const onSetUserInfo = (userInfo) => dispatch(setUserInfo(userInfo));

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

            console.log("사용자 아이디", response.id);
            console.log(response.properties.nickname);
            console.log(response.properties.profile_image);
            axios({
              method: "post",
              url: "http://i5d104.p.ssafy.io:8080/auth/sns",
              data: {
                id: response.id,
                nickname: response.properties.nickname,
                image: response.properties.profile_image,
              },
            })
              .then((res) => {
                console.log(res);
                let user = {
                  id: response.id,
                  nickname: response.nickname,
                  image: response.properties.profile_image,
                };

                onSetUserInfo(user);
                localStorage.setItem("accessToken", user);
                history.push("/main/feed");
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
