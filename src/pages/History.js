/** File: History.js
 * Author: Lloyd Dakin, Fernando Ruiz
 * Course: CSc 372
 * Assignment: Final Porject part 3
 * Instructor: Dr. McCann
 * TAs: Josh, Tito
 * Due Date: 12/7
 * Description: The following class displays JavaScript History from our Language Study.
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Jumbotron, Button, Image, Table } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import img1 from '../images/History.svg'
import InfoSec from '../components/InfoSec'

class History extends React.Component {

    /**
     * The following function toggles table display using JS control flow to set
     * the display of the div accordingly based off button pressed.
     */
    toggleTable() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    //Renders the history component using JSX
    render() {
        return (
            <div className="History">
                <header className="History"></header>

                <Jumbotron>
                    <InfoSec
                        header="History of JS"
                        description="JavaScript, originally named Mocha, was created by Brendan Eich in 1995 at Netscape
                        Communications. In response to Microsoft’s Internet Explorer project, the platform Netscape
                        partnered with the creators of Java at Sun Microsystems. Following the hype of Java, they
                        decided to propose Mocha as a companion language to Java, changing the name to Javascript as
                        a marketing ploy to gain acceptance. Its marketing was short-lived in response to its
                        performance, and it became considered as UI glue by Java developers. However, JS acting as
                        glue is what the internet needed to flourish. JavaScript allowed programmers to react to events
                        and construct interactive components, which made it rise in popularity to become known as the
                        lingua franca (common language) of the web."
                        image={img1}
                    />
                    <p></p>
                    <p>
                        In 1997, language specification became managed and maintained by European Computer
                        Manufacturers Association. Major additions to the language are summarized below...
                    </p>

                    <p>
                        <Button variant="info" onClick={this.toggleTable}>Show Table</Button>
                    </p>

                    {/* Java Table Style set to none to hide */}
                    <div id="myDIV" style={{ display: "none" }}>
                        <Table striped bordered hover variant="warning">
                            <thead>
                                <tr>
                                    <th>Ver</th>
                                    <th>Year</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ES5</td>
                                    <td>2009</td>
                                    <td>
                                        <ul>
                                            <li>Baseline version of JS.</li>
                                            <li>JSON, format for storing and sending data.</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>ES6</td>
                                    <td>2015</td>
                                    <td>
                                        <ul>
                                            <li>Standard Modules (import and export)</li>
                                            <li>Promise Object</li>
                                            <li>Classes and Inheritance</li>
                                            <li>Let and Const</li>
                                            <li>Template Literals</li>
                                            <li>Object destructuring into variables</li>
                                            <li>Generator functions</li>
                                            <li>Map and Set</li>
                                            <li>Internationalisation API (String comparison, number and date/time formatting)</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>ES7</td>
                                    <td>2016</td>
                                    <td>
                                        <ul>
                                            <li>Array.prototype.includes()</li>
                                            <li>Exponential operator (**)</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>ES8</td>
                                    <td>2017</td>
                                    <td>
                                        <ul>
                                            <li>Async Functions</li>
                                            <li>Object.entries</li>
                                            <li>String padding</li>
                                            <li>Object Rest/Spread properties</li>
                                            <li>Asynchronous Iteration</li>
                                            <li>Promise.finally() function</li>
                                            <li>Additions to RegExp</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>ES9 (Current Ver.)</td>
                                    <td>2018</td>
                                    <td>
                                        <ul>
                                            <li>Baseline version of JS.</li>
                                            <li>JSON, format for storing and sending data.</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <p></p>
                        <p>*Note: This table was displayed using JavaScript</p>
                    </div>
                </Jumbotron>

                <Alert variant="info">
                    <Alert.Heading>Additional Information: </Alert.Heading>
                    <p>
                        JavaScript was written in only 10 days and was heavily influenced by
                        the following languages: Self, Scheme, Java and C. JS is part of the three main components of
                        the World Wide Web, the other two being HTML and CSS. It is supported by all modern Web
                        browsers that have built-in interpreters. Despite the similarities between JavaScript and Java,
                        such as their name, standard libraries and syntax, they have significant differences. For example,
                        Java is compiled into bytecode and Javascript can be interpreted by a browser.
                </p>
                    <hr />
                    <p className="mb-0">
                        Translators: VSCode, Atom IDE and WebStorm.
                </p>
                </Alert>

                <Accordion defaultActiveKey="1">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            References
                </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Alert variant={"light"}>
                                    <Alert.Link href="https://www.w3schools.com/Js/js_versions.asp">JS Versions</Alert.Link><br></br>
                                    <Alert.Link href="https://www.w3schools.in/javascript-tutorial/history-of-javascript/">JS History</Alert.Link><br></br>
                                    <Alert.Link href="https://medium.com/@_benaston/lesson-1a-the-history-of-javascript-8c1ce3bffb17#:~:te
                        xt=JavaScript%20was%20created%20by%20Brendan%20Eich%20in%201995,browser
                        %20in%20the%20world%20and%20enjoyed%20market%20dominance.">JS History Cont.</Alert.Link>
                                </Alert>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

            </div>
        );
    }
}


export default History;