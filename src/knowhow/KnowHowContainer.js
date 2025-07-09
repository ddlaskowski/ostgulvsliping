/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import KnowHowList from "./KnowHowList";
import KnowHowArticle from "./KnowHowArticle";

import { articles } from "./../content/articlesContent";
import './knowhow.css';

class KnowHowContainer extends Component {
  constructor () {
    super();
	  this.state = {
        articles: []
    }
  } 

  componentDidMount(){
    this.setState({
        articles
    })
  }
          
  render (){
    let articles = this.state.articles ? this.state.articles : [];
    const selected = this.props.selected ? this.props.selected : false;
    const {tags} = this.props;
    const article = articles.filter((article) => (''+article.link === ''+selected));

    return (
      <>
        {!selected && <KnowHowList articles={articles}/>}
        {selected && article[0] && <KnowHowArticle article={article[0]}/>}
      </>

    )
}
}

export default KnowHowContainer;
