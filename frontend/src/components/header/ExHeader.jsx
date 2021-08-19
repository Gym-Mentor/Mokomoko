import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Navbar, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { setOtherUser } from "../../modules/OtherUser";
import "../../css/header/ExHeader.css";

const ExHeader = () => {
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
          const data = {
            text: keyword,
            userid: user.id,
          };
          const response = await axios.post("https://i5d104.p.ssafy.io/api/search", data);

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

  const goToUserPage = (e, anotherUserId) => {
    // console.log(user.id);
    console.log("다른 유저 페이지 이동", anotherUserId);

    axios({
      method: "get",
      url: `https://i5d104.p.ssafy.io/api/post/user/${user.id}/${anotherUserId}`,
    })
      .then((response) => {
        dispatch(setOtherUser({ ...response.data.data }));

        history.push({
          pathname: `/main/profile`,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const showTagResult = (e, tagName) => {
    console.log("태그 보여줄 거", tagName);
  };
  return (
    <div className="cheader-wrapper">
      <Navbar className="header-nav">
        <Container className="logo">
          <Navbar.Brand href="/main/feed">
            <span id="profile-header-name">mokomoko</span>
            {/* <img id="logo-img" src={logoImg} /> */}
          </Navbar.Brand>
          <div id="header-title">
            <div className="search-form">
              {/* <input id="search-ipt" type="text" value={keyword} onChange={onChangeKeyword}/> */}
              {/* <div className="ospan"></div> */}

              {/* <SearchIcon /> */}
              <input
                className="search-keyword"
                type="text"
                value={keyword}
                onChange={onChangeKeyword}
                placeholder="검색어를 입력해주세요"
              />
            </div>
          </div>
        </Container>
      </Navbar>
      <div className="search-res">
        {keyword != "" ? (
          <div className="search-results">
            <div className="search-list1">
              <div className="search-list-header">Nicknames</div>
              <hr id="usr-hr" />
              <div className="nickname-info">
                {nicknameInfo == null ? "사용자 정보가 없습니다." : ""}
                {nicknameInfo &&
                  nicknameInfo.map((item, index) => {
                    return (
                      <div
                        className="res-lists"
                        key={index}
                        onClick={(e) => goToUserPage(e, `${item.id}`)}
                      >
                        {item.name}
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="search-list2">
              <div className="search-list-header">Tags</div>
              <div className="tag-info">
                <hr id="tag-hr" />
                {tagInfo == null ? "태그 정보가 없습니다." : ""}
                {tagInfo &&
                  tagInfo.map((item, index) => {
                    return (
                      <div
                        className="res-lists"
                        key={index}
                        onClick={(e) => showTagResult(e, `${item}`)}
                      >
                        {item}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* <hr className="header-line" /> */}
    </div>
  );
};

export default ExHeader;
