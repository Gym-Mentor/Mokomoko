import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../css/main/Compass.css";
const Compass = () => {
  return (
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col className="side-col">1 of 3</Col>
        <Col className="main-col">2 of 3</Col>
        <Col className="side-col">3 of 3</Col>
      </Row>
    </Container>
  );
};

export default Compass;
