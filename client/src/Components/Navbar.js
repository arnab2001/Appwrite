import React from "react";
import "./Navbar.css";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
function Navbar1() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand href="" >Appwrite</Navbar.Brand>
          <Nav.Link href="" className="pl-50">Contribute</Nav.Link>
          <Nav.Link href="" className="pl-50">Dashboard</Nav.Link>
          <Nav.Link href="">
            <Button variant="outline-dark" className="btn-logout">
              Logout
            </Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Navbar1;
