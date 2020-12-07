/** File: Semantics.js
 * Author: Lloyd Dakin, Fernando Ruiz
 * Course: CSc 372
 * Assignment: Final Porject part 3
 * Instructor: Dr. McCann
 * TAs: Josh, Tito
 * Due Date: 12/7
 * Description: The following class displays JavaScript Semantics from our Language Study.
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Jumbotron, Button, Image,Badge} from 'react-bootstrap';
import img1 from '../images/semantics.svg'
import InfoSec from '../components/InfoSec'

class Semantics extends React.Component{

    //Renders the Semantics page
    render() {
        return (
        <div className="Semantics">
            <header className = "Semantics"></header>

        <Jumbotron>
            <h1>
            Semantics <Badge variant="secondary">JS</Badge>
            </h1>

          <InfoSec 
            header="" 
            description="" 
            image={img1}
            />

          <p></p>

        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Scoping
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Javascript uses static scoping when dealing with ambiguous variables, for example if a variable
                is not found within a block in javascript it will then look for that variable in the surrounding block,
                similarly to JAVA.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
            Constants
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Beginning with ES2015 Javascript uses the keyword const to declare constants. Previously it
                was convention to name a var EXAMPLE_VAR to denote it was a constant. You must specify
                the value of the constant when it is declared. The value of a constant cannot be changed
                through reassignment and it cannot be redeclared. The value of a constant can be any legal
                expression including a function expression.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Storage Collection
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                It depends on the interpreter of JavaScript but the main one, V8, uses a heap dynamic to
                allocate storage. This can be seen if we observe JavaScript’s garbage collection processes. It is
                scattered around rather than in one place so this rules out a stack allocation style.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
            Garbage Collection
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                JavaScript uses an automatic memory management system also known as garbage collection.
                It monitors memory allocations and will decide when a block of memory can be deleted and
                reused. In the most naive way it's garbage collection operates based on whether there are any
                references pointing to an object. If that number is 0 then it is called “garbage.” A circular
                reference where two objects reference each other cannot be collected by the GC and will create
                a memory leak. This however is solved by the second GC algorithm also known as
                “Mark-and-sweep” which will determine objects garbage if they become unreachable.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

        </Accordion>
        </Jumbotron>

        </div>
        );
    }
}


export default Semantics;