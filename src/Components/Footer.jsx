import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="alig-item-center">
          <Col>
            <img src={logo} alt="" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div>
              <a href="">
                <img src={navIcon1} alt="" />
              </a>
              <a href="">
                <img src={navIcon2} alt="" />
              </a>
              <a href="">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>CopyRight 2024. All Right Reserved </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
