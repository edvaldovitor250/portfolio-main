import React from "react";
import { Container, Row } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import Particle from "../Particle";
import DownloadButton from "./DownloadButton";
import useWindowSize from "../../hooks/useWindowSize";
import pdf from "../../Assets/EdvaldoVitorCV.pdf";
import styles from "./Resume.module.css";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeNew = () => {
  const width = useWindowSize();

  return (
    <Container fluid className={styles.resumeSection}>
      <Particle />

      <Row className={styles.downloadRow}>
        <DownloadButton pdfLink={pdf} />
      </Row>

      <Row className={styles.resumeContainer}>
        <Document file={pdf} className={styles.pdfDocument}>
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </Row>

      <Row className={styles.downloadRowBottom}>
        <DownloadButton pdfLink={pdf} />
      </Row>
    </Container>
  );
};

export default ResumeNew;