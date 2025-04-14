import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import socialLinks from "../../data/socialLinks";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container fluid className={styles.footer}>
      <Row>
        <Col md="4" className={styles.copywright}>
          <h3>Designed and Developed by Edvaldo Vitor</h3>
        </Col>
        <Col md="4" className={styles.copywright}>
          <h3>Copyright © {currentYear} Edvaldo Vitor</h3>
        </Col>
        <Col md="4" className={styles.footerBody}>
          <ul className={styles.footerIcons}>
            {socialLinks.map(({ icon, url, label }, index) => (
              <li key={index} className={styles.socialIcon}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={styles.iconLink}
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
