import React from 'react';
import ReactDOM from 'react-dom';
import { Accordion, Card, Jumbotron, Button } from 'react-bootstrap'
/**
 * Page about the different characteristics of Javascript using JSX
 */
class Character extends React.Component {
  render() {
    return (
      <div className="Character">
        <Jumbotron>
          <h1>Desirable Language Characteristics</h1>
          <p>
            Language characteristics are aspects of a language that programmers value and use. They include Efficiency,
            Regularity, Security, and Extensibility. Look below to learn more about how JavaScript implements these 
            ideas! 
          </p>
        </Jumbotron>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Efficiency
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Being one of the biggest languages in the world and used in almost all modern frontend applications,
                JavaScript efficiency can be a pretty big point of interest. Interpreters are constantly being updated
                and improved for the language which lends to making things more efficient and faster with every iteration.
                This is a big draw for developers because well maintained interpers will make sure the code is executed efficiently.
                JavaScript is the fastest dynamic typing language in the world, and is only 2-7 times slower than C++.
                JavaScript has asynchronous non blocking natures that make it extremely efficient for high concurrency environments.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Regularity
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Orthogonality being an aspect of regularity, can be observed with JavaScripts language construct function return.
                For example, JS can return values of all data types including objects and functions, so it does not behave differently for different values.
                Generality being an aspect of regularity, can also be observed in JavaScript with the equals operator, which performs a comparison using type coercion.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Security/Reliability
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                A common security problem with Javascript is that since it is a scripting language, malicious actors can deliver scripts through
                the DOM and run them on client computers. JavaScript has ways to protect against these cross-site-scripting (XSS) which are
                sandboxing and origin policy. Sandboxing allows JS to run separately so they can only access approved resources or tasks.
                Another is origin policy which restricts only allowing JS code on the current site to be accessed and blocks other sites.
                With Javascripts weak typing however it does raise some security and reliability concerns. It is easier for programmers to
                pass the wrong variables or do math on strings and booleans when they did not mean to. This provides avenues for attack and
                vulnerabilities in the language. Programmers must make sure to protect against such attacks, and be careful with the typing
                in the own code they write.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Extensibility
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                JavaScript is praised as being a universal language. It can handle web front ends with React.js, mobile applications using
                React Native or Electron, Rest APIs with Node.js, and can be used in microcontrollers. This flexibility is what has lended
                to JavaScripts success and popularity. Essentially JavaScript can be a full stack team’s only language which makes solving
                problems and extending the project's capabilities a breeze. JavaScript also has a huge library of code through npm, the largest
                in the world. It is built into many modern services like AWS lambda and Newrelic. All of this combined lends JavaScript huge
                potential for future growth with very little effort to implement new things in the language.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default Character;