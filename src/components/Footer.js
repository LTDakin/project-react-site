import React from 'react';
import { Row,Col, Container } from 'react-bootstrap'
import logo from '../images/JavaScript-logo.png'
/**
 * NavBar component for all pages, stuff needs done, research reactDom Router and figure out how to link between pages
 */
class Footer extends React.Component {
  render() {
    return (
      <div style={{  paddingTop:'10px'}} className="Footer">
        <Container fluid style={{  paddingTop:'10px', backgroundColor: 'rgb(247,223,30)' }}>
          <Row style={{ alignItems: 'center', justifyContent: 'center', height:'100px'}}>
            <Col style={{ alignItems: 'center', justifyContent: 'center', color:'white'}}>CSC 372 Final Project</Col>
            <Col style={{ alignItems: 'center', justifyContent: 'center', color:'white'}}>Made by fernprog and dakin</Col>
            <Col style={{ alignItems: 'center', justifyContent: 'center', color:'white'}}>Made with React-Bootstrap, Javascript</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;