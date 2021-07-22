import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";
import KakaoLogin from "react-kakao-login";
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
    <div>
      로그인 메인
      <h1>로그인을 하세요.</h1>
      {/* 로그인 입력 창 */}
      <div className="login-form">
        <div>
          <label htmlFor="email"> email :</label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="이메일을 입력하세요"
            onChange={onChangeEmail}
            onKeyUp={btnChangeColor}
          />
        </div>
        <div>
          <label htmlFor="password">password :</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력하세요"
            onChange={onChangePassword}
            onKeyUp={btnChangeColor}
          ></input>
        </div>
        <div>
          <button
            className={"login-btn-" + (btnColorState ? "onColor" : "offColor")}
            type="button"
            onClick={onClickLogin}
          >
            Login
          </button>
        </div>
      </div>
      <hr></hr>
      {/* SNS 로그인 푸터 */}
      <div className="social-login">
        <h3>토큰 받아오기</h3>
        <KakaoLogin
          jsKey="4bab42a7ba1fe3ae39ed221ece6993f6"
          // onSuccess={result => onLoginKakao(result)}
          // onFailure = {result => console.log(result)}
          // render={(props : any) =>(
          //     <div onClick={props.onClick}/>
          // )}
        />
        <NaverLogin />
      </div>
      <hr></hr>
      {/* 로그인 푸터 */}
      <div className="login-footer">
        <Link to="/forgot">비밀번호를 잊으셨습니까?</Link>
        <br />
        <Link to="/join">회원가입</Link>
      </div>
    </div>
  );
};

export default Login;
