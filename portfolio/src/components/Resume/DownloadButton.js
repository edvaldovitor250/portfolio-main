import React from "react";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

const DownloadButton = ({ pdfLink }) => (
  <Button
    variant="primary"
    href={pdfLink}
    target="_blank"
    style={{ maxWidth: "250px" }}
  >
    <AiOutlineDownload />
    &nbsp;Download CV
  </Button>
);

export default DownloadButton;
