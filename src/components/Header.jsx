import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItemsObj = useSelector((state) => state.cart.items);

  // ✅ Count unique items only
  const cartCount = Object.keys(cartItemsObj).length;

  return (
    <Navbar
      bg="primary"
      data-bs-theme="dark"
      expand="lg"
      className="sticky-top"
    >
      {" "}
      <Container>
        <Navbar.Brand as={Link} to="/">
          Food App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart ({cartCount})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
