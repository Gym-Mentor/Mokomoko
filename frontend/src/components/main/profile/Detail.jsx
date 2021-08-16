import React, { useEffect ,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../css/main/profile/Detail.css";
import { getDetailNumber, setDetail } from "../../../modules/profileDetail";
import { IoIosArrowBack } from "react-icons/io";
import { Avatar } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import testImg from "../../../img/user.jpg";
import axios from "axios";
import { Col, Form, Row } from "react-bootstrap";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Detail = (props) => {

  const { user } = useSelector((state) => ({
    user: state.userInfo.user,
  }));

  const [userImage,setUserImage] = useState(null); //사용자 이미지
  const [userName,setUserName] = useState(null); //사용자 아이디
  const [post,setPost] = useState(null); //포스트 관련 정보 (좋아요 할지 안할지 등)
  const [tags,setTags] = useState(null); //태그 관련 정보
  const [content,setContent] = useState(null); //포스트 내용 관련 정보
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //사용자 정보 && 포스트 정보
  useEffect(() => {
    
    const fetchDetail = async () =>{
      try{
        //요청 시작 시  error와 postList 초기화
        setError(null);

        setUserImage(null);
        setUserName(null);
        setPost(null);
        setTags(null);
        setContent(null);

        //loading 상태 true로 바꾸기
        setLoading(true);

        const response = await axios.get("http://i5d104.p.ssafy.io:8080/post/"+props.postid);
        
        console.log(response);
        setUserImage(response.data.data.userImage);
        setUserName(response.data.data.userName);
        setPost(response.data.data.post);
        setTags(response.data.data.tags);
        setContent(response.data.data.contents);

      }catch(e){
        setError(e);
      }

      setLoading(false);
    }
    
    fetchDetail();

  }, []);


  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  
  return (
    <>
      <div className="detail-contents">
        {/* <div className="mobile-headerDiv">
          <div className="mobile-headerDiv icon">
            <IoIosArrowBack onClick={onClickBack} />
          </div>
          <div className="mobile-headerDiv title">사진</div>
        </div> */}
        <div className="mobile-detail-contents-wrapper">
          <div className="mobile-detail-userInfo">
            <Avatar className="mobile-detail-avatar" src={userImage} />
            <span className="mobile-detail-username">{userName}</span>
          </div>
          <div className="mobile-detail-img">
            {/* <img src={item.img} alt="image" /> */}
            <img className="mobile-detail-img" src={content[0].image} />
          </div>
          <div className="mobile-detail-things">
            <div className="mobile-detail-like">
              <FavoriteBorderOutlinedIcon fontSize="large" />
            </div>
            <div className="mobile-detail-comment">
              <ChatBubbleOutlinedIcon fontSize="large" />
            </div>
            <div className="mobile-detail-scrap">
              <BookmarkBorderOutlinedIcon fontSize="large" />
            </div>
          </div>
          <div className="mobile-detail-likecnt">
            <p className="mobile-detail-user-likecnt">좋아요 {post.likeCnt}</p>
          </div>
          <div className="mobile-detail-bottom">
            <h5 className="mobile-detail-desc-username">{userName}</h5>
            {content[0].description}
          </div>
        </div>



{/* 큰화면  */}

        <div className="dt">
          <div className="dt-details-content">
            <div className="dt-details-content2">
              <div className="dt-img-section">
                <img src={content[0].image} alt="test" />
              </div>
              <div className="dt-right-section">
                <div className="dt-right-header">
                  <div className="dt-detail-userInfo">
                    <Avatar className="dt-detail-avatar" src={userImage} />
                    <span className="dt-detail-username">{userName}</span>
                  </div>
                </div>
                <div className="dt-right-content">
                  <div className="dt-right-content-desc">
                    <div className="content-description">
                    {content[0].description}
                    </div>
                  </div>
                  <div className="dt-right-content-comment"></div>
                </div>
                <div className="dt-right-footer">
                  <div className="dt-right-footer-btn-section">
                    <div className="dt-detail-like">
                      <FavoriteBorderOutlinedIcon fontSize="large" />
                    </div>
                    <div className="dt-detail-comment">
                      <ChatBubbleOutlinedIcon fontSize="large" />
                    </div>
                    <div className="dt-detail-scrap">
                      <BookmarkBorderOutlinedIcon fontSize="large" />
                    </div>
                  </div>
                  <div className="dt-right-footer-likecnt">
                    <a href="#">
                      <b>좋아요 {post.likeCnt}</b>
                    </a>
                  </div>
                  <div className="dt-right-footer-upload-date">2일전</div>
                  <div className="dt-right-footer-upload-comment">
                    <input id="footer-comments" type="text" placeholder="댓글 입력..." />
                    <button id="footer-btn" type="submit">
                      게시
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
