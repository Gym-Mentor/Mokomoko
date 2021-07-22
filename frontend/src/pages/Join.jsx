import React, { useState } from "react";
import '../css/Join.css'


const Join = () => {
    //state 선언
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordChk, setPasswordChk] = useState("");
    const [btnColorState, setBtnColorState] = useState(false); // 기본값 false

    const [emailValidation, setEmailValidation] = useState(false);
    const [passwordValidation,setPasswordValidation] = useState(false);
    const [passwordChkValidation, setPasswordChkValidation] = useState(false);

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
      // 비밀번호 이벤트
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    
    const onChangePasswordChk = (e) => {
        setPasswordChk(e.target.value);
    };

    const btnChangeColor = () =>{
        //회원가입 유효성 검사 후 btnColorState값 변경
        (emailValidation && passwordValidation && passwordChkValidation)? setBtnColorState(true) : setBtnColorState(false);
        console.log(btnColorState);
    };

    const onClickJoin = (e) =>{
        (emailValidation && passwordValidation && passwordChkValidation)? setBtnColorState(true) : setBtnColorState(false);
        console.log(btnColorState);
    };

      //이메일 유효성 검사
    const isEmail = () => {
        // eslint-disable-next-line
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        
        if(emailRegex.test(email)){
            setEmailValidation(true);
        }
        else{
            setEmailValidation(false);
        }
    };

    const isPassword = () =>{
        //조건1. 6~20 영문 대소문자
        // 조건2. 최소 1개의 숫자 혹은 특수 문자를 포함해야 함

        const passwordRegex = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/

        if(passwordRegex.test(password)){
            setPasswordValidation(true);
        }
        else{
            setPasswordValidation(false);
        }
    }

    const isPasswordChk = () =>{
        if(password.length == passwordChk.length){
            setPasswordChkValidation(true);
        }
        else{
            setPasswordChkValidation(false);
        }
    }

    return (
        <div>
            <h1>회원가입</h1>
            {/* 회원가입 입력 창 */}
            <div className="join-form">
                <div>
                    <label htmlFor="email">email :</label>
                    <input 
                        type="text" 
                        name="email" 
                        value={email} 
                        placeholder="이메일을 입력하세요"
                        onChange={onChangeEmail}
                        onKeyUp={isEmail}
                    />
                    <div className={"email-validation-"+(emailValidation?"onColor":"offColor")}>
                        {emailValidation?"OK":"이메일 형식이 잘못되었습니다."}
                    </div>
                </div>
                <div>
                    <label htmlFor="password"> 비밀번호 :</label>
                    <input
                        type="password"
                        name="password"
                        vale={password}
                        placeholder="비밀번호를 입력하세요"
                        onChange={onChangePassword}
                        onKeyUp={isPassword}
                    />
                    <div className={"password-validation-"+(passwordValidation?"onColor":"offColor")}>
                        {passwordValidation?"OK":"비밀번호 형식이 잘못되었습니다."}
                    </div>
                </div>
                <div>
                    <label htmlFor="password"> 비밀번호 확인:</label>
                    <input
                        type="password"
                        name="passwordChk"
                        vale={passwordChk}
                        placeholder="확인 비밀번호를 입력하세요"
                        onChange={onChangePasswordChk}
                        onKeyUp={isPasswordChk}
                    />
                    <div className={"passwordChk-validation-"+(passwordChkValidation?"onColor":"offColor")}>
                        {passwordChkValidation?"OK":"상위에 입력한 비밀번호와 일치하지 않습니다."}
                    </div>
                </div>
                <div>
                    <button 
                        className={"join-btn-"+(btnColorState? "onColor":"offColor")}
                        type="button"
                        onChange={btnChangeColor}
                        onClick={onClickJoin}
                    >
                        회원가입
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Join;