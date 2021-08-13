import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Detail from "./profile/Detail";
import "../../css/main/DetailPresenter.css";
import Header from "../header/Header";
import { IoIosArrowBack } from "react-icons/io";
import ContentHeader from "../header/ContentHeader";

const DetailPresenter = ({ location: state }, props) => {
  const onClickBack = () => {
    console.log("뒤로 가는거 처리");
  };
  return (
    <div className="detail-presenter-wrapper">
      <Row id="detail-presenter-row">
        <ContentHeader title="사진" />
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
