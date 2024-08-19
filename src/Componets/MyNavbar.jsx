import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "/assets/Logo - Transparent.png";

const MyNavbar = () => {
  const [selectedItem, setSelectedItem] = useState(() => {
    return parseInt(localStorage.getItem("selectedItem")) || null;
  });

  useEffect(() => {
    localStorage.setItem("selectedItem", selectedItem);
  }, [selectedItem]);

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="sfondo section">
      <Container className="con">
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="grandezza foto" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/lavori"
              className={`item ${
                selectedItem === 4 ? "selected sezione" : "text-color sezione"
              }`}
              onClick={() => handleItemClick(4)}
            >
              Collaborazioni
            </Nav.Link>
            <Nav.Link
              href="/contatti"
              className={`item ${
                selectedItem === 5 ? "selected sezione" : "text-color sezione"
              }`}
              onClick={() => handleItemClick(5)}
            >
              Contatti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
