/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import stairs from './../icons/stairs.svg';
import kitchentop from './../icons/kitchentop.svg';

class ServicesSliping extends Component {
  constructor () {
    super();
	  this.state = {
    }
  } 
      
  render (){

    return (
        <Row id='services-sliping'>
            <Col xs={12} sm={2} lg={4}>
                <div>
                    <p style={{fontVariant: 'none', fontSize: '2rem', padding: '0% 0',fontWeight: '300'}}>
                    Vi kan også slipe
                    </p>
                </div>
            </Col>        
            <Col xs={6} sm={4} lg={4}>
            <div style={{backgroundImage: 'url('+kitchentop+')'}}>
                <p style={{fontVariant: 'none', fontSize: '2rem', padding: '10% 0',fontWeight: '300'}}>
                benkeplate
                </p>
            </div>
            </Col>
            <Col xs={6} sm={4} lg={4}>
            <div style={{backgroundImage: 'url('+stairs+')'}}>
                 <p style={{fontVariant: 'none', fontSize: '2rem', padding: '10% 0',fontWeight: '300'}}>
                trapper
                </p>
            </div>
            </Col>
        </Row>
    )
}
}

export default ServicesSliping;
