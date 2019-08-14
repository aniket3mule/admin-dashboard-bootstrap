import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default class Appbar extends React.Component {

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light" fixed="top">
          <Navbar.Brand href="#home">Admin-Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" variant="pills" defaultActiveKey="#features">
              
            </Nav>
            <Nav>
            <Link to='/register' href="#purchased">Purchased</Link>
              <Link to='/register'>Note Service</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    );
  }
}