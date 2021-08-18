import axios from "axios";
import React, { Component, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "../../../css/award/AwardUser.css";

// import 'slick-carousel/slick/slick-theme.css'; 슬라이더 구현시 참고한 사이트
// https://velog.io/@cookncoding/React-slick%EC%97%90-styled-components-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0

const AwardUser = (props) => {
  const [sliderPlay, setSliderPlay] = useState(false);
  const [sliderPause, setSliderPause] = useState(false);

  console.log("props awardUser : ", props);

  const playSlider = () => {
    setSliderPlay(true);
    setSliderPause(false);
  };

  const pauseSlider = () => {
    setSliderPlay(false);
    setSliderPause(true);
  };
  const slider = useRef();
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
  };

  return (
    <div>
      <div className="awardUser-wrapper">
        <div className="awardUser-row">
          <div className="awardUser-col">
            <h3 className="award-user-title">인기 사용자</h3>
            <Slider ref={slider} {...settings}>
              <div className="awardUserItem">
                <div className="award-user-profilepic">
                  {/* {userList.map((list, index) => (
                    <div key={index} className="round-user">
                      <img src={list.image} alt="" />
                    </div>
                  ))} */}
                  <div className="round-user">
                    <img src={props[0].image} alt="" />
                  </div>

                  <div className="round-user">
                    <img src={props[1].image} alt="" />
                  </div>
                  <div className="round-user">
                    <img src={props[2].image} alt="" />
                  </div>
                </div>
                <div className="award-usernick">
                  {/* {userList.map((list, index) => (
                    <div key={index} className="award-user-nick">
                      <span>{list.nickname}</span>
                    </div>
                  ))} */}
                  <div className="award-user-nick">
                    <span>{props[0].nickname}</span>
                  </div>
                  <div className="award-user-nick">
                    <span>{props[1].nickname}</span>
                  </div>
                  <div className="award-user-nick">
                    <span>{props[2].nickname}</span>
                  </div>
                </div>
              </div>

              <div className="awardUserItem">
                <div className="award-user-profilepic">
                  <div className="round-user">
                    <img src={props[3].image} alt="" />
                  </div>
                  <div className="round-user">
                    <img src={props[4].image} alt="" />
                  </div>
                  <div className="round-user">
                    <img src={props[5].image} alt="" />
                  </div>
                </div>
                <div className="award-usernick">
                  <div className="award-user-nick">
                    <span>{props[3].nickname}</span>
                  </div>
                  <div className="award-user-nick">
                    <span>{props[4].nickname}</span>
                  </div>
                  <div className="award-user-nick">
                    <span>{props[5].nickname}</span>
                  </div>
                </div>
              </div>
              <div className="awardUserItem">
                <div className="award-user-profilepic">
                  <div className="round-user">
                    <img src={props[6].image} alt="" />
                  </div>
                  <div className="round-user">
                    <img src={props[7].image} alt="" />
                  </div>
                  <div className="round-user">
                    <img src={props[8].image} alt="" />
                  </div>
                </div>
                <div className="award-usernick">
                  <div className="award-user-nick">
                    <span>{props[6].nickname}</span>
                  </div>
                  <div className="award-user-nick">
                    <span>{props[7].nickname}</span>
                  </div>
                  <div className="award-user-nick">
                    <span>{props[8].nickname}</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardUser;
