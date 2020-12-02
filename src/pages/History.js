/**
 * testing branch..
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/history.css';
class History extends React.Component{
    sayHello() {
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
            <div id = "main">
            <h2>JavaScript History</h2>
                <p> 
                    JavaScript, originally named Mocha, was created by Brendan Eich in 1995 at Netscape
                    Communications. In response to Microsoft’s Internet Explorer project, the platform Netscape
                    partnered with the creators of Java at Sun Microsystems. Following the hype of Java, they
                    decided to propose Mocha as a companion language to Java, changing the name to Javascript as
                    a marketing ploy to gain acceptance. Its marketing was short-lived in response to its
                    performance, and it became considered as UI glue by Java developers. However, JS acting as
                    glue is what the internet needed to flourish. JavaScript allowed programmers to react to events
                    and construct interactive components, which made it rise in popularity to become known as the
                    lingua franca (common language) of the web.
                </p>

                
                <p>
                    In 1997, language specification became managed and maintained by European Computer
                    Manufacturers Association. Major additions to the language are summarized below.
                </p>
                <button onClick={this.sayHello}>Display Table Using JS</button>
            </div>

            <div id = "myDIV" style={{display:"none"}}>
                    <table>
                    <tr>
                        <th>Ver</th>
                        <th>Year</th> 
                        <th>Description</th>
                    </tr>
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
                    </table>
                </div>
                <div id = "main">
                    <p>
                    Additional Information: JavaScript was written in only 10 days and was heavily influenced by
                    the following languages: Self, Scheme, Java and C. JS is part of the three main components of
                    the World Wide Web, the other two being HTML and CSS. It is supported by all modern Web
                    browsers that have built-in interpreters. Despite the similarities between JavaScript and Java,
                    such as their name, standard libraries and syntax, they have significant differences. For example,
                    Java is compiled into bytecode and Javascript can be interpreted by a browser.
                    </p> 
                </div>
        </div>
        );
    }
}


export default History;