import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel, Image, Container } from 'react-bootstrap'
import img1 from '../images/Enviorment.svg'
import img2 from '../images/Frameworks.svg'
import img3 from '../images/React.svg'
import InfoSec from '../components/InfoSec'

/**
 * Home page, should introduce us maybe? introduce language? maybe we can make it like a project looking website
 */
class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <InfoSec 
          header="Javascript as a Web glue" 
          description="Javascript is often used with HTML and CSS to make reactive and dynamic websites" 
          image={img1}
        />
        <InfoSec 
          header="Frameworks" 
          description="There are a multitude of frameworks that help organize Javascript on websites including React, Angular, and Vue" 
          image={img2}
        />
        <InfoSec 
          header="React" 
          description="For this website we are using react, a Javascript framework developed by Facebook for creating reusable components and reactive websites" 
          image={img3}
        />
      </div>
    );
  }
}

export default Home;