import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'white' }}>
          Noti
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav className="me-auto">
            <Nav.Link href="#features" style={{ color: 'white' }}>
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: 'white' }}>
              Pricing
            </Nav.Link>
            
            </Nav>
          <Nav>
            <Nav.Link href="#deets" style={{ color: 'white' }}>
              More deets
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={{ color: 'white' }}>
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
