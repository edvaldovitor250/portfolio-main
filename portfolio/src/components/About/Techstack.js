import React from "react";
import { Row, Col } from "react-bootstrap";
import techStackData from "../../data/techStack";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStackData.map((TechIcon, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <TechIcon />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
