/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";


class KnowHowTags extends Component {
  constructor () {
    super();
	  this.state = {

    }
  } 
          
  render (){
    const {tags} = this.props;
    //console.log(tags);
    return (
        <div id='article-tags'>
          {
            //<p>tags: </p>
          }
          {tags && tags.map((tag, idx) => 
            <p key={idx} style={{fontSize: 'xx-small'}}>
              {tag}
            </p>
            )}
        </div>
        )
}
}

export default KnowHowTags;
