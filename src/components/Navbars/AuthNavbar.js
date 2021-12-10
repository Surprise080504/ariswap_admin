import React from "react";
import { Link, useLocation } from "react-router-dom";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Col,
} from "react-bootstrap";

function AuthNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const location = useLocation();
  return (
    <>
      <Navbar
        className="position-absolute w-100"
        expand="lg"
        variant={collapseOpen ? "white" : "transparent"}
      >
        <Container>
          <div className="navbar-wrapper">
            <Navbar.Brand href="#pablo" onClick={(e) => e.preventDefault()}>
              <span className="d-none d-md-block">Ariswap NFTs</span>
              {/* <span className="d-block d-md-none">LBDP React</span> */}
            </Navbar.Brand>
          </div>
          <button
            className="navbar-toggler navbar-toggler-right border-0"
            type="button"
            onClick={() => setCollapseOpen(!collapseOpen)}
          >
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
          </button>
          <Navbar.Collapse className="justify-content-end" in={collapseOpen}>
            <Nav navbar>
              {/* <Nav.Item className="mr-1">
                <Nav.Link to="/dashboard" as={Link}>
                  <i className="nc-icon nc-chart-pie-35"></i>
                  Dashboard
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                className={
                  location.pathname === "/register-page"
                    ? "active mr-1"
                    : "mr-1"
                }
              >
                <Nav.Link to="/register-page" as={Link}>
                  <i className="nc-icon nc-badge"></i>
                  Register
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item
                className={
                  location.pathname === "/login"
                    ? "active mr-1"
                    : "mr-1"
                }
              >
                <Nav.Link to="/login" as={Link}>
                  <i className="nc-icon nc-mobile"></i>
                  Login
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AuthNavbar;
