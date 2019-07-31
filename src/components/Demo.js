import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

export default class Demo extends React.Component {

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light" fixed="top">
          <Navbar.Brand href="#home">Admin-Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" variant="pills" defaultActiveKey="#features">
              <Nav.Link href="#features">Purchased</Nav.Link>
              <Nav.Link href="#pricing">Note Service</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    );
  }
}