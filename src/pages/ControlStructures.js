/** File: ControlStructures.js
 * Author: Lloyd Dakin, Fernando Ruiz
 * Course: CSc 372
 * Assignment: Final Porject part 3
 * Instructor: Dr. McCann
 * TAs: Josh, Tito
 * Due Date: 12/7
 * Description: The following class displays JavaScript Control Structures from our Language Study.
 * It also features interactive javascript output examples.
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Jumbotron, Button, Image, Table, ButtonGroup} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import img1 from '../images/Control_flow.svg'
import img2 from '../images/exControl.PNG'
import InfoSec from '../components/InfoSec'

/**
 * Var to store the styles of a component that can be edited and input
 */
var styles = {
    center: {
      textAlign: 'center'
    },
};

class ControlStructures extends React.Component{
    
    /**
     * The following function is used to demo control flow in JavaScript. It 
     * present a user with the example and they can toggle the diplsy of the control flows
     * output to see how control flow operate sin JS. The div "demo" is used to disply the 
     * example output.
     */
    demo() {
        var y = document.getElementById("demo");
        if (y.style.display === "none") {
            y.style.display = "block";
        } else {
            y.style.display = "none";
        }

        var text = "";
        var i;
        for (i = 0; i <= 10; i++) {
            if(i % 2 == 0){
                text += i + " is Even" + "<br>";
            } else{
                text += i + " is Odd" + "<br>" ;
            }
        }
        document.getElementById("demo").innerHTML = text;
    } 


    /**
     * The following function uses control flow to manage multiple table displays
     * depending on button press. Only one table is displayed at a time, the param X
     * is used to toggole the passed in param myDiv and set the other div styles
     * to none so that they are not displayed.
     */
    toggleTable(myDiv) {
        var div1 = document.getElementById("myDIV1");
        var div2 = document.getElementById("myDIV2");
        var div3 = document.getElementById("myDIV3");

        //div to display/undisplay
        var x = document.getElementById(myDiv);

        //set all others to none
        if (myDiv == "myDIV1") {
            div2.style.display = "none";
            div3.style.display = "none";
        } else if (myDiv == "myDIV2"){
            div1.style.display = "none";
            div3.style.display = "none";
        } else{
            div1.style.display = "none";
            div2.style.display = "none";
        }

        //toggle passe din div basedon button press
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    render() {
        return (
        <div className="ControlStructures">
            <header className = "ControlStructures"></header>

            <Jumbotron>
            <InfoSec 
            header="Control Structures" 
            description="Control flow in JavaScript can be managed by the following:" 
            image={img1}
            />
            <p></p> 

            {/* Tables to display using fcn toggleTable*/}
            <div id = "buttonGroup" style={styles.center}>
            <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onClick={() => this.toggleTable("myDIV1")}>Selection</Button>
            <Button variant="primary" onClick={() => this.toggleTable("myDIV2")}>Repetition</Button>
            <Button variant="primary" onClick={() => this.toggleTable("myDIV3")}>Additional</Button>
            </ButtonGroup>
            </div>

            <p></p>

            {/*Divs to display below*/}
            <div id = "myDIV1" style={{display:"none"}}>
                <Table striped bordered hover variant="info">
                <thead>
                <tr>
                    <th>Selection</th>
                    <th>Description: Specifies...</th> 
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>if</td>
                    <td>
                    the block of code to be executed for when the condition is true.
                    </td>
                </tr>
                <tr>
                    <td>else</td>
                    <td>
                    the block of code to be executed for when the other selection
                    statements are false.
                    </td>
                </tr>
                <tr>
                    <td>else if</td>
                    <td>
                    a new condition for code block, executes if the previous
                    selection statement is false.
                    </td>
                </tr>
                <tr>
                    <td>switch</td>
                    <td>
                    alternative blocks of execution code.
                    </td>
                </tr>
                </tbody>
                </Table>
        </div>

        <p></p>

        <div id = "myDIV2" style={{display:"none"}}>
            <Table striped bordered hover variant="warning">
            <thead>
            <tr>
                <th>Repetition:</th>
                <th>Description: Loops through...</th> 
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>for</td>
                <td>
                a block of code a number of times                        
                </td>
            </tr>
            <tr>
                <td>for/in</td>
                <td>
                object properties
                </td>
            </tr>
            <tr>
                <td>for/of</td>
                <td>
                an iterable object’s values
                </td>
            </tr>
            <tr>
                <td>while</td>
                <td>
                a block of code while condition is true
                </td>
            </tr>
            <tr>
                <td>do/while</td>
                <td>
                a block of code while condition is true
                </td>
            </tr>
            </tbody>
            </Table>
        </div>

        <p></p>

        <div id = "myDIV3" style={{display:"none"}}>
            <Table striped bordered hover variant="danger">
            <thead>
            <tr>
                <th>Additional Control flow:</th>
                <th>Description: </th> 
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Try.. Catch</td>
                <td> 
                Marks a block of code to try/execute and specifies at least
                one response to a specified possible exception
                </td>
            </tr>
            <tr>
                <td>Finally</td>
                <td>
                Execute block of code after Try..Catch, whether or not an
                exception was caught.
                </td>
            </tr>
            <tr>
                <td>break;</td>
                <td>
                Keyword terminates current loop.
                </td>
            </tr>
            <tr>
                <td>continue;</td>
                <td>
                Keyword breaks current iteration, continues if loop is still
                valid.
                </td>
            </tr>
            </tbody>
            </Table>
        </div>

        <Accordion defaultActiveKey="1">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                Example of Control Flow in JS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                <Image src={img2} thumbnail />
                <p></p>
                <Button variant="info" onClick={this.demo}>Show Output</Button>
                <p></p>
                <div id = "demo" style={{display:"none"}}>
                </div>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
        </Jumbotron>

        </div>
        );
    }
}


export default ControlStructures;