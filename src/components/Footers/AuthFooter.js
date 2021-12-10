import React from "react";

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

function AuthFooter() {
  return (
    <>
      <footer className="footer position-absolute fixed-bottom">
        <Container>
          <nav>
            {/* <ul className="footer-menu d-flex justify-content-center">
              <li>
                <a className="m-0" href="#" onClick={(e) => e.preventDefault()}>
                  Home
                </a>
              </li>
              <li>
                <a className="m-0" href="#" onClick={(e) => e.preventDefault()}>
                  Company
                </a>
              </li>
              <li>
                <a className="m-0" href="#" onClick={(e) => e.preventDefault()}>
                  Portfolio
                </a>
              </li>
              <li>
                <a className="m-0" href="#" onClick={(e) => e.preventDefault()}>
                  Blog
                </a>
              </li>
            </ul> */}
            <p className="copyright text-center m-0">
              © {new Date().getFullYear()}{" "}
              <a href="">Ariswap NFT</a>, made with
              love for a better web
            </p>
          </nav>
        </Container>
      </footer>
    </>
  );
}

export default AuthFooter;
