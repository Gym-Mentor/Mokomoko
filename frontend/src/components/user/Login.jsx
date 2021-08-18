import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "../../modules/userInfo";
import KakaoLogin from "../../components/user/KakaoLogin";
import NaverLogin from "../../components/user/NaverLogin";
import axios from "axios";
import "../../css/user/Login.css";

const Login = ({ history }) => {
  // state 선언
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnColorState, setBtnColorState] = useState(false); // 기본값 false
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  //userSelector로 리덕스 스토어의 상태 조회하기
  const { user } = useSelector((state) => ({
    user: state.userInfo.user,
  }));

  //useDispatch 사용해서 리덕스 스토어의 dispatch를 함수에서 사용할 수 있도록 해준다.
  const dispatch = useDispatch();

  const onSetUserInfo = (userInfo) => dispatch(setUserInfo(userInfo));

  // 이메일 이벤트
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  // 비밀번호 이벤트
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const JWT_EXPIRY_TIME = 10000;

  // 만료 시간을 받아와서 넣어주고 거기서 현재 시간 뺀 거에서 1분 전으로
  // 로그인 버튼 이벤트
  const onClickLogin = () => {
    // 백엔드와 통신
    // history.push("/main/feed");
    console.log(email);
    console.log(password);
    axios({
      method: "post",
      url: "https://i5d104.p.ssafy.io/api/auth/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        let user = res.data.data.user;
        user = { ...user, ...res.data.data.relationResponse };
        user = { ...user, ...res.data.data.token };
        const { accessToken, refreshToken } = res.data;
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        console.log("유저정보 ", user);
        console.log("res.data", res.data);
        console.log("res.data.data", res.data.data);

        onSetUserInfo(user);
        //로그인 하고 localStorage 저장
        // localStorage.setItem("accessToken", user);
        axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

        // setTimeout(onReissue, JWT_EXPIRY_TIME);
        console.log(res.data.data.user.accessToken);
        console.log(res.data.data.user.refreshToken);
        history.push("/main/feed");
      })
      // .then(onLoginSuccess, history.push("/main/feed"))
      // .then((response) => {
      //   let user = response.data.data.user;
      //   user = { ...user, ...response.data.data.relationResponse };
      //   const { accessToken, refreshToken } = response.data;
      //   setAccessToken(accessToken);
      //   setRefreshToken(refreshToken);
      //   console.log("유저정보 ", user);
      //   onSetUserInfo(user);
      //   axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      //   // setTimeout(onReissue, JWT_EXPIRY_TIME); // 토큰 만료 전에 토큰 연장해주게,
      // })
      .catch((error) => {
        // console.log(error);
        console.log(error);
        // if (error === 401) {
        //   window.location.reload();
        // }
        // alert("가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.");
        // setEmail("");
        // setPassword("");
      });
  };

  // const onReissue = () => {
  //   const data = {
  //     accessToken,
  //     refreshToken,
  //   };
  //   console.log(data);
  //   axios
  //     .post("https://i5d104.p.ssafy.io/api/auth/reissue", data)
  //     .then(onLoginSuccess)
  //     .catch((error) => {
  //       console.log(error);
  //       if (error === 401) {
  //         history.push("/account/login");
  //       }
  //     });

  // axios({
  //   method: "post",
  //   url: "http://i5d104.p.ssafy.io:8080/auth/reissue",
  //   data: {
  //     // email: email,
  //     accessToken: accessToken,
  //     refreshToken: refreshToken,
  //   },
  // })
  //   .then((response) => {
  //     const { accessToken, refreshToken } = response.data;
  //     setAccessToken(accessToken);
  //     setRefreshToken(refreshToken);
  //     axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  //     setTimeout(onReissue, JWT_EXPIRY_TIME);
  //   })
  //   .catch((error) => {
  //     console.log(JSON.stringify(error));
  //     if (error === 401) {
  //       window.location.reload();
  //     }
  //     alert("가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.");
  //     setEmail("");
  //     setPassword("");
  //   });
  // };

  // const onLoginSuccess = (res) => {
  //   const { accessToken, refreshToken } = res.data;

  //   setAccessToken(accessToken);
  //   setRefreshToken(refreshToken);

  //   axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  //   setTimeout(onReissue, JWT_EXPIRY_TIME - 60000);
  // };

  //이메일 유효성 검사
  const isEmail = (email) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(email);
  };
  // 로그인 유효성 검사 후 btnColorState 값 변경
  const btnChangeColor = () => {
    isEmail(email) && password.length >= 5 ? setBtnColorState(true) : setBtnColorState(false);
  };

  useEffect(() => {
    // onReissue(); // 페이지가 리로드 될 때 로그인 연장
    if (localStorage.getItem("accessToken") != null) {
      window.location.replace("http://i5d104.p.ssafy.io:80/main/feed");
    }
    return () => {};
  }, []);
  return (
    <div className="wrap">
      <div className="user-container">
        <div className="inner">
          <div className="logo-name">
            <h2>mokomoko</h2>
          </div>

          {/* 로그인 입력 창 */}
          <div className="login-form">
            <div className="login-id">
              <input
                className="input-login"
                type="text"
                autoCapitalize="off"
                name="email"
                value={email}
                placeholder="이메일"
                onChange={onChangeEmail}
                onKeyUp={btnChangeColor}
              />
            </div>
            <div className="login-pw">
              <input
                className="input-password"
                type="password"
                name="password"
                value={password}
                placeholder="비밀번호"
                onChange={onChangePassword}
                onKeyUp={btnChangeColor}
              ></input>
            </div>
            <div className="forgot-pw">
              <Link to="/account/forgot">
                <span>Forgot Password ?</span>
              </Link>
            </div>

            <div className="user-submit">
              <button
                id="login-btn"
                className={"login-btn-" + (btnColorState ? "onColor" : "offColor")}
                type="button"
                onClick={onClickLogin}
                disabled={!btnColorState}
              >
                로그인
              </button>
            </div>
            {/* 로그인 푸터 */}

            <div className="login-or">
              <hr className="leftHr" />
              <div className="or">또는</div>
              <hr className="rightHr" />
            </div>
          </div>
          <div className="login-footer">
            <NaverLogin />
            <KakaoLogin />
          </div>

          <div className="to-join">
            <span>mokomoko 회원이 아닌가요? </span>
            <Link to="/account/Join">
              <span className="to-join-name"> 지금 가입하세요.</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
