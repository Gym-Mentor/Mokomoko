import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Detail from "./profile/Detail";
import "../../css/main/DetailPresenter.css";
import Header from "../header/Header";
import { IoIosArrowBack } from "react-icons/io";

const DetailPresenter = ({ location: state }) => {
  const onClickBack = () => {
    console.log("뒤로 가는거 처리");
  };
  return (
    <div className="detail-presenter-wrapper">
      <Row id="detail-presenter-row">
        <div className="headerDiv">
          <div className="headerDiv icon">
            <IoIosArrowBack onClick={onClickBack} />
          </div>
          <div className="headerDiv title">사진</div>
        </div>
        <Col></Col>
        <Col md={6} className="detail-col">
          <div className="details">
            <Detail />
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default DetailPresenter;
