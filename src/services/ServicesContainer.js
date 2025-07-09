/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { services } from "./../content/servicesContent";
import ServicesList from "./ServicesList";
import ServicesPage from "./ServicesPage";
import KnowHowBeam from "../knowhow/KnowHowBeam";
import KnowHowBeamHeader from "../knowhow/KnowHowBeamHeader";

import './services.css';

class ServicesContainer extends Component {
       
  render (){
    const selected = this.props.service ? this.props.service : false;
    const service = services ? services.filter((service) => (''+service.name === ''+selected)) : [];

    return (
      <>
        {!selected && <ServicesList 
          pictureToLightboxPosition={this.props.pictureToLightboxPosition} 
          pictureToLightbox={this.props.pictureToLightbox} 
          services={services}/>}
        {selected && <ServicesPage 
          pictureToLightbox={this.props.pictureToLightbox} 
          service={service[0]} index={service[0].index}/>}
        <KnowHowBeamHeader/>
        <KnowHowBeam/>
      </>
    )
}
}

export default ServicesContainer;
