import React, { Component } from "react";
import {Container, Row, Col, Form, Button } from 'react-bootstrap';
import { getClientData } from "../DataModelEngine";

class SocialBar extends Component {
  constructor () {
    super();
	  this.state = {
    }
  } 
          


 render ()
  {
    return (
        <Row id='socialbar'>
            <Col xs={4} lg={4}>
                <p>
                <a name='instagram' onClick={this.footprint} href={'https://instagram.com/' + getClientData('instagram')}><img name='instagram' onClick={this.footprint} className='socialbar' alt={getClientData('clientCompanyName') + " on Instagram"} src="/instagram.svg"></img></a>
                </p>
            </Col>
            <Col xs={4} lg={4}>
                <p>
                <a name='facebook' onClick={this.footprint} href={'https://facebook.com/' + getClientData('facebook')}><img name='facebook' onClick={this.footprint} className='socialbar' src="/facebook.svg" alt={getClientData('clientCompanyName') + " on Facebook"}></img></a>
                </p>
            </Col>
            <Col xs={4} lg={4}>
                <p>
                    <a name='google' onClick={this.footprint} href='https://g.page/r/CUTVI-r6AFOiEAE'><img className='socialbar' alt={getClientData('clientCompanyName') + ' Google Reviews'} src="/google_reviews.png"></img></a>
                </p>
            </Col>
                <Col xs={4} lg={4}>
                <p>
                    <a name='instagram' onClick={this.footprint} href={'https://instagram.com/' + getClientData('instagram')}>{'@'+getClientData('instagram')}</a>
                </p>
            </Col>
            <Col xs={4} lg={4}>
                <p>
                    <a name='facebook' onClick={this.footprint} href={'https://facebook.com/' + getClientData('facebook')}>follow us</a>
                </p>
            </Col>
            <Col xs={4} lg={4}>
                <p>
                    <a name='google' onClick={this.footprint} href='https://g.page/r/CUTVI-r6AFOiEAE'>Google reviews</a>
                </p>
            </Col>
        </Row>
    );
  }
}

export default SocialBar;
