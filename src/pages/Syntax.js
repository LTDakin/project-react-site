import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Jumbotron, Button, Image, Table} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import img1 from '../images/paradigm.svg'
import img2 from '../images/exType.PNG'
import img3 from '../images/exParadigm.PNG'
import InfoSec from '../components/InfoSec'
class Syntax extends React.Component{ 

    render() {
        return (
        <div className="Syntax">
            <header className = "Syntax"></header>
            <Jumbotron>
          <h1>NOT DONE Syntax</h1>
          <p>
            Appealing Syntax Choices:
            A syntax choice that I think is very useful is JavaScripts use of the fat array =&gt;. This operator
            provides a concise syntax for writing function expressions and is used a lot in programs for
            small functions. The =&gt; arrow was introduced in ES6 and allows us to forgo using the function
            or return keywords.
          </p>
          <p>
            This format is very appealing and makes code writing a lot shorter for small functions as well as
            still being very readable and I think it was a good choice for the representation of function
            shortening.
          </p>
        </Jumbotron>
            <Alert variant="dark">
            <Alert.Heading>The Future </Alert.Heading>
            <p>
            A syntax choice that I found could be a little confusing would be the way that JavaScript handles
            arguments. In it's current form when you pass arguments to a function like function(“hello”,
            “world”, “goodbye”, “world”) JavaScripts allows you to access the arguments in an array-like
            object. Arguments[0] would refer to “hello” in this case. I find this to be a little vague because
            with a function that might take lots of different arguments of different types a programmer could
            get easily confused which argument is where in the array instead of just referring to it with a
            variable name like in JAVA. This does however prove useful for functions that take an
            unspecified number of arguments because then it allows you to iterate over the arguments
            array. I think a good way to change this would be to allow JavaScript to support referencing
            variables by a name as well as in the arguments array format. This way you can use the best of
            both worlds, readability and the ability to iterate over n arguments.
            </p>
            <hr />
            <p className="mb-0">
            Another syntax idea that Javascript employs that I find messy is the way it treats booleans and
            integer math. If you were to write true+1 the result would be 2. Javascript treats booleans flags
            as integers when applied to operators. False is equal to 0 and True is equal to 1. I’m not sure if
            there's a niche use for this, but I think adding a little stronger typing to booleans would be more
            readable and reduce programmer error.
            </p>
            </Alert>
        </div>
        );
    }
}


export default Syntax;