/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import ServicesItem from "./ServicesItem";


class ServicesList extends Component {
  constructor () {
    super();
	  this.state = {
    }
  } 
      
  render (){
    const services = this.props.services ? this.props.services : [];
    return (
        <>
          {services && services.length > 0 && 
            <>{services.map((service, index)=>(
                <Row key={index} id="service">
                    <ServicesItem pictureToLightboxPosition={this.props.pictureToLightboxPosition} pictureToLightbox={this.props.pictureToLightbox} service={service} index={index}/>
                </Row>
                ))}</>
          }
        </>
        )
}
}

export default ServicesList;
