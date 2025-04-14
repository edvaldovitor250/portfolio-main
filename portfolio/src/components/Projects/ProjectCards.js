import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCards = ({ imgPath, title, description, ghLink, isBlog, demoLink }) => {
  const hasGitHubLink = Boolean(ghLink);
  const hasDemoLink = Boolean(demoLink);

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt={title} />

      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>

        {hasGitHubLink && (
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub /> &nbsp; {isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {hasDemoLink && !isBlog && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
