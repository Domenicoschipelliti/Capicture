import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "/assets/Logo - Transparent.png";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="sfondo section">
      <Container className="con">
        <Navbar.Brand>
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" className="grandezza foto" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/collaborazioni"
              className="sezione text-color"
            >
              Collaborazioni
            </Nav.Link>
            <Nav.Link as={Link} to="/contatti" className="sezione text-color">
              Contatti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
