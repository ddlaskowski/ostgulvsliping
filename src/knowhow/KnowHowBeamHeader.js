/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";


class KnowHowBeamHeader extends Component {
  constructor () {
    super();
	  this.state = {
    }
  } 
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }     
  render (){
    
    return (
        <Row id='know-how-beam-header'>
          <Col xs={12} sm={12} lg={12}><p style={{fontVariant: 'small-caps', fontSize: '2.8rem', padding: '0% 0',fontWeight: '500'}}>
               Nylige artikler</p></Col>
        </Row>
    )
}
}

export default KnowHowBeamHeader;
