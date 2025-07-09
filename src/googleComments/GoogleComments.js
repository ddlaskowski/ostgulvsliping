/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { comments } from "./../content/commentsContent";
import star from "./star_rate.png";
import './googleComments.css';


class GoogleComments extends Component {
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
        <div id='wrapper-comments'>
            {comments && comments.length > 0 && 
            comments.map((comment, index)=>( index < 10 &&
        <Row key={index} id='comments-top-beam'>
            <Col xs={0} sm={0} lg={1}>
            </Col>
            <Col xs={12} sm={8} lg={7}>
            <a href={comment.link}><div>
                <p style={{fontVariant: 'none', fontSize: '2.3rem', padding: '0% 0',fontWeight: '300'}}>
                 {comment.commentator}
                </p>
                <p style={{fontVariant: 'none', fontSize: '1.2rem', padding: '0% 0',fontWeight: '300'}}>
                 {comment.comment}
                </p>
            </div></a>
            </Col>
            <Col xs={12} sm={4} lg={3}>
            <a href={comment.link} id='comments-rate'>
              <div style={{backgroundImage: 'url('+star+')'}}/>
              <div style={{backgroundImage: 'url('+star+')'}}/>
              <div style={{backgroundImage: 'url('+star+')'}}/>
              <div style={{backgroundImage: 'url('+star+')'}}/>
              <div style={{backgroundImage: 'url('+star+')'}}/>
            </a>
            </Col>
        </Row>))}
        </div>
    )
}
}

export default GoogleComments;
