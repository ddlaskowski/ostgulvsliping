/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { tilbudContent } from "../content/homeContent";

class Tilbud extends Component {
  constructor () {
    super();
	  this.state = {
    }
  } 
  render (){
    const tilbud = tilbudContent;
    return (
        <Row id='know-how-tilbud'>
            <Col xs={0} sm={0} lg={1}>
            </Col>
            <Col xs={12} sm={8} lg={6}>
                <div>
                    <p style={{fontVariant: 'none', fontSize: '1.8rem', padding: '0% 0',fontWeight: '300'}}>
                        {tilbud.full}
                    </p>
                </div>
            </Col>
            <Col xs={12} sm={4} lg={4}>
            <a href='/kontakt'><div>
                <p>
                    {tilbud.icotext}
                </p>
            </div>
            </a>
            </Col>
        </Row>
    )
  }
}

export default Tilbud;
