import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/user/Login.css";
import KakaoLogin from "../components/KakaoLogin";
import NaverLogin from "../components/NaverLogin";

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
    history.push("/forgot");
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
      <div className="login-body">
        {/* <img className="logo" src={namelogo} alt="Img not found :(" /> */}
        <div id="logo-name">
          <h2>mokomoko</h2>
        </div>
        {/* SNS 로그인 헤더 */}
        <div className="social-login">
          <li>
            <KakaoLogin />
          </li>
          <li>
            <NaverLogin />
          </li>
        </div>
        {/* 로그인 입력 창 */}
        <div className="login-form">
          <div className="login-id">
            <input
              className="input-login"
              type="text"
              name="email"
              value={email}
              placeholder="이메일을 입력하세요"
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
              placeholder="비밀번호를 입력하세요"
              onChange={onChangePassword}
              onKeyUp={btnChangeColor}
            ></input>
          </div>
          {/* 로그인 푸터 */}
          <div className="login-footer">
            <div className="join">
              <Link to="/join">Join</Link>
            </div>
            <div className="forgot-pw">
              <Link to="/forgot">Forgot Password ?</Link>
            </div>
          </div>
          <div className="submit">
            <button
              id="btn-login"
              className={"login-btn-" + (btnColorState ? "onColor" : "offColor")}
              type="button"
              onClick={onClickLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
