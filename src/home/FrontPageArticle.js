/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import GalleryContainer from '../gallery/GalleryContainer';
import KnowHow from "../knowhow/KnowHowBeam";
import KnowHowTags from "../knowhow/KnowHowTags";
import { frontPageArticle } from "../content/homeContent";

class FrontPageArticle extends Component {
  constructor () {
    super();
	  this.state = {

    }
  } 


          
  render (){
    const article = frontPageArticle;
    const line = function (articleLine, index){
      if (typeof articleLine === 'string')
      {
        return <p key={index}>{articleLine}</p>
      }
      if (Array.isArray(articleLine) && articleLine.length === 2 && index !== 0 && index !== 1)
      {
        const pictureLink = function (articleLine) {
          return '/gallery/imgs/'+articleLine;
        }
        return <div key={index} id="know-how-picture-before-after-frame">            

          <div key={index} id="know-how-picture" style={{backgroundImage: 'url('+pictureLink(articleLine[0])+')'}}>        
          </div>

            <div key={index} id="know-how-picture" style={{backgroundImage: 'url('+pictureLink(articleLine[1])+')'}}>        
          </div>

        </div>
      }
      if (Array.isArray(articleLine) && articleLine.length === 1)
      {
        const pictureLink = function (articleLine) {
          return '/gallery/imgs/'+articleLine;
        }
        return <div id="know-how-picture-frame"> 
         <a href={'/galleri/mini/'+articleLine[0]}>          
          <div id="know-how-picture-centered" style={{backgroundImage: 'url('+pictureLink(articleLine[0])+')'}}>        
          </div>
          </a>
        </div>
      }
    }
    return (
        <>
          {article && 
          <>
          <Row id="know-how">
          <div id={'#'+article.link}></div>
          <Col xs={12} sm={12} md={12} lg={12}>
            <KnowHowTags tags={article.tags}/>
          </Col>          
          <Col xs={12} sm={12} md={6} lg={5}>
            <div id="know-how-ico" style={{backgroundImage: 'url('+article.ico+')'}}>
            </div>
            <div>
              <p id='know-how-header'>
                {article.brief}
              </p>
              </div>
            <div>
          </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div id="know-how-description">
              <div>
                {article.full.map((articleLine, index)=>
                  line(articleLine, index)
                )}
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <KnowHow/>
          </Col>
          </Row>
        </>
          }
        </>
        )
}
}

export default FrontPageArticle;
