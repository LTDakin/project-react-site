import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Form, Nav, Button, FormControl} from 'react-bootstrap'
/**
 * NavBar component for all pages, stuff needs done, research reactDom Router and figure out how to link between pages
 */
class myNav extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Learn about Javascript</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">History</Nav.Link>
            <Nav.Link href="#pricing">Syntax</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default myNav;