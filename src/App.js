import logo from './logo.svg';
//Libaries
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Carousel, Image, Container, Row, Col } from 'react-bootstrap'
//Pages
import Home from './pages/Home'
import Navbar from './pages/myNav'
import History from './pages/History'
import ParadigmAndTyping from './pages/ParadigmAndTyping'
import ControlStructures from './pages/ControlStructures'
import SupportForDataAbstractions from './pages/SupportForDataAbstractions'
import Semantics from './pages/Semantics'
import Syntax from './pages/Syntax'
import Character from './pages/Character'
import Footer from './components/Footer'
import InfoSec from './components/InfoSec.js'
import ThreeDemo from './pages/ThreeDemo'
//Images
import img1 from './images/Enviorment.svg'
import img2 from './images/Frameworks.svg'
import img3 from './images/React.svg'
/**
 * Main App loading area, organize pages here, links from myNav are handled here, this is where the switch nav router goes
 */
function App() {
  return (
    <div className="App">
      <Navbar />
          <Row>
            <Col sm={2}>
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
            </Col>

            <Col xl={8}>
              <BrowserRouter>
                <Switch>
                  <Route path='/' component={Home} exact />
                  <Route path='/History' component={History} exact />
                  <Route path='/ParadigmAndTyping' component={ParadigmAndTyping} exact />
                  <Route path='/ControlStructures' component={ControlStructures} exact />
                  <Route path='/Semantics' component={Semantics} exact />
                  <Route path='/Chracteristics' component={Character} exact />
                  <Route path='/SupportForDataAbstractions' component={SupportForDataAbstractions} exact />
                  <Route path='/Syntax' component={Syntax} exact />
                  <Route path='/ThreeDemo' component={ThreeDemo} exact />
                  <Route path='/Other' component={Home} exact />
                </Switch>
              </BrowserRouter>
            </Col>

            <Col sm={2}>
              <InfoSec
                header="React"
                description="For this website we are using react, a Javascript framework developed by Facebook for creating reusable components and reactive websites"
                image={img3}
              />
            </Col>
          </Row>
      <Footer />
    </div>
  );
}

export default App;
