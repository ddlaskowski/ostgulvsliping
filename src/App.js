import React, { Component } from "react";
import './App.css';
import MainWindow from "./MainWindow";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import sitemap from './sitemap.xml';

import { articles } from "./content/articlesContent";
import { imgsArray } from "./content/gallery_content";
import { products } from "./content/products_content";

class App extends Component {
  constructor () {
    super();
	  this.state = {
    }

  } 

  componentDidMount()
  {
  }
  render ()
  {
    const imgs = imgsArray;
    const galleries = {
        main: imgs.filter(img => img.category[0] === 1),
        mini: imgs.filter(img => img.category[1] === 1),
        products: products,
        gulvsliping: imgs.filter(img => img.category[3] === 1), 
        behandling: imgs.filter(img => img.category[4] === 1), 
        vedlikehold: imgs.filter(img => img.category[5] === 1),  
    }
    return (
      <Router>
        <Routes>
          <Route exact path="/produkter" element={<MainWindow view='produkter'/>}>
          </Route>
          <Route exact path="/kontakt" element={<MainWindow view='kontakt'/>}>
          </Route>
          <Route exact path="/tjenester" element={<MainWindow view='tjenester'/>}>
          </Route>
          <Route exact path="/gulvsliping" element={<MainWindow view='tjenester' service='gulvsliping' />}>
          </Route>
          <Route exact path="/behandling" element={<MainWindow view='tjenester' service='behandling' />}>
          </Route>
          <Route exact path="/vedlikehold" element={<MainWindow view='tjenester' service='vedlikehold' />}>
          </Route>
          <Route exact path="/knowhow" element={<MainWindow view='knowhow'/>}>
          </Route>
          {articles && articles.map((article, index)=>(
            <Route key={index} exact path={"/knowhow/"+article.link} element={<MainWindow view='knowhow' article={article.link}/>}>
          </Route>
          ))}
          <Route exact path="/" element={<MainWindow/>}>
          </Route>
          {galleries.mini && galleries.mini.map((picture, index)=>(
            <Route key={index} exact path={"/galleri/mini/"+picture.name} element={<MainWindow view='galleri' gallery='mini' picture={picture} picPosition={index}/>}>
          </Route>
          ))}
          {galleries.main && galleries.main.map((picture, index)=>(
            <Route key={index} path={"/galleri/main/"+picture.name} element={<MainWindow view='galleri' gallery='main' picture={picture} picPosition={index}/>}>
          </Route>
          ))}
          {galleries.products && galleries.products.map((picture, index)=>(
            <Route key={index} path={"/galleri/products/"+picture.name} element={<MainWindow view='galleri' gallery='products' picture={picture} picPosition={index}/>}>
          </Route>
          ))}
          {galleries.gulvsliping && galleries.gulvsliping.map((picture, index)=>(
            <Route key={index} path={"/galleri/gulvsliping/"+picture.name} element={<MainWindow view='tjenester' gallery='gulvsliping' picture={picture} picPosition={index}/>}>
          </Route>
          ))}
          {galleries.behandling && galleries.behandling.map((picture, index)=>(
            <Route key={index} path={"/galleri/behandling/"+picture.name} element={<MainWindow view='tjenester' gallery='behandling' picture={picture} picPosition={index}/>}>
          </Route>
          ))}
          {galleries.vedlikehold && galleries.vedlikehold.map((picture, index)=>(
            <Route key={index} path={"/galleri/vedlikehold/"+picture.name} element={<MainWindow view='tjenester' gallery='vedlikehold' picture={picture} picPosition={index}/>}>
          </Route>
          ))}          
          <Route exact path="/galleri" element={<MainWindow view='galleri' gallery='mini' picture={0}/>}>
          <Route path="*" element={<MainWindow/>} />
          </Route>
        </Routes>
    </Router>

    );
  }
}

export default App;
