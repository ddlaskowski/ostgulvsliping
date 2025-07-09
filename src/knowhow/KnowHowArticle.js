/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import GalleryContainer from '../gallery/GalleryContainer';
import KnowHowBeam from "./KnowHowBeam";
import KnowHowTags from "./KnowHowTags";

class KnowHowArticle extends Component {
  constructor () {
    super();
	  this.state = {

    }
  } 


          
  render (){
    const article = this.props.article ? this.props.article : {};
    const index = this.props.index ? this.props.index : 0;
    const line = function (articleLine, index){
      if (typeof articleLine === 'string' && index !== 0 && index !== 1 )
      {
        return <p>{articleLine}</p>
      }
      if (Array.isArray(articleLine) && articleLine.length === 2 && index !== 0 && index !== 1)
      {
        const pictureLink = function (articleLine) {
          return '/gallery/imgs/'+articleLine;
        }
        return <div id="know-how-picture-before-after-frame">            

          <div id="know-how-picture" style={{backgroundImage: 'url('+pictureLink(articleLine[0])+')'}}>        
          </div>

            <div id="know-how-picture" style={{backgroundImage: 'url('+pictureLink(articleLine[1])+')'}}>        
          </div>

        </div>
      }
      if (Array.isArray(articleLine) && articleLine.length === 1 && index !== 0 && index !== 1)
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
          <Col xs={12} sm={12} md={6} lg={5}>
            <div id="know-how-ico" style={{backgroundImage: 'url('+article.ico+')'}}>
     
            </div>
            <div><p id='know-how-header'>{article.brief}</p></div>
            <div>
          </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
              <div>
                <KnowHowTags tags={article.tags}/>
              </div>

            <div id="know-how-description">
                <div>
                    {line(article.full[0], 2)}
                    {line(article.full[1], 2)}
                </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={{span: 10, offset: 1}}>
            <div id="know-how-description">
                <div>
                    {article.full.map((articleLine, index)=>
                      line(articleLine, index)
                    )}
                </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <KnowHowTags tags={article.tags}/>
          </Col>          
          <Col xs={12} sm={12} md={12} lg={12}>
            <KnowHowBeam/>
            
          </Col>
          </Row>
        </>
          }
        </>
        )
}
}

export default KnowHowArticle;
