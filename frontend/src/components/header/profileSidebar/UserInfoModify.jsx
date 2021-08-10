import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getUserInfo,setUserInfo} from '../../../modules/userInfo';
import {IoIosArrowBack} from 'react-icons/io';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import userImg from '../../../img/user_image.png';
import "../../../css/header/profileSidebar/UserInfoModify.css";

const UserInfoModify = () => {
    const {user} = useSelector(state => ({user: state.userInfo.user}));

    const dispatch = useDispatch();
    const onSetUserInfo = userInfo => dispatch(setUserInfo(userInfo));

    const [userInfo, SetUesrInfo] = useState(user);

    console.log("userModify 사용자정보",userInfo);

    const [file, setFile] = useState("");
    const [previewURL, setPreviewURL] = useState("");

    const goBack = () => {
        window
            .history
            .back();
    }

    const handleImageUpload = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e
            .target
            .files[0];
        reader.onloadend = () => {
            setFile(file);
            setPreviewURL(reader.result);
        }
        reader.readAsDataURL(file);
    }

    let preview_img = null;
    if (file !== '') {
        preview_img = <img className="userModify img" src={previewURL}></img>
    } else {
        preview_img = <img
            className="userModify img"
            src={(
                user.image != null)
                ? user.image
                : `${userImg}`}></img>
    }

    const saveUserInfo = (e) =>{
        e.preventDefault();
        userInfo.image = (file!=='')?previewURL:user.image
        // console.log(userInfo.image);
        onSetUserInfo(userInfo);
    }

    return (
        <div className="userModify-wrapper">
            <div className="userModify-row">
                <div className="userModify-col">

                    <div className="userModify-header">
                        <div className="userModify-header back" onClick={goBack}>
                            <IoIosArrowBack/>
                        </div>
                        <div className="userModify-header title">
                            사용자 정보 수정
                        </div>
                    </div>

                    <div className="userModify main">

                        <div className="userModify userImg">
                            {preview_img}
                        </div>
                        <div className="userImg input">
                            <label htmlFor="img-file">
                                <FontAwesomeIcon icon="images"/>
                            </label>
                            <input
                                type="file"
                                id="img-file"
                                multiple="multiple"
                                accept="image/jpg,image/png,image/jpeg,image/gif"
                                onChange={handleImageUpload}/>
                        </div>

                        <div className="userId">
                            <input
                                className="user-email-input"
                                type="text"
                                value={userInfo.email}
                                disabled
                            />
                        </div>
                        <div className="userName">
                            <input
                                className="user-email-input"
                                type="text"
                                value={(userInfo.nickname!=null)?userInfo.nickname:"설정x"}
                            />
                        </div>

                        <div className="">
                            <button onClick={saveUserInfo}>저장</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserInfoModify;