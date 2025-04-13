import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import socialLinks from "../config/socialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Edvaldo Vitor</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {currentYear} Edvaldo Vitor</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {socialLinks.map(({ icon, url, label }, index) => (
              <li key={index} className="social-icons">
                <a
                  href={url}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
