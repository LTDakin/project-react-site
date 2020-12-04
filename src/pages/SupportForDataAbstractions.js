import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab,Nav,ListGroup, Accordion, Card, Jumbotron, Button, Image,Badge,Row,Col,Toast} from 'react-bootstrap';
import img1 from '../images/data.svg'
import img2 from '../images/prototype.PNG'
import img3 from '../images/built_in_prototype.PNG'
import InfoSec from '../components/InfoSec'

class SupportForDataAbstractions extends React.Component{
 
  
    render() {
        return (
        <div className="SupportForDataAbstractions">
            <header className = "SupportForDataAbstractions"></header>
            <Jumbotron>
            <h1>
            Data Abstractions <Badge variant="primary">JS</Badge>
            </h1>
          <InfoSec 
            header="" 
            description="" 
            image={img1}
            />
          <p></p>
          <ListGroup>
        <ListGroup.Item>
        As we said JavaScript is weakly typed and this does not have built in support for data
        abstraction like other OOP languages. Replicating this however JavaScript uses Object
        Oriented JavaScript (OOJS). OOJS can achieve OOP functionalities like data abstraction.
        JavaScript has prototypes and closures, which are substitutes for Interfaces and abstract
        classes which JS does not have. Prototypes allow for objects to be reused.
        </ListGroup.Item>
        <ListGroup.Item variant="primary">
        Another way to create data abstractions is with JavaScript’s closure. A closure is a structure
        made from nested functions that allows a break through scope. In doing so, closures allow
        access to data within an inner scope that would normally not be accessible.
        </ListGroup.Item>
        <ListGroup.Item>
        JavaScript also has built in abstraction for things like map, filter, and reduce.
        Array.prototype.map() is an example of a higher order function that abstracts creating a new
        array with the results of a function applied to that array.
        </ListGroup.Item>
        <ListGroup.Item variant="secondary" >
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3} >
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Prototype</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Built-in Prototype</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
              {<Image src={img2} thumbnail />}
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              {<Image src={img3} thumbnail />}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
        </Tab.Container>
        </ListGroup.Item>
        </ListGroup>
        </Jumbotron>
        </div>
        );
    }
}

export default SupportForDataAbstractions;