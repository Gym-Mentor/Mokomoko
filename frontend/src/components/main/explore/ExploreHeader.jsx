import React, {useEffect, useState} from "react";
import axios from 'axios';
import {setUserInfo} from "../../../modules/userInfo";
import "../../../css/main/explore/ExploreHeader.css";
import SearchIcon from '@material-ui/icons/Search';



const ExploreHeader = () => {
    const [results, setResults] = useState("");
    const [updateField, setUpdateField] = useState("");
    const [keyword, setKeyword] = useState("");
    const [nicknameInfo, setNicknameInfo] = useState(null);
    const [tagInfo, setTagInfo] = useState(null);

    useEffect(() => {
        console.log(keyword);
        const fetchList = async () => {
            try {
                if (keyword === "") {
                    setNicknameInfo(null);
                    setTagInfo(null);
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
            {/* <input id="search-ipt" type="text" value={keyword} onChange={onChangeKeyword}/> */}
            {/* <div className="ospan"></div> */}
            <div>
              <SearchIcon/>
            <input className="search-keyword" type="text" value={keyword} onChange={onChangeKeyword} placeholder="검색어를 입력해주세요"/>
            </div>
            {keyword !="" ?
            <div className="search-list">
              <div className="search-list-header">사용자 정보</div>
              <hr />
                <div className="nickname-info">
                  {nicknameInfo ==null ?"사용자 정보가 없습니다.":""}
                    {
                        nicknameInfo && nicknameInfo.map((item, index) => {
                            return (<div key={index}>{item.name}</div>);
                        })
                    }
                </div>
                <hr />
                <div className="search-list-header">태그 정보</div>
                <div className="tag-info">       
                  <hr />
                  {tagInfo ==null?"태그 정보가 없습니다.":""}
                  {
                    tagInfo && tagInfo.map((item,index) =>{
                      return(
                        <div key = {index}>{item}</div>
                      )
                    })
                  }
                </div>

            </div>
            :""}
            

        </div>
    </div>
</>
    );
};

export default ExploreHeader;
