import React, {useEffect, useState} from "react";
import axios from 'axios';
import {setUserInfo} from "../../../modules/userInfo";
import "../../../css/main/explore/ExploreHeader.css";
const ExploreHeader = () => {
    const [results, setResults] = useState("");
    const [updateField, setUpdateField] = useState("");
    const [keyword, setKeyword] = useState("");
    const [nicknameInfo, setNicknameInfo] = useState([]);
    const [tagInfo, setTagInfo] = useState([]);

    useEffect(() => {
        console.log(keyword);
        const fetchList = async () => {
            try {
                if (keyword === "") {
                    setNicknameInfo([]);
                    setTagInfo([]);
                } else {

                    const userResponse = await axios.get(
                        "https://i5d104.p.ssafy.io/api/search?text=" + keyword + "&type=true"
                    );

                    console.log("유저정보", userResponse.data.data);
                    var nickname_info = userResponse.data.data;
                    setNicknameInfo(nickname_info);

                    const tagResponse = await axios.get(
                        "https://i5d104.p.ssafy.io/api/search?text=" + keyword + "&type=false"
                    )

                    console.log("태그정보", tagResponse.data.data);
                    var tag_info = tagResponse.data.data;
                    setTagInfo(tag_info);

                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchList();
    }, [keyword]);

    const onChangeKeyword = (e) => {
        setKeyword(e.target.value);
    };

    return (
        <> < div className = "search-form" >
            <div className="search-box">
            <input id="search-ipt" type="text" value={keyword} onChange={onChangeKeyword}/>
            <div id="ospan">
              <h1>사용자 정보</h1>
                <div className="nickname-info">
                    {
                        nicknameInfo && nicknameInfo.map((item, index) => {
                            return (<div key={index}>{item}</div>);
                        })
                    }
                </div>
                <div className="tag-info">
                  <h1>태그 정보</h1>
                  {
                    tagInfo && tagInfo.map((item,index) =>{
                      return(
                        <div key = {index}>{item}</div>
                      )
                    })
                  }
                </div>

            </div>

        </div>
    </div>
</>
    );
};

export default ExploreHeader;
