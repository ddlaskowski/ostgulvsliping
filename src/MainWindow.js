import React, { Component } from "react";
import Cookies from 'universal-cookie';
import {Container, Row, Col, Form, Button } from 'react-bootstrap';

import './App.css';

import { getClientData } from "./DataModelEngine";
import { serverConnection } from "./serverroutes/serverRouteEngine";

import CallPopup from './kontakt/CallPopup';
import ContactIcons from "./kontakt/ContactIcons";
import ContactPanel from './kontakt/ContactPanel';
import CookiesPopup from './cookiespopup/CookiesPopup';
import FrontPageArticle from "./home/FrontPageArticle";
import Footer from "./home/Footer";
import GalleryContainer from "./gallery/GalleryContainer";
import GoogleComments from "./googleComments/GoogleComments";
import Header from "./home/Header";
import KnowHowContainer from "./knowhow/KnowHowContainer";
import NavigationBar from "./navbar/NavigationBar";
import NavigationIcons from "./home/NavigationIcons";
import ProductContainer from './products/ProductContainer';
import ServicesContainer from "./services/ServicesContainer";
import Tilbud from "./home/Tilbud";
import WebdesignFooter from "./home/WebdesignFooter";

class MainWindow extends Component {
  constructor () {
    super();
	  this.state = {
      activeView: 'hjem',
      selectedProduct: 0,
      activatePage: true,
    }
    this.handshake = this.handshake.bind(this);
    this.menuNavigation = this.menuNavigation.bind(this);
    this.navigate = this.navigate.bind(this);
  } 
          
  
  handshake() {
    const inquiry = {uid: getClientData('uid')};
    const json = serverConnection('handshake', 'post', 'json', inquiry);
    if (json && json.length > 0 && json.handshake === false)
    {
      this.setState(
        {
          activatePage: json.handshake
        }
      )
    }
  }

  menuNavigation(view, selectedProduct){
    if (view==='produkter')
    {
      this.setState({
        activeView: view,
        selectedProduct,
      })
    }
    else
    {
      this.setState({
        activeView: view
      })
    }
  }

  navigate(event){
    const view = event.target.getAttribute('name');
    const id = event.target.getAttribute('navigationid');
    this.menuNavigation(view);
  }

  componentDidMount() {
    const view = this.props.view ? this.props.view : false;
    if (view)
    {this.menuNavigation(view)}
    this.handshake();
  }

 render ()
 {

    const {gallery, picture, picPosition} = {...this.props};
    const cookies = new Cookies();
    const cookiesAccepted = cookies.get('cookies-accepted') ? cookies.get('cookies-accepted') : false;
    const selected =  this.props.article ? this.props.article : false;
    const { service, activatePage} = this.props;
    const {activeView} = this.state;
    return (
      <div className="App" style={{display: activatePage === false ? 'none' : 'inherit'}}>
        <NavigationBar/>
        {!cookiesAccepted && <CookiesPopup/>}
        {<CallPopup/>}

        <Container fluid>
          <Header/>
          {
            //HOME ROUTE
          }
          {(activeView === 'hjem') && 
          <>
            <NavigationIcons/>
            <Row>
              <Col xs={12} md={7} lg={7} style={{padding: '0  0 0 0'}}>
                <GalleryContainer galleryType='mini' gallery={window.innerWidth < 600 ? [0,15,0,0,0,0] : [0,21,0,0,0,0]}/>
              </Col>
              <Col xs={12} md={1} lg={1} style={{padding: '0 0 0 0'}}>
                <GalleryContainer galleryType='products' menuNavigation={this.menuNavigation} gallery={[0,0,3,0,0,0]}/>
              </Col>
              <Col xs={12} md={2} lg={4} style={{padding: '0 0 0 0'}}>
                <GalleryContainer galleryType='main' gallery={[1,0,0,0,0,0]}/>
              </Col>
              <GoogleComments/>
              <Tilbud/>
              <FrontPageArticle/>
            </Row>
          </>
          }
          {
            //GALLERY ROUTE
          }
          {(activeView === 'galleri') && 
          <>
              <Row>
              <Col xs={12} md={7} lg={7} style={{padding: '0  0 0 0'}}>
                <GalleryContainer galleryType='mini' pictureToLightbox = {gallery==='mini' ? picture : {}} pictureToLightboxPosition = {gallery==='mini' ? picPosition : false}  gallery={window.innerWidth < 600 ? [0,15,0,0,0,0] : [0,21,0,0,0,0]}/>
              </Col>
              <Col xs={12} md={1} lg={1} style={{padding: '0 0 0 0'}}>
                <GalleryContainer galleryType='products' menuNavigation={this.menuNavigation} gallery={[0,0,3,0,0,0]}/>
              </Col>
              <Col xs={12} md={2} lg={4} style={{padding: '0 0 0 0'}}>
                <GalleryContainer galleryType='main' gallery={[1,0,0,0,0,0]}/>
              </Col>
            </Row>
          </>
          }
          {
            //SERVICES ROUTE
          }
          {activeView === 'tjenester' && 
          <>
          <div id='tjenester' className="services-menu-link"></div>
          <Row>
          <Col xs={12} md={12} lg={12}>
            <ServicesContainer pictureToLightboxPosition = {gallery==='gulvsliping' || gallery==='behandling' || gallery==='vedlikehold' ? picPosition : false} pictureToLightbox = {gallery==='gulvsliping' || gallery==='behandling' || gallery==='vedlikehold' ? picture : {}} service={service}/>
          </Col>       

          </Row>
        </>}
        {
            //PRODUCTS ROUTE
          }
        {activeView === 'produkter' && 
          <>
          <div id='produkter' className="products-menu-link"></div>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <ProductContainer selectedProduct={this.state.selectedProduct}/>
            </Col>
          </Row>
        </>}
        {
            //KNOW-HOW ROUTE
          }
        {activeView === 'knowhow' && 
          <>
          <div id='knowhow' className="know-how-menu-link"></div>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <KnowHowContainer selected={selected}/>
            </Col>
          </Row>
        </>}
        {
            //KONTAKT ROUTE
          }
        {activeView === 'kontakt' && 
        <>
          <div id='kontakt' className="kontakt-menu-link"></div>
          <Row id="contactbar">
            <ContactIcons/>
            <Col xs={12} lg={6}>
              <div id='contact-form'>
              <ContactPanel contactHeader={'Kontakt Oss'} contactRules={this.state.contactRules} contactForm={this.state.contactForm}/>
              </div>
            </Col>
          </Row>
        </>
        }
        <Footer/>
        <WebdesignFooter/>
        </Container>
      </div>
    );
  }
}

export default MainWindow;
