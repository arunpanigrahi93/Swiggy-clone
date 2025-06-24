import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "40px 0 20px",
        marginTop: "40px",
      }}
    >
      <Container>
        <Row className="mb-4">
          <Col md={3}>
            <h5 className="text-uppercase mb-3">Company</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Team
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="text-uppercase mb-3">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Partner with Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Ride with Us
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="text-uppercase mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="text-uppercase mb-3">We Deliver To</h5>
            <ul className="list-unstyled">
              <li>
                <span>Kakinada</span>
              </li>
              <li>
                <span>Hyderabad</span>
              </li>
              <li>
                <span>Vijayawada</span>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <p style={{ fontSize: "14px", color: "#aaa" }}>
              &copy; {new Date().getFullYear()} Swiggy Clone. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
