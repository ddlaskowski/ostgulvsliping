/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import GalleryContainer from "../gallery/GalleryContainer";
import KnowHowItem from "./KnowHowItem";
import KnowHow from "./KnowHowBeam";


class KnowHowList extends Component {
  constructor () {
    super();
	  this.state = {
    }
  } 
      
  render (){
    const articles = this.props.articles ? this.props.articles : [];
    return (
        <Row id="know-how">
          {articles && articles.length > 0 && articles.map((article, index)=>(
                    <KnowHowItem key={index} article={article} index={index}/>
                ))}
        </Row>
        )
}
}

export default KnowHowList;
