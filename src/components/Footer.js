import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <img 
              src={logo} 
              alt="Logo" 
              className="footer-logo"
            />
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <div className="social-icon">
              <a 
                href="https://www.linkedin.com/in/pedro-rodrigo-5283a71b8/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a 
                href="https://github.com/Pedro-R-A-da-Silva" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a 
                href="https://wa.me/55083987203436?text=Lets%20Code%20?" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <img src={navIcon3} alt="WhatsApp" />
              </a>
            </div>
            <p className="mb-0">Copyright {currentYear}. All Rights Reserved</p>
            <p className="mb-0">Inspired by: https://github.com/judygab/</p>
            <p className="mb-0">Special thanks for the reference!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};