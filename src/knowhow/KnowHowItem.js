/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Col } from "react-bootstrap";


class KnowHowItem extends Component {
  constructor () {
    super();
	  this.state = {

    }
  } 


          
  render (){
    const article = this.props.article ? this.props.article : {};
    const index = this.props.index ? this.props.index : 0;
    //console.log(article);
    return (
        <>
          {article && 
          <Col key={index} xs={12} sm={12} md={6} lg={4} id='know-how-link'>
            <a href={'/knowhow/'+article.link}>
              <div 
              id="know-how-ico" 
              style={{backgroundImage: 'url('+article.ico+')'}}>
              </div>
            </a>
              <div>
                <p id='know-how-header'>
                  <a href={'/knowhow/'+article.link}>
                    {article.brief}
                  </a>
                </p>
              </div>
          </Col>
          }
        </>
        )
}
}

export default KnowHowItem;
