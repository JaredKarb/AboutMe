import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="sticky-top header-bg bg-secondary opacity-75">
      <Container fluid className="mx-2">
        <Navbar.Brand href="/" className="text-light fs-3">About Jared Karbakhsh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-end">
            <Nav.Link href="#hero" className="text-light">Home</Nav.Link>
            <Nav.Link href="#about" className="text-light">About</Nav.Link>
            <Nav.Link href="#projects" className="text-light">Projects</Nav.Link>
            <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
