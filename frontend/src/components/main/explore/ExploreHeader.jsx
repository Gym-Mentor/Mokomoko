import React, {useEffect, useState} from "react";
import { useSelector,useDispatch} from "react-redux";
import axios from 'axios';
import {setUserInfo} from "../../../modules/userInfo";
import "../../../css/main/explore/ExploreHeader.css";
import SearchIcon from '@material-ui/icons/Search';
import { setOtherUser } from "../../../modules/OtherUser";
import { useHistory } from "react-router-dom";



const ExploreHeader = () => {
    const [results, setResults] = useState("");
    const [updateField, setUpdateField] = useState("");
    const [keyword, setKeyword] = useState("");
    const [nicknameInfo, setNicknameInfo] = useState(null);
    const [tagInfo, setTagInfo] = useState(null);

    const dispatch = useDispatch();
    const history = useHistory();

    const { user } = useSelector((state) => ({
      user: state.userInfo.user,
    }));

    const { OtherUser } = useSelector((state) => state.OtherUser);

    useEffect(() => {
        console.log(keyword);
        const fetchList = async () => {
            try {
                if (keyword === "") {
                    setNicknameInfo(null);
                    setTagInfo(null);
                } else {

                    const data ={
                      "text" : keyword,
                      "userid" : user.id
                    }
                    const response= await axios.post(
                        "https://i5d104.p.ssafy.io/api/search", data);

                    // console.log("유저정보", response.data.data.users);
                    var nickname_info = response.data.data.users;
                    setNicknameInfo(nickname_info);

                    // console.log("태그정보", response.data.data.tags);
                    var tag_info = response.data.data.tags;
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

    const goToUserPage = (e,anotherUserId) =>{
      // console.log(user.id);
      console.log("다른 유저 페이지 이동",anotherUserId);

      axios({
        method:"get",
        url:`https://i5d104.p.ssafy.io/api/post/user/${user.id}/${anotherUserId}`,
      })
        .then((response) =>{
          dispatch(setOtherUser({...response.data.data}));

          history.push({
            pathname :`/main/profile`,
          })
        })
        .catch((error) =>{
          console.error(error);
        })
    }

    const showTagResult = (e,tagName) =>{
      console.log("태그 보여줄 거",tagName);
    }

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
                            return (<div key={index} onClick={(e) => goToUserPage(e,`${item.id}`)}>{item.name}</div>);
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
                        <div key = {index} onClick={(e) =>showTagResult(e,`${item}`)}>{item}</div>
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
