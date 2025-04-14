import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import logo from "../../Assets/logo.png";
import useNavBar from "../../hooks/useNavBar";
import navLinks from "../../data/navLinks";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const { isExpanded, isScrolled, handleToggle, handleCloseNav } = useNavBar();

  return (
    <Navbar
      expanded={isExpanded}
      fixed="top"
      expand="md"
      className={isScrolled ? styles.sticky : styles.navbar}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img src={logo} className={`img-fluid ${styles.logo}`} alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle}
          className={styles.navbarToggler}
        >
          <span />
          <span />
          <span />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {navLinks.map(({ to, label, icon }, index) => (
              <Nav.Item key={index}>
                <Nav.Link as={Link} to={to} onClick={handleCloseNav} className={styles.navLink}>
                  {React.cloneElement(icon, { style: { marginBottom: "2px" } })} {label}
                </Nav.Link>
              </Nav.Item>
            ))}

            <Nav.Item className={styles.forkBtn}>
              <Button
                href="https://github.com/edvaldovitor250"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.forkBtnInner}
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
