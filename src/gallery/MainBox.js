/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import plate from './plate.png';

class MainBox extends Component {
  constructor () {
    super();
	  this.state = {
    }
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
                    key={index} 
                    id='main-image' 
                    style={{
                        zIndex:5,
                        backgroundImage: path,
                        backgroundPositionX: picture.x+"%",
                        backgroundPositionY: picture.y+"%", 
                        backgroundSize: picture.scale+'%'                      
                }}>
                </div>
            </>
        )
    
}
}

export default MainBox;
