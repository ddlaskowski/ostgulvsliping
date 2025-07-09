/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import SocialBar from "../home/SocialBar";
import MainBox from "./MainBox";
import PictureBox from "./PictureBox";
import ProductBox from "./ProductBox";
import Lightbox from "./Lightbox";



class GalleryModule extends Component {
  constructor () {
    super();
	  this.state = {
        lightbox: false,
        picture: {},
        galleryType: '',
    }
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
  } 
  
  
  openLightbox(picture, galleryType){
    this.setState({
      lightbox: true,
      picture,
      galleryType
    })
  }
  closeLightbox(){
    this.setState({
      lightbox: false,
      picture: {},
      galleryType: ''
    })
  }
  
  componentDidMount(){
    const {pictureToLightbox, galleryType} = {...this.props};
    //console.log(pictureToLightbox);
    //console.log(galleryType);
    pictureToLightbox && this.openLightbox(pictureToLightbox, galleryType);
  }

  render (){
    const galleryMini = this.props.galleries.mini ? this.props.galleries.mini : [];
    const galleryGulvsliping = this.props.galleries.gulvsliping ? this.props.galleries.gulvsliping : [];
    const galleryBehandling = this.props.galleries.behandling ? this.props.galleries.behandling : [];
    const galleryVedlikehold = this.props.galleries.vedlikehold ? this.props.galleries.vedlikehold : [];   
    const galleryMain = this.props.galleries.main ? this.props.galleries.main : [];
    const galleryProducts = this.props.galleries.products ? this.props.galleries.products : [];
    const picture = this.state.picture ? this.state.picture : {};
    const galleryType = this.state.galleryType ? this.state.galleryType : {};

    {
    return (
        <>
            {this.state.lightbox && <Lightbox sourceGalleries={this.props.sourceGalleries} galleryType={galleryType} closeLightbox={this.closeLightbox} picture={picture}/>}
            {galleryMini.length > 0 &&<div className="gallery-mini"> 
                 {galleryMini.map((picture, index)=>(
                        <PictureBox pictureToLightbox={this.props.pictureToLightbox} openLightbox={this.openLightbox} selectNewPhotoFromGallery={this.props.selectNewPhotoFromGallery} index={index} key={index} picture={picture} galleryType='mini'/>
                    ))}                
            </div>}
            {galleryGulvsliping.length > 0 &&<div className="gallery-mini"> 
                 {galleryGulvsliping.map((picture, index)=>(
                        <PictureBox pictureToLightbox={this.props.pictureToLightbox} openLightbox={this.openLightbox} selectNewPhotoFromGallery={this.props.selectNewPhotoFromGallery} index={index} key={index} picture={picture} galleryType='gulvsliping'/>
                    ))}                
            </div>}
            {galleryBehandling.length > 0 &&<div className="gallery-mini"> 
                 {galleryBehandling.map((picture, index)=>(
                        <PictureBox pictureToLightbox={this.props.pictureToLightbox} openLightbox={this.openLightbox} selectNewPhotoFromGallery={this.props.selectNewPhotoFromGallery} index={index} key={index} picture={picture} galleryType='behandling'/>
                    ))}                
            </div>}
            {galleryVedlikehold.length > 0 &&<div className="gallery-mini"> 
                 {galleryVedlikehold.map((picture, index)=>(
                        <PictureBox pictureToLightbox={this.props.pictureToLightbox} openLightbox={this.openLightbox} selectNewPhotoFromGallery={this.props.selectNewPhotoFromGallery} index={index} key={index} picture={picture} galleryType='vedlikehold'/>
                    ))}                
            </div>}
            {galleryProducts.length > 0 && <div className="gallery-product">              
                {galleryProducts.map((picture, index)=>(
                        <ProductBox menuNavigation={this.props.menuNavigation} picture={picture} index={index} key={index}/>
                    ))}
            </div> }
            {galleryMain.length > 0 && <div className="gallery-main">              
                {galleryMain.map((picture, index)=>(
                        <MainBox picture={picture} index={index} key={index}/>
                    ))}
                <SocialBar/>
            </div> }
        </>
        )
    }
}
}

export default GalleryModule;
