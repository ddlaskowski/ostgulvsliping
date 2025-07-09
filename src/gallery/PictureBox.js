/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import Lightbox from "./Lightbox";
import plate from './plate.png';

class PictureBox extends Component {
  constructor () {
    super();
	  this.state = {
      lightbox: false,
      scrapoutimg: false
    }
    this.letsgrind = this.letsgrind.bind(this);
    this.stopgrind = this.stopgrind.bind(this);   
    this.getRandomInt = this.getRandomInt.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
  } 

  openLightbox(){
    const picture = this.state.picture ? this.state.picture : {};
    const galleryType = this.props.galleryType ? this.props.galleryType : '';
    this.props.openLightbox(picture, galleryType);
  }
  closeLightbox(){
    this.setState({
      lightbox: false
    })
  }
          
  letsgrind(){
    this.setState({
      scrapoutimg: true
    })
    setTimeout(() => this.stopgrind(), 11000);
  }

  stopgrind(){
    const galleryType = this.props.galleryType;
    const selectNewPhotoFromGallery = this.props.selectNewPhotoFromGallery;
    const newImg = selectNewPhotoFromGallery(galleryType, this.props.index);
    if (newImg)
    {
      this.setState({
        picture: newImg,
        scrapoutimg: false
      })
    }

  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  componentDidMount(){
    const min = this.getRandomInt(50, 150);
    const max = this.getRandomInt(500, 7000);
    const timing = this.getRandomInt(min, max);
    const multiplier = this.getRandomInt(100, 250);
    const delay = timing*multiplier;
    const picture = this.props.picture ? this.props.picture : {};
    this.setState({
      picture
    })
    this.interval = setInterval(this.letsgrind, delay);
  }

  render (){
    const picture = this.state.picture ? this.state.picture : {};
    //console.log(picture);
    //const path =  picture ? 'url(./gallery/imgs/'+picture.filename+')' : '';
    const pathmini = picture ? 'url(/gallery/imgs/'+picture.minifile+')' : '';
    //console.log(path);
    const {galleryType} = {...this.props};
    return (
            <a href={'/galleri/'+galleryType+'/'+picture.name}> 
                <div
                    key={this.props.index}
                    id='mini-image' 
                    style={{
                        zIndex:5,
                        backgroundImage: pathmini,
                        backgroundPositionX: picture.x+"%",
                        backgroundPositionY: picture.y+"%", 
                        backgroundSize: picture.scale+'%'                      
                }}>
                    <div  id='griding-area' style={{display: this.state.scrapoutimg ? 'inherit' : 'none'}}>
                        <div id='grinder'>
                            <div id='plate' className='spinnin-plate' style={{backgroundImage: 'url('+plate+')'}}></div>
                        </div>
                        <div id='square1'></div>
                        <div id='square2'></div>
                        <div id='square3'></div>
                        <div id='square4'></div>
                        <div id='square5'></div>
                        <div id='square6'></div>
                        <div id='square7'></div>
                        <div id='square8'></div>
                        <div id='square9'></div>
                        <div id='square10'></div>
                        <div id='square11'></div>
                        <div id='square12'></div>
                        <div id='square13'></div>
                        <div id='square14'></div>
                        <div id='square15'></div>
                        <div id='square16'></div>
                    </div>
                </div>
            </a>
        )
    
}
}

export default PictureBox;
