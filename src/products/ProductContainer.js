/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import ProductList from "./ProductList";
import { products } from "./../content/products_content";


import './products.css';

class ProductContainer extends Component {
  constructor () {
    super();
	  this.state = {
        products: []
    }
  } 

  componentDidMount(){
    this.setState({
        products
    })
  }
          
  render (){
    const products = this.state.products ? this.state.products : [];
    return (
        <>
          {<ProductList products={products} selectedProduct={this.props.selectedProduct}/>}
        </>
        )
}
}

export default ProductContainer;
