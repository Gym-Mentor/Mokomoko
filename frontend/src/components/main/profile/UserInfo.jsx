import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserInfo } from "../../../modules/userInfo";
import { testImg } from "../../../img/user_image.png";
import * as HiIcons from "react-icons/hi";
import axios from "axios";
import userImg from "../../../img/user_image.png";
import FollowModal from "./FollowModal";
import FollowerModal from "./FollowerModal";
import "../../../css/main/profile/UserInfo.css";
import BlockModal from "./BlockModal";
import { setOtherUser } from "../../../modules/OtherUser";

const UserInfo = () => {
  const { user } = useSelector((state) => ({ user: state.userInfo.user }));
  const { OtherUser } = useSelector((state) => state.OtherUser);
  const { PostData } = useSelector((state) => state.PostData);
  const dispatch = useDispatch();

  const [userInfo, SetUesrInfo] = useState(user);

  const [isFollow, setIsFollow] = useState(false);
  const [isFollower, setIsFollower] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPostList = async () => {
      try {
        //요청 시작 시  error와 postList 초기화
        setError(null);
        setPostList([]);

        //loading 상태 true로 바꾸기
        setLoading(true);

        const response = await axios.get(
          "https://i5d104.p.ssafy.io/api/post/user/" + user.id + "/" + user.id
        );

        console.log(response);
        console.log(response.data.data);
        setPostList(response.data.data.postInfo);
      } catch (e) {
        setError(e);
      }

      setLoading(false);
    };
    fetchPostList();
  }, []);
  useEffect(() => {
    return () => {};
  }, [postList]);
  let history = useHistory();
  const modifyProfileHandler = () => {
    history.push({
      pathname: "/main/account/userInfo/modify",
    });
  };
  const showFollowModal = () => {
    setIsFollow((prev) => !prev);
  };

  const showFollowerModal = () => {
    setIsFollower((prev) => !prev);
  };
  const showBlockModal = () => {
    setModalShow((prev) => !prev);
  };
  // 팔로우하기, 차단하기
  const MakeRelation = (flag) => {
    // flag가 true면 팔로우
    // flag가 false면 차단
    axios({
      method: "post",
      url: "https://i5d104.p.ssafy.io/api/relation",
      data: {
        send: user.id,
        receive: OtherUser.user.id,
        state: flag,
      },
    })
      .then((response) => {
        let newOtherUser = Object.assign({}, OtherUser);
        newOtherUser.relationInfo = { ...response.data.data };
        dispatch(setOtherUser(newOtherUser));
        if (!flag) {
          alert(OtherUser.user.nickname + "님을 차단했습니다.");
          history.push({
            pathname: "/main/feed",
          });
        } else {
          alert(OtherUser.user.nickname + "님을 팔로우했습니다.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // 팔로우해제, 차단풀기
  const RemoveRelation = (flag) => {
    // flag가 true면 팔로우해제
    // flag가 false면 차단해제
    axios({
      method: "delete",
      url: "https://i5d104.p.ssafy.io/api/relation",
      data: {
        send: user.id,
        receive: OtherUser.user.id,
        state: flag,
      },
    })
      .then((response) => {
        let newOtherUser = Object.assign({}, OtherUser);
        newOtherUser.relationInfo = { ...response.data.data };
        dispatch(setOtherUser(newOtherUser));
        if (!flag) {
          alert(OtherUser.user.nickname + "님을 차단해제 했습니다.");
        } else {
          alert(OtherUser.user.nickname + "님을 팔로우해제 했습니다.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="userInfo-wrapper">
      <div className="userInfo-row">
        <div className="userInfo-col">
          <div className="userInfo">
            <div className="userImg">
              <img
                className="userImg-img"
                alt="my-image"
                // src={user.image != null ? user.image : `${userImg}`}
                src={OtherUser.user.id === user.id ? user.image : OtherUser.user.image}
              />
            </div>
            <div className="userInfo-nickname">
              <span>{OtherUser.user.id === user.id ? user.nickname : OtherUser.user.nickname}</span>
              {/* 자기 계정일 경우 아래의 태그 및 모달을 띄우지 않음  */}
              {OtherUser.user.id === user.id ? (
                ""
              ) : (
                <HiIcons.HiOutlineDotsHorizontal id="block-icon" onClick={showBlockModal} />
              )}
              {modalShow && <BlockModal showBlockModal={showBlockModal} />}
            </div>

            {/* 자기 계정일 경우 userInfo-follow 안보이게 하고 userInfo-modify 보이게
            타인의 계정일 경우 userInfo-modify 안보이게 하고 userInfo-follow 보이게 */}
            {OtherUser.user.id === user.id ? (
              <div className="userInfo-modify">
                <button className="userInfo-modify-btn" onClick={modifyProfileHandler}>
                  프로필 편집
                </button>
              </div>
            ) : OtherUser.relationInfo.follow ? (
              <div className="userInfo-follow">
                <button className="userInfo-modify-btn" onClick={() => MakeRelation(true)}>
                  팔로우
                </button>
              </div>
            ) : (
              <div className="userInfo-follow">
                <button className="userInfo-modify-btn" onClick={() => RemoveRelation(true)}>
                  팔로우 해제
                </button>
              </div>
            )}
            <div className="userInfo-introduce">
              <span className>
                {OtherUser.user.id === user.id ? user.introduce : OtherUser.user.introduce}
              </span>
            </div>

            <div className="userFriend">
              <hr className="usrf-hr" />
              <div className="userFriend postcnt">
                <p className="uf-title">
                  <b>게시물</b>
                </p>
                <div className="uf-numb">
                  {OtherUser.user.id === user.id ? postList.length : OtherUser.postInfo.length}
                </div>
              </div>
              <div className="userFriend follow" onClick={showFollowModal}>
                <p className="uf-title">
                  <b>팔로우</b>
                </p>
                <div className="uf-numb">
                  {OtherUser.user.id === user.id ? user.following : OtherUser.user.following}
                </div>
              </div>

              {isFollow && <FollowModal showFollowModal={showFollowModal} />}

              <div className="userFriend follower" onClick={showFollowerModal}>
                <p className="uf-title">
                  <b>팔로워</b>
                </p>
                <div className="uf-numb">
                  {OtherUser.user.id === user.id ? user.follower : OtherUser.user.follower}
                </div>
              </div>
              {isFollower && <FollowerModal showFollowerModal={showFollowerModal} />}
            </div>
          </div>
          <hr className="usrf-hr" />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
