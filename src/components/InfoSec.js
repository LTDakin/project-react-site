/** File: InfoSec.js
 * Author: Lloyd Dakin, Fernando Ruiz
 * Course: CSc 372
 * Assignment: Final Porject part 3
 * Instructor: Dr. McCann
 * TAs: Josh, Tito
 * Due Date: 12/7
 * Description: The following class displays the following props image (image to display in the info section),
 * header (title info to display), and description (Smaller text info to display).
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-bootstrap'

class InfoSec extends React.Component {
  render() {
    return (
      <Card border="light" style={{ width: '100%' }}>
        <Card.Img style={{float:'left', height: '400px' }} src={this.props.image} />
        <Card.Body style={{float:'right'}}>
          <Card.Title>{this.props.header}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default InfoSec;