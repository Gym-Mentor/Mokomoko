import React from 'react';

const {Kakao} = window;


const uri =window.location.href;
const code = new URL(window.location.href).searchParams.get('code'); //인가코드
const token = Kakao.Auth.setAccessToken(code); //발급받은 토큰
const getInfo = () =>{
    Kakao.API.request({
        url: 'kakaoLogin/v2/user/me',
        data: {
            property_keys: ["kakao_account.email"]
        },
        success: function(response) {
            console.log(response);
        },
        fail: function(error) {
            console.log(error);
        }
    });
}

const Test = () => {
    return (
        <div>
            <h1>카카오 로그인 테스트 화면입니다.</h1>
            <h3>{uri}</h3>
            <h3>{code}</h3>
            <h3>{token}</h3>
            <button onClick={getInfo}>check 해보기</button>
        </div>
    );
};

export default Test;