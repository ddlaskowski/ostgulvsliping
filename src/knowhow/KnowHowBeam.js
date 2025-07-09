/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import knowhow from './../icons/knowhow.svg';
import { articles } from "../content/articlesContent";
import KnowHowTags from "./KnowHowTags";

class KnowHowBeam extends Component {
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
        <div id='wrapper-know-how'>
            {articles && articles.length > 0 && 
            articles.map((article, index)=>( index < 10 &&
        <Row key={index} id='know-how-top-beam'>
            <Col xs={0} sm={0} lg={1}>
            </Col>
            <Col xs={12} sm={8} lg={6}>
            <a href={'/knowhow/'+article.link}><div>
                <p style={{fontVariant: 'none', fontSize: '3rem', padding: '0% 0',fontWeight: '300'}}>
                 {article.brief}
                </p>
                <p style={{fontVariant: 'none', fontSize: '1.2rem', padding: '0% 0',fontWeight: '300'}}>
                 {article.full[0]+' ...'}
                </p>
            </div></a>
            </Col>
            <Col xs={12} sm={4} lg={4}>
            <a href={'/knowhow/'+article.link}><div style={{backgroundImage: 'url('+knowhow+')', minHeight: '30vh'}}>
                <p>
                {article.icotext}
                </p>
            </div>
            </a>
            </Col>
        </Row>))}
        </div>
    )
}
}

export default KnowHowBeam;
