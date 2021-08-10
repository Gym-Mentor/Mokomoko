import React ,{useEffect} from 'react';
import axios from 'axios';

const {Kakao} = window;

    // Kakao.Auth.login({
    //     success: function(authObj) {
    //       Kakao.API.request({
    //         url: '/v2/user/me',
    //         success: function(res) {
    //           alert(JSON.stringify(res))
    //           console.log(JSON.stringify(res));
    //         },
    //         fail: function(error) {
    //           alert(
    //             'login success, but failed to request user information: ' +
    //               JSON.stringify(error)
    //           )

    //           console.log( 'login success, but failed to request user information: ' ,
    //           JSON.stringify(error))
    //         },
    //       })
    //     },
    //     fail: function(err) {
    //       alert('failed to login: ' + JSON.stringify(err))
    //     },
    //   })
// }

const KakaoTest = () => {
    // Kakao.Auth.setAccessToken(code);
    // useEffect(() => {
    //     axios({
    //         method:"GET",
    //         url:`/account/kakaoLogin?code=${code}`,
    //     })
    //     .then((res) =>{
    //         console.log(res); //토큰?

    //         const ACCESS_TOKEN = res.data.accessToken;
    //     }).catch((err) =>{
    //         console.log("소셜 로그인 에러");
    //     })
    //     return () => {
            
    //     }
    // }, [])

    useEffect(() => {
        var code =  new URL(window.location.href).searchParams.get('code');
        console.log(code);

        
        axios.post('https://kauth.kakao.com/oauth/token',
        {
            'grant_type':'authorization_code',
            'client_id':'ae3417f23d74a47e083cca850c4ecf08',
            'redirect_uri' :`http://localhost:3000/account/kakaoLogin`,
            'code' : code,
        },
        // {
        //     headers:{
        //         'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        //     }
        // }
        )
        .then((response) =>{
            console.log(response.data);
        })
        .catch((response) =>{
            console.log("에러");
            console.error(response);
        })
        return () => {
            
        }

        // axios({
        //     method : "GET",
        //     url : `http://localhost:3000/account/kakaoLogin?code=${code}`,
        // })
        // .then((response) =>{
        //     console.log("성공");
        //     console.log(response);
        // })
        // .catch((response) =>{
        //     console.error(response);
        //     console.log("에러");
        // })


    }, [])

    // useEffect(() => {
    //     var ACCESS_TOKEN = new URL(window.location.href).searchParams.get('code');
    //     console.log(ACCESS_TOKEN);
    //     Kakao.Auth.setAccessToken(ACCESS_TOKEN);
    //     Kakao.API.request({
    //         url: '/v2/user/me',
    //         data: {
    //             property_keys: ["kakao_account.email"]
    //         },
    //         success: function(response) {
    //             console.log(response);
    //         },
    //         fail: function(error) {
    //             console.log("실패");
    //             console.log(error);
    //         }
    //     });
    //     return () => {
            
    //     }
    // }, [])
    return (
        <div>
            <h1>카카오 로그인 테스트 화면입니다.</h1>
        </div>
    );
};

export default KakaoTest;