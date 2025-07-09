/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import plate from './plate.png';

class ProductBox extends Component {
  constructor () {
    super();
	  this.state = {
    }
    this.navigate = this.navigate.bind(this);
  } 

  navigate(event){
    const view = event.target.getAttribute('name');
    const selectedProduct = event.target.getAttribute('picid');    
    this.props.menuNavigation(view, selectedProduct);
    }

  render (){
  
    const picture = this.props.picture;
    const index = this.props.index;
    //console.log(picture);
    const path =  'url(/gallery/imgs/'+picture.filename+')';
    //console.log(path);
    return (
            <>
                <div 
                    key = {index}
                    id='product-image' 
                    style={{
                        zIndex:5,
                        backgroundImage: path,
                        backgroundPositionX: picture.x+"%",
                        backgroundPositionY: picture.y+"%", 
                        backgroundSize: picture.scale+'%'                      
                }}><a href='/produkter'><div onClick={this.navigate} picid={index} name='produkter' id='product-link'></div></a>
                </div>
          </>
        )
    
}
}

export default ProductBox;
