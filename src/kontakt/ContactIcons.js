import React, { Component } from "react";
import { Col } from 'react-bootstrap';
import { getClientData } from "../DataModelEngine";

import envelope from './../icons/envelope.svg';
import ring from './../kontakt/ring.svg';


class ContactIcons extends Component {
  render ()
 {
    return (
      <Col xs={12} lg={{span: 2}}>
      <a className="contact-data" name='ring' href={'tel:'+getClientData('clientPhone')}>
        <div id="contact-data">
          <div style={
            {
                backgroundImage: 'url('+ring+')',
                backgroundRepeat: 'no-repeat',
                width: "40%",
                height: "40%",
                position: "absolute",
                filter: 'invert(1)',
                top: '45%',
                left: '40%',
                transform: 'rotateZ(-15deg)'
            }
          }/>
          <h1>
            {getClientData('clientFancyPhone')}
          </h1>
        </div>
      </a>
      <a className="contact-data" name='email' href={"mailto:"+getClientData('clientEmail')}>
        <div id="contact-data" style={{opacity: 0.8, backgroundColor: '#00001F'}}>
        <div style={{
          backgroundImage: 'url('+envelope+')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          width: "40%",
          height: "40%",
          filter: 'invert(1)',
          position: "absolute",
          top: '45%',
          left: '33%',
          }}>
        </div>
          <h5>
            {getClientData('clientEmail')}
          </h5>
        </div>
        </a>
    </Col>
    );
  }
}

export default ContactIcons;
