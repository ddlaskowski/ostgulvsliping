/* eslint-disable no-lone-blocks */
import React, { Component } from "react";

class ProductItem extends Component {
  constructor () {
    super();
	  this.state = {
  
    }
    this.selectProduct = this.selectProduct.bind(this);
  } 

  selectProduct(event){
    const name = event.target.getAttribute("name");
    //console.log(name);
    this.props.selectProduct(name);

  }
        
  render (){
    const product = this.props.product ? this.props.product : {};  
    const path =  'url(./gallery/imgs/'+product.filename+')';
    const index = this.props.index ? this.props.index : 0;
    return (
        <>
          <div 
              onClick={this.selectProduct}
              name={index}
              id='product-list-image' 
              style={{
                  zIndex:5,
                  backgroundImage: path,
                  backgroundPositionX: product.x+"%",
                  backgroundPositionY: product.y+"%", 
                  backgroundSize: product.scale+'%'                      
          }}>
          </div>
        </>
        )
}
}

export default ProductItem;
