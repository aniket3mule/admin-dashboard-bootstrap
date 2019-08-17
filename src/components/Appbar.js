import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap'

export default class Appbar extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(link) {
    this.props.props.history.push(`/${link}`)
  }

  render() {
   console.log("appbar props",this.props.props.location.pathname);
   
    return (
      <div>
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light" fixed="top" style={{boxShadow: "1px 1px 3px #dcd7d7"}}>
          <Navbar.Brand>Admin-Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav fill variant="tabs" className="mr-auto" defaultActiveKey={(this.props.props.location.pathname).toString().substring(1)}>
              <Nav.Item>
                <Nav.Link eventKey="admindashboard" onSelect={(e)=>this.handleClick(e, "admindashboard")}>Users</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="questionanswer" onSelect={(e)=>this.handleClick(e, "questionanswer")}>Q and A</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="payment" onSelect={(e)=>this.handleClick(e, "payment")}>Payment</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav >
              <Nav.Link ><Button variant="outline-primary">Logout</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    );
  }
}