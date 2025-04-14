import React from "react";
import { Row, Col } from "react-bootstrap";

function TechIcons({ icons = [] }) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((Icon, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default TechIcons;
