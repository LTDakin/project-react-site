import React from 'react';
import ReactDOM from 'react-dom';
import { Jumbotron } from 'react-bootstrap'
import welcome from '../images/Welcome.svg'
import InfoSec from '../components/InfoSec'

/**
 * Home page, should introduce us maybe? introduce language? maybe we can make it like a project looking website
 */
class Home extends React.Component {
  render() {
    return (
      <Jumbotron>
      <div className="Home">
        <InfoSec 
          header="Welcome to our page about Javascript for Part 3" 
          description="This website was made by us, from scratch using JavaScript, React, and JSX"
          image={welcome}
        />
      </div>
      </Jumbotron>
    );
  }
}

export default Home;