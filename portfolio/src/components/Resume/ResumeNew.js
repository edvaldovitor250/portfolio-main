import React from "react";
import { Container, Row } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import Particle from "../Particle";
import DownloadButton from "./DownloadButton";
import useWindowSize from "../../hooks/useWindowSize";
import pdf from "../../Assets/EdvaldoVitorCV.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeNew = () => {
  const width = useWindowSize();

  return (
    <Container fluid className="resume-section">
      <Particle />

      <Row className="justify-content-center position-relative mb-4">
        <DownloadButton pdfLink={pdf} />
      </Row>

      <Row className="resume justify-content-center">
        <Document file={pdf} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </Row>

      <Row className="justify-content-center position-relative mt-4">
        <DownloadButton pdfLink={pdf} />
      </Row>
    </Container>
  );
};

export default ResumeNew;
