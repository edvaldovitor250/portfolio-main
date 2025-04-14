import React from "react";
import { Row, Col } from "react-bootstrap";
import toolStackData from "../../data/toolStack";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolStackData.map((ToolIcon, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <ToolIcon />
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
