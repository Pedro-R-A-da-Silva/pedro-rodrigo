import { Container, Row, Col } from "react-bootstrap";
import React, { Component }  from 'react';
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={15} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/pedro-rodrigo-5283a71b8/" target="_blank" ><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/Pedro-R-A-da-Silva" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="https://wa.me/55083987203436?text=Lets%20Code%20?" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved to:</p>
            <p> https://github.com/judygab/</p>
            <p>and ctrl+c & ctrl+v</p>
            <p>thanks a lot!!!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
