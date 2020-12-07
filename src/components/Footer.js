/** File: Footer.js
 * Author: Lloyd Dakin, Fernando Ruiz
 * Course: CSc 372
 * Assignment: Final Porject part 3
 * Instructor: Dr. McCann
 * TAs: Josh, Tito
 * Due Date: 12/7
 * Description: The following class creates the footer to be dispalyed at 
 * the bottom of the webpage.
 */

import React from 'react';
import { Row,Col, Container } from 'react-bootstrap'
import logo from '../images/JavaScript-logo.png'

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