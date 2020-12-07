/** File: Home.js
 * Author: Lloyd Dakin, Fernando Ruiz
 * Course: CSc 372
 * Assignment: Final Porject part 3
 * Instructor: Dr. McCann
 * TAs: Josh, Tito
 * Due Date: 12/7
 * Description: The following class welcomes the user to our website with a small greeting
 * and description of our webiste. It is used to represent a typical home/welcome page.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Jumbotron } from 'react-bootstrap'
import welcome from '../images/Welcome.svg'
import InfoSec from '../components/InfoSec'

class Home extends React.Component {
  
  /**
   * Renders the page as well as controls for the styled components
   */
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