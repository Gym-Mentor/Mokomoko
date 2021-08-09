import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import "../../../css/header/profileSidebar/UserInfoModify.css";

const UserInfoModify = () => {
    const goBack = () =>{
        window.history.back();
    }
    return (
        <div>
            <div className="userInfo-header">
                <div className="userInfo-header back" onClick={goBack}>
                    <IoIosArrowBack/>
                </div>
                <div className="userInfo-header title">
                    사용자 정보 수정
                </div>
            </div>
            <div>
                사용자 사진 이랑 정보 띄워주기
            </div>
        </div>
    );
};

export default UserInfoModify;