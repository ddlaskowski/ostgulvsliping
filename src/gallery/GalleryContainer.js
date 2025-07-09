/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import GalleryModule from './GalleryModule';
import './gallery.css';
import {imgsArray} from './../content/gallery_content';
import { products } from "./../content/products_content";


class GalleryContainer extends Component {
  constructor () {
    super();
	  this.state = {
        galleries: {
            main: [],
            mini: [],
            products: [],
            gulvsliping: [],
            behandling: [],
            vedlikehold: [],
        },
        sourceGalleries: {
            main: [],
            mini: [],
            products: [],
            gulvsliping: [],
            behandling: [],
            vedlikehold: [],           
        }
    }
    this.selectNewPhotoFromGallery = this.selectNewPhotoFromGallery.bind(this);
  } 
  getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    selectNewPhotoFromGallery (galleryType, index){
        while(galleryType)
        {
            //console.log('gallery Type: '+ galleryType + '\n index: ' + index);
            let galleries = {...this.state.galleries};
            const sourceGalleries = {...this.state.sourceGalleries};
            let miniGalleryLength = sourceGalleries[galleryType].length;
            let randomValue = this.getRandomInt(miniGalleryLength);
            let miniTemp = sourceGalleries[galleryType][randomValue];
            if (!galleries[galleryType].includes(miniTemp) && miniTemp !== undefined)
            {
                galleries[galleryType][index] = miniTemp; 
                //console.log(galleries);       
                this.setState({
                    sourceGalleries, galleries
                });
                return miniTemp;
            }
            else
            {
                //console.log('once again ' + index);
                let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
                let randomValues = array.map(x => this.getRandomInt(miniGalleryLength));
                miniTemp = randomValues.map(value => sourceGalleries[galleryType][value]);
                for (let i=0; i<=22; i++)
                {
                    if (!galleries[galleryType].includes(miniTemp[i]) || i === 22)
                    {
                        //console.log('success: ' + i);
                        galleries[galleryType][index] = miniTemp[i];        
                        this.setState({
                            sourceGalleries, galleries
                        });
                        i = 23;
                        return galleries[galleryType][index];
                    }
                }
            }
        }
    }
          
  componentDidMount()
  {
    const picturesAmount = this.props.gallery ? this.props.gallery : [0,0,0,0,0,0];
    //console.log(picturesAmount);    
    const imgs = imgsArray;
    const galleries = {
        main: imgs.filter(img => img.category[0] === 1),
        mini: imgs.filter(img => img.category[1] === 1),
        products: products,
        gulvsliping: imgs.filter(img => img.category[3] === 1), 
        behandling: imgs.filter(img => img.category[4] === 1), 
        vedlikehold: imgs.filter(img => img.category[5] === 1),  
    }
    //console.log(galleries);
    let mini = this.state.galleries.mini;
    const miniGalleryLength = galleries.mini.length;
    while (mini.length < picturesAmount[1])
    {
        const randomValue = this.getRandomInt(miniGalleryLength);
        const miniTemp = galleries['mini'][randomValue];
        if (!mini.includes(miniTemp) && miniTemp !== undefined)
        {
            mini = mini.concat(miniTemp);
            galleries['mini'].splice(randomValue,1);         
        }
        if (mini.length === picturesAmount[1])
        {
            let stateGalleries = this.state.galleries;
            stateGalleries.mini = mini;
            //console.log(mini);
            this.setState({
                galleries: {
                    ...stateGalleries
                },
                sourceGalleries: 
                {
                    main: imgs.filter(img => img.category[0] === 1),
                    mini: imgs.filter(img => img.category[1] === 1), 
                    products: imgs.filter(img => img.category[2] === 1),
                    gulvsliping: imgs.filter(img => img.category[3] === 1),
                    behandling: imgs.filter(img => img.category[4] === 1),
                    vedlikehold: imgs.filter(img => img.category[5] === 1)
                }
            })
        }
    }
    let gulvsliping = this.state.galleries.gulvsliping;
    const gulvslipingGalleryLength = galleries.gulvsliping.length;
    while (gulvsliping.length < picturesAmount[3])
    {
        const randomValue = this.getRandomInt(gulvslipingGalleryLength);
        const gulvslipingTemp = galleries['gulvsliping'][randomValue];
        if (!gulvsliping.includes(gulvslipingTemp) && gulvslipingTemp !== undefined)
        {
            gulvsliping = gulvsliping.concat(gulvslipingTemp);
            galleries['gulvsliping'].splice(randomValue,1);         
        }
        if (gulvsliping.length === picturesAmount[3])
        {
            let stateGalleries = this.state.galleries;
            stateGalleries.gulvsliping = gulvsliping;
            //console.log(mini);
            this.setState({
                galleries: {
                    ...stateGalleries
                },
                sourceGalleries: 
                {
                    main: imgs.filter(img => img.category[0] === 1),
                    mini: imgs.filter(img => img.category[1] === 1), 
                    products: imgs.filter(img => img.category[2] === 1),
                    gulvsliping: imgs.filter(img => img.category[3] === 1),
                    behandling: imgs.filter(img => img.category[4] === 1),
                    vedlikehold: imgs.filter(img => img.category[5] === 1)
                }
            })
        }
    }
    let behandling = this.state.galleries.behandling;
    const behandlingGalleryLength = galleries.behandling.length;
    while (behandling.length < picturesAmount[4])
    {
        const randomValue = this.getRandomInt(behandlingGalleryLength);
        const behandlingTemp = galleries['behandling'][randomValue];
        if (!behandling.includes(behandlingTemp) && behandlingTemp !== undefined)
        {
            behandling = behandling.concat(behandlingTemp);
            galleries['behandling'].splice(randomValue,1);         
        }
        if (behandling.length === picturesAmount[4])
        {
            let stateGalleries = this.state.galleries;
            stateGalleries.behandling = behandling;
            //console.log(behandling);
            this.setState({
                galleries: {
                    ...stateGalleries
                },
                sourceGalleries: 
                {
                    main: imgs.filter(img => img.category[0] === 1),
                    mini: imgs.filter(img => img.category[1] === 1), 
                    products: imgs.filter(img => img.category[2] === 1),
                    gulvsliping: imgs.filter(img => img.category[3] === 1),
                    behandling: imgs.filter(img => img.category[4] === 1),
                    vedlikehold: imgs.filter(img => img.category[5] === 1)
                }
            })
        }
    }
    let vedlikehold = this.state.galleries.vedlikehold;
    const vedlikeholdGalleryLength = galleries.vedlikehold.length;
    while (vedlikehold.length < picturesAmount[5])
    {
        const randomValue = this.getRandomInt(vedlikeholdGalleryLength);
        const vedlikeholdTemp = galleries['vedlikehold'][randomValue];
        if (!vedlikehold.includes(vedlikeholdTemp) && vedlikeholdTemp !== undefined)
        {
            vedlikehold = vedlikehold.concat(vedlikeholdTemp);
            galleries['vedlikehold'].splice(randomValue,1);         
        }
        if (vedlikehold.length === picturesAmount[5])
        {
            let stateGalleries = this.state.galleries;
            stateGalleries.vedlikehold = vedlikehold;
            //console.log(vedlikehold);
            this.setState({
                galleries: {
                    ...stateGalleries
                },
                sourceGalleries: 
                {
                    main: imgs.filter(img => img.category[0] === 1),
                    mini: imgs.filter(img => img.category[1] === 1), 
                    products: imgs.filter(img => img.category[2] === 1),
                    gulvsliping: imgs.filter(img => img.category[3] === 1),
                    behandling: imgs.filter(img => img.category[4] === 1),
                    vedlikehold: imgs.filter(img => img.category[5] === 1)
                }
            })
        }
    }
    let main = this.state.galleries.main;
    const mainGalleryLength = galleries.main.length;
    while (main.length < picturesAmount[0])
    {
        const mainTemp = galleries['main'][this.getRandomInt(mainGalleryLength)];
        if (!main.includes(mainTemp))
        {
            main = main.concat(mainTemp);
        }
        if (main.length === picturesAmount[0])
        {
            let stateGalleries = this.state.galleries;
            stateGalleries.main = main;
            //console.log(mini);
            this.setState({
                galleries: {
                    ...stateGalleries
                }
            })
        }
    }   
    if (picturesAmount[2] > 0)
    {
        const productsTemp = galleries['products'];
        let stateGalleries = this.state.galleries;
        stateGalleries.products = productsTemp;
        //console.log(mini);
        this.setState({
            galleries: {
                ...stateGalleries
            }
        })
    } 

  }

  render ()
    {
        const galleries = this.state.galleries;
        const sourceGalleries = this.state.sourceGalleries;
        return (
            <> 
                <GalleryModule galleryType={this.props.galleryType} pictureToLightbox={this.props.pictureToLightbox} pictureToLightboxPosition={this.props.pictureToLightboxPosition} gallery={this.props.gallery} picture={this.props.picture} menuNavigation={this.props.menuNavigation} selectNewPhotoFromGallery={this.selectNewPhotoFromGallery} galleries={galleries} sourceGalleries={sourceGalleries}/>
            </>
        )
    }
}

export default GalleryContainer;
