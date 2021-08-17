import React, { Component, useRef, useState } from "react";
import Slider from "react-slick";
import "../../../css/award/AwardUser.css";

// import 'slick-carousel/slick/slick-theme.css'; 슬라이더 구현시 참고한 사이트
// https://velog.io/@cookncoding/React-slick%EC%97%90-styled-components-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0

const AwardUser = () => {
  const [sliderPlay, setSliderPlay] = useState(false);
  const [sliderPause, setSliderPause] = useState(false);

  const playSlider = () => {
    setSliderPlay(true);
  };

  const pauseSlider = () => {
    setSliderPause(true);
  };
  const slider = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const test_user = [
    //9개 가져온다는 가정하에
    {
      id: "test1",
      img: "https://i.pinimg.com/564x/df/59/91/df59919e59912d4be6131ab437412e87.jpg",
    },
    {
      id: "test2",
      img: "https://i.pinimg.com/564x/df/59/91/df59919e59912d4be6131ab437412e87.jpg",
    },
    {
      id: "test3",
      img: "https://i.pinimg.com/564x/df/59/91/df59919e59912d4be6131ab437412e87.jpg",
    },
    {
      id: "test4",
      img: "https://i.pinimg.com/564x/df/59/91/df59919e59912d4be6131ab437412e87.jpg",
    },
    {
      id: "test5",
      img: "https://i.pinimg.com/564x/df/59/91/df59919e59912d4be6131ab437412e87.jpg",
    },
    {
      id: "test6",
      img: "https://i.pinimg.com/564x/df/59/91/df59919e59912d4be6131ab437412e87.jpg",
    },
    {
      id: "test7",
      img: "https://i.pinimg.com/564x/df/59/91/df59919e59912d4be6131ab437412e87.jpg",
    },
    {
      id: "test8",
      img: "https://i.pinimg.com/564x/df/59/91/df59919e59912d4be6131ab437412e87.jpg",
    },
    {
      id: "test9",
      img: "https://i.pinimg.com/564x/28/9e/fa/289efa2d92e57cc33d0ef5a3503d4973.jpg",
    },
  ];
  return (
    <div>
      <div className="awardUser-wrapper">
        <div className="awardUser-row">
          <div className="awardUser-col">
            <Slider ref={slider} {...settings}>
              <div className="awardUserItem">
                <div className="round-user">
                  <img src={test_user[0].img} alt="" />
                </div>
                <div className="round-user">
                  <img src={test_user[1].img} alt="" />
                </div>
                <div className="round-user">
                  <img src={test_user[2].img} alt="" />
                </div>
              </div>
              <div>
                <div className="round-user">
                  <img src={test_user[3].img} alt="" />
                </div>
                <div className="round-user">
                  <img src={test_user[4].img} alt="" />
                </div>
                <div className="round-user">
                  <img src={test_user[5].img} alt="" />
                </div>
              </div>
              <div>
                <div className="round-user">
                  <img src={test_user[6].img} alt="" />
                </div>
                <div className="round-user">
                  <img src={test_user[7].img} alt="" />
                </div>
                <div className="round-user">
                  <img src={test_user[8].img} alt="" />
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
