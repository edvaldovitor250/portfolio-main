import React from "react";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import styles from "../../styles/DownloadButton.module.css"; 

const DownloadButton = ({ pdfLink }) => (
  <Button
    variant="primary"
    href={pdfLink}
    target="_blank"
    className={styles.downloadButton}
  >
    <AiOutlineDownload />
    &nbsp;Download CV
  </Button>
);

export default DownloadButton;
