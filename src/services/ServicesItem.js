/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Col } from "react-bootstrap";

import ServicesSliping from "./ServicesSliping";

class ServicesItem extends Component {
  constructor () {
    super();
	  this.state = {

    }
  } 


          
  render (){
    const service = this.props.service ? this.props.service : {};
    const index = this.props.index ? this.props.index : 0;
    return (
        <>
          {service && 
          <>
          <div 
            id={'#'+service.name}></div>
          <Col xs={12} sm={12} md={6} lg={5}>
            <div 
              id="service-ico" 
              style={{backgroundImage: 'url('+service.ico+')'}}>
                <h1 id='service-header'>{service.name}</h1>
            </div>
            <div id='service-gallery'>
                {
                  //<GalleryContainer pictureToLightboxPosition={this.props.pictureToLightboxPosition} pictureToLightbox = {this.props.pictureToLightbox} galleryType={index === 0 ? 'gulvsliping' : index === 1 ? 'behandling' : index === 2 ? 'vedlikehold' : 'gulvsliping' }  gallery={index === 0 ? [0,0,0,4,0,0] : index === 1 ? [0,0,0,0,4,0] : index === 2 ? [0,0,0,0,0,4] : [0,0,0,0,0,0] }/>
                }
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div id="service-description">
                <h1>{service.name}</h1>
                <div>
                    {service.description.map((line, index)=>
                    <p key={index}>{line}</p>
                    )}
                </div>
              {index === 0 && <ServicesSliping/>}
            </div>
          </Col>
        </>
          }
        </>
        )
}
}

export default ServicesItem;
