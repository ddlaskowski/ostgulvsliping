/* eslint-disable no-lone-blocks */
import React, { Component } from "react";

import './lightbox.css';

class Lightbox extends Component {
  constructor () {
    super();
	  this.state = {
      seeBefore: false,
      picture: {},
      sourceGalleries: {},
      galleryType: '',
      picPosition: 0,
      galleryLength: 0
    }
    this.showBefore = this.showBefore.bind(this);
    this.hideBefore = this.hideBefore.bind(this);
    this.picLeft = this.picLeft.bind(this);
    this.picRight = this.picRight.bind(this);
  } 
  



  picLeft(){
    let picPosition = this.state.picPosition;
    picPosition = picPosition -1;
    const galleryType = this.state.galleryType;    
    const sourceGalleries = this.state.sourceGalleries;
    const picture = sourceGalleries[galleryType][picPosition];
    this.setState({
      picPosition,
      picture
    })
  }
  
  picRight(){
    let picPosition = this.state.picPosition;
    picPosition = picPosition +1;
    const galleryType = this.state.galleryType;    
    const sourceGalleries = this.state.sourceGalleries;
    const picture = sourceGalleries[galleryType][picPosition];
    this.setState({
      picPosition,
      picture
    })
  }

  showBefore(){
    this.setState({
      seeBefore: true,
    });
    setTimeout(()=>{
      this.setState({
        seeBefore: false
      })
    }, 3000)
  }
  
  hideBefore(){
    this.setState({
      seeBefore: false,
    })
  }

  picLeftLink = () => {
    const {picture, sourceGalleries, galleryType} = {...this.props}; 
    let picPosition = sourceGalleries ? sourceGalleries[galleryType].indexOf(picture) : 1;
    picPosition--;
    const newPicture = sourceGalleries[galleryType][picPosition]['name'];
    const linkPrevious = '/galleri/'+galleryType+'/'+newPicture;
    return linkPrevious;
  }
  
  picRightLink = () => {
    const {picture, sourceGalleries, galleryType} = {...this.props}; 
    let picPosition = sourceGalleries ? sourceGalleries[galleryType].indexOf(picture) : 1;
    picPosition++;
    const newPicture = sourceGalleries[galleryType][picPosition]['name'];
    const linkNext =  '/galleri/'+galleryType+'/'+newPicture;
    return linkNext;
  }
  
  componentDidMount(){
    const {picture, sourceGalleries, galleryType} = {...this.props}; 
    const galleryLength = sourceGalleries ? sourceGalleries[galleryType].length : 1;
    const picPosition = sourceGalleries ? sourceGalleries[galleryType].indexOf(picture) : 1;
    this.setState({
      picture, sourceGalleries, galleryType,  galleryLength, picPosition
    }) 
  }

          
  render (){
    const picture = this.state.picture && this.state.picture.filename ? this.state.picture : this.props.picture ? this.props.picture : {};
    const sourceGalleries = this.props.sourceGalleries ? this.props.sourceGalleries : {};
    const galleryType = this.props.galleryType ? this.props.galleryType : '';
    const picPosition = this.state.picPosition ? this.state.picPosition : sourceGalleries ? sourceGalleries[galleryType].indexOf(picture) : 1;
    const galleryLength = sourceGalleries ? sourceGalleries[galleryType].length : 1;
    const path = picture ? '/gallery/imgs/'+picture.filename : '';
    const beforepath =  picture.before ? '/gallery/imgs/'+picture.before : '';  
    const seeBefore = this.state.seeBefore;  
    //const minigroup = picture.group.length > 0 ? picture.group : [];
    //const miniatures = minigroup.map((pic, index)=>{return '/gallery/imgs/'+pic});

  
    {
    return (
        <div id='lightbox-background'>
                      <div id='lightbox-close-button' onClick={this.props.closeLightbox}>X</div>
            <div id='lightbox-picture-box'>
                {!seeBefore && <img id='lightbox-picture' src={path} alt={picture.name}/>}
                {seeBefore && <img id='lightbox-picture' alt={picture.name} src={beforepath} />}
            </div>
            <p id='picture-counter'>{picPosition+'/'+galleryLength}</p>
                {!seeBefore && <div id='lightbox-description'>
                    {picture.before.length > 0 && <div id='lightbox-see-before' onMouseOver={this.showBefore} onClick={this.showBefore} onMouseOut={this.hideBefore}><p>'Se før'</p></div>}
                </div>}
            {picPosition > 1 && <div id='arrow-left' onClick={this.picLeft}><p>{'<'}</p></div>}
            {picPosition < galleryLength && <div id='arrow-right' onClick={this.picRight}><p>{'>'}</p></div>}
        </div>
        )
    }
}
}

export default Lightbox;
