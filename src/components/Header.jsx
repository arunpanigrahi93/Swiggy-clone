import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItemsObj = useSelector((state) => state.cart.items);
  const cartCount = Object.keys(cartItemsObj).length;

  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      className="shadow-sm sticky-top"
      style={{ borderBottom: "1px solid #eaeaea" }}
    >
      <Container>
        {/* Left: Brand & Location */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-dark">
          <img
            src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png"
            alt="Swiggy"
            style={{ height: "30px", marginRight: "8px" }}
          />
          Swiggy Clone
        </Navbar.Brand>

        {/* Toggler */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Right: Nav Links */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            <Nav.Link as={Link} to="/" className="text-dark fw-medium">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/search" className="text-dark fw-medium">
              Search
            </Nav.Link>
            <Nav.Link as={Link} to="/offers" className="text-dark fw-medium">
              Offers
            </Nav.Link>
            <Nav.Link as={Link} to="/help" className="text-dark fw-medium">
              Help
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="text-dark fw-medium">
              🛒 Cart ({cartCount})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
