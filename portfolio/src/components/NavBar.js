import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import logo from "../Assets/logo.png";
import useNavBar from "../hooks/useNavBar";
import navLinks from "../data/navLinks";

const NavBar = () => {
  const { isExpanded, isScrolled, handleToggle, handleCloseNav } = useNavBar();

  return (
    <Navbar
      expanded={isExpanded}
      fixed="top"
      expand="md"
      className={isScrolled ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle}
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {navLinks.map(({ to, label, icon }, index) => (
              <Nav.Item key={index}>
                <Nav.Link as={Link} to={to} onClick={handleCloseNav}>
                  {React.cloneElement(icon, { style: { marginBottom: "2px" } })} {label}
                </Nav.Link>
              </Nav.Item>
            ))}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/edvaldovitor250"
                target="_blank"
                rel="noopener noreferrer"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
