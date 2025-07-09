/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";


class ProductCard extends Component {
  constructor () {
    super();
	  this.state = {
      seeAllColors: false,
    }
    this.showColors = this.showColors.bind(this);
  } 

  showColors(){
    this.props.showColors();
  }
          
  render (){
    const product = this.props.selected ? this.props.selected : {}; 
    const seeAllColors = this.props.seeAllColors ? this.props.seeAllColors : false; 
    const path =  'url(/gallery/imgs/'+product.filename+')';
    return (
      <div id='product-card'>
        <Row>
          <Col lg={4} sm={12}>
            <div 
                id='product-card-image' 
                style={{
                  zIndex:5,
                  backgroundImage: path,
                  backgroundPositionX: product.x+"%",
                  backgroundPositionY: product.y+"%", 
                  backgroundSize: product.scale+'%'                        
            }}>
            </div>
            <div id='product-card-caption'>
              {product && <p>{product.name}</p> }
            </div>          
          </Col>
          <Col lg={7} sm={12} xs={12}>
            <div id='product-card-description'>
              {product && product.description.map((line, index)=>(<p key={index}>{line}</p>))}
              <div id='product-variants'>
                {seeAllColors && product.variations && product.variations.colors.length > 4 && product.variations.colors.map((variant, index)=>(
                  <div key={index}>
                    <div id="variant" style={{
                    
                      backgroundImage: 'url(/products/'+product.variations.foldername+'/'+variant.filename+')',                 
                    }}>
                      <p>{variant.description}</p>
                    </div>
                  </div>
                  ))}
                {!seeAllColors && product.variations && product.variations.colors.length > 4 && product.variations.colors.map((variant, index)=>(
                  index < 3 && <div key={index}>
                    <div id="variant" style={{
                      backgroundImage: 'url(/products/'+product.variations.foldername+'/'+variant.filename+')',
                    }}>
                      <p>{variant.description}</p>
                    </div>
                  </div>
                  ))}
                  {!seeAllColors && product.variations && product.variations.colors.length > 4 && <h1 onClick={this.showColors}>...</h1>}
                  {!seeAllColors && product.variations && product.variations.colors.length < 5 && product.variations.colors.map((variant, index)=>(
                  index < 4 && <div>
                    <div id='variant' style={{
                      backgroundImage: 'url(/products/'+product.variations.foldername+'/'+variant.filename+')',
                
                    }}>
                      <p>{variant.description}</p>
                    </div>
                  </div>
                  ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>        

        )
}
}

export default ProductCard;
