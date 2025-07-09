/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import ProductCard from "./ProductCard";
import ProductItem from "./ProductItem";

import './products.css';

class ProductList extends Component {
  constructor () {
    super();
	  this.state = {
      selected: 0,
      seeAllColors: false,
    }
    this.showColors = this.showColors.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
  } 

  showColors(){
    this.setState({
      seeAllColors: true
    })
  }

  selectProduct(productIndex){
    this.setState({
      selected: productIndex,
      seeAllColors: false,
    })
  }

  componentDidMount(){
    const selectedProduct = this.props.selectedProduct ? this.props.selectedProduct : 0;
    this.setState({
      selected: selectedProduct
    })
  }
          
  render (){
    const products = this.props.products ? this.props.products : [];
    const selected = this.state.selected ? this.state.selected : 0;
    return (
      <>
        {products && products.length > 0 && <div id="product-list">
          <h1>Anbefalt produkter</h1>
            {products.map((product, index)=>(<ProductItem key={index} selectProduct={this.selectProduct} product={product} index={index}/>))
            }
          <ProductCard showColors={this.showColors} seeAllColors={this.state.seeAllColors} selected={products[selected]}/>
        </div>}
      </>
        )
}
}

export default ProductList;
