import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/user/Login.css";
import KakaoLogin from "../../components/user/KakaoLogin";
import NaverLogin from "../../components/user/NaverLogin";
import axios from "axios";
const Login = ({ history }) => {
  // state 선언
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnColorState, setBtnColorState] = useState(false); // 기본값 false
  // 이메일 이벤트
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  // 비밀번호 이벤트
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // 로그인 버튼 이벤트
  const onClickLogin = (e) => {
    // 백엔드와 통신
    history.push("/main/feed");
    axios({
      method: "post",
      url: "/auth/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        history.push("/main/feed");
      })
      .catch((error) => {
        // console.log(error);
        console.error(error);
        alert("가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.");
      });
  };

  //이메일 유효성 검사
  const isEmail = (email) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(email);
  };
  // 로그인 유효성 검사 후 btnColorState 값 변경
  const btnChangeColor = () => {
    isEmail(email) && password.length >= 5 ? setBtnColorState(true) : setBtnColorState(false);
    console.log(btnColorState);
  };

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
