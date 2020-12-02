/**
 * testing branch..
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Jumbotron, Button, Image, Table} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import img1 from '../images/History.png'
import InfoSec from '../components/InfoSec'
class History extends React.Component{
    toggleTable() {
            var x = document.getElementById("myDIV");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
    }

    render() {
        return (
        <div className="History">
            <header className = "History"></header>

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
            
            <div id = "myDIV" style={{display:"none"}}>
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


            <Accordion defaultActiveKey="0">
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