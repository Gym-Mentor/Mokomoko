import React ,{useEffect}from 'react';
import '../../../css/main/profile/Detail.css';
import { getDetailNumber, setDetail } from "../../../modules/profileDetail";
import {IoIosArrowBack} from 'react-icons/io';


const Detail = ({location:{state}}) => {

    //Link to 로 이동할 때 state로 넘겨준 값 받기 위해 사용
    const {idx,item} = state;

    const onClickBack = () =>{
        console.log("뒤로 가는거 처리");
    }

    return (
        <>
            <div className="content">
                    <div className="headerDiv">
                        <div className="headerDiv icon"><IoIosArrowBack  onClick={onClickBack}/></div>
                        <div className="headerDiv title">게시글</div>
                    </div>
                    <div className="userInfo">
                        사용자 이름 및 프로필
                    </div>
                    <div className="imgDiv">
                        <img src={item.img}/>
                    </div>
                    <div className="contentDiv">
                        <h3>내용</h3>
                        {item.content}
                        {/* <h1>{idx}</h1> */}
                        {/* <h1>{item.content}</h1> */}
                    </div>
                </div>
        </>
    );
};

export default Detail;