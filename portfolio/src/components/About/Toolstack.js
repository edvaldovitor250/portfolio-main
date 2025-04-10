import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiIntellijidea,
    SiDocker,
    SiGit,
    SiSonarqube,
    SiPycharm,


} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

            <Col xs={4} md={2} className="tech-icons">
                <SiIntellijidea />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPycharm />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSonarqube />
            </Col>
        </Row>
    );
}

export default Toolstack;