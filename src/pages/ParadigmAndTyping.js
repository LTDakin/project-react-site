/** File: ParadigmAndTyping.js
 * Author: Fernando Ruiz
 * Course: CSc 372
 * Assignment: Final Porject part 3
 * Instructor: Dr. McCann
 * TAs: Josh, Tito
 * Due Date: 12/7
 * Description: The following class displays Paradigm And Typing from our Language Study.
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Jumbotron, Button, Image, Table} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import img1 from '../images/paradigm.svg'
import img2 from '../images/exType.PNG'
import img3 from '../images/exParadigm.PNG'
import InfoSec from '../components/InfoSec'

class ParadigmAndTyping extends React.Component{

    /**
     * The following function is used as an example for Javascript object orientedness,
     * through creation of a var person object. The example is displayed on the webpage
     * and this funtion is used to toggle the display of its output.
     */
    example1() {
        //toggle example output display
        var y = document.getElementById("example1");
        if (y.style.display === "none") {
            y.style.display = "block";
        } else {
            y.style.display = "none";
        }

        var person = {
            name:"Fernando",
            DOB:"09/13/1998",
            age:"22"
        }
        document.getElementById("example1").innerHTML = person.name + "<br>" + person.DOB + "<br>" + person.age;
    } 
    
    /**
     * The following function is used as an example for Javascript typing,
     * through creation of a variables. The example is displayed on the webpage
     * and this funtion is used to toggle the display of its output.
     */
    example2() {
        var y = document.getElementById("example2");
        if (y.style.display === "none") {
            y.style.display = "block";
        } else {
            y.style.display = "none";
        }

        var x = 100;
        var str = "Hello World!";

        document.getElementById("example2").innerHTML = str+ "<br>" + x;
    } 

    /**
     * Renders the paradigm and typing page as well as controls for the styled components
     */
    render() {
        return (
        <div className="History">
            <header className = "History"></header>

            <Jumbotron>
            <InfoSec 
                header="Paradigm" 
                description="JavaScript is considered a multi-paradigm language. However, it is primarily
                Object-Oriented with everything being considered an object, with the exception of primitives
                like Boolean,Null, String, Number, etc. It also supports OO capabilities such as encapsulation,
                aggregation, inheritance and polymorphism. In addition to Object-Orientedness, JS also has
                Functional paradigm features,with its support for First class functions. For example it can assign
                functions to variables, pass functions as arguments, and can return a function from another
                function, also known as a High order function." 
                image={img1}
            />

            <p></p>

            <Accordion defaultActiveKey="1">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                Example of Paradigm
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Image src={img3} thumbnail />
                        <p></p>
                        <Button variant="info" onClick={this.example1}>Show Output</Button>
                        <p></p>
                        <div id = "example1" style={{display:"none"}}>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>

            <p></p>

            <Card variant = "info">
                <Card.Body>
                        <Card.Title>Typing System</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Dynamic</Card.Subtitle>
                        <Card.Text>
                        JavaScript is a dynamically typed language with its values being checked during
                        runtime/execution. It is also a weakly typed language with its types being associated with its
                        value, opposed to an expression. Since the type is dictated by the value specifying the type in the
                        variable declaration is not required. Programmers can also create new types through the concept
                        of objects and classes, as well as using the instanceof method to check the data type.
                        As mentioned above in the Javascript paradigm, functions in JS are first-class objects, meaning
                        functions can be assigned to variables, passed as arguments, and returned from another function.
                        </Card.Text>
                    <Accordion defaultActiveKey="0">
                    </Accordion>
                </Card.Body>
            </Card>

            <p></p>

            <Card>
                <Accordion defaultActiveKey="1">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                Example of Typing
                </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Image src={img2} thumbnail />
                            <p></p>
                            <Button variant="info" onClick={this.example2}>Show Output</Button>
                            <p></p>
                            <div id = "example2" style={{display:"none"}}></div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>
            </Card>

            <p></p>
            <p></p>

            </Jumbotron>
        </div>
        );
    }
}


export default ParadigmAndTyping;