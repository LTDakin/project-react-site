import React from 'react';
import { Navbar, Form, Nav, Button, FormControl } from 'react-bootstrap'
import logo from '../images/JavaScript-logo.png'
/**
 * NavBar component for all pages, stuff needs done, research reactDom Router and figure out how to link between pages
 * 
 */
//<Nav.Link href="#pricing">Syntax</Nav.Link>
class myNav extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
      Learn about JavaScript
    </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/History">History</Nav.Link>
            <Nav.Link href="/ParadigmAndTyping">Paradigm/Typing</Nav.Link>
            <Nav.Link href="/ControlStructures">Control Structures</Nav.Link>
            <Nav.Link href="Semantics">Semantics</Nav.Link>
            <Nav.Link href="/Chracteristics">Characteristics</Nav.Link>
            <Nav.Link href="SupportForDataAbstractions">Data Abstractions</Nav.Link>
            <Nav.Link href="Syntax">Syntax</Nav.Link>
            <Nav.Link href='/ThreeDemo'>Three.js Demo</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default myNav;