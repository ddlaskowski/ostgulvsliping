import React, { Component } from 'react';
import './callpopup.css'
import ring from './ring.svg';
import { getClientData } from '../DataModelEngine';

class CallPopup extends Component {
	render() {
		return (
			<div className='call-popup'>
				<p className='call-popup-close-button' onClick={this.props.closeCallPopup}>X</p>
				<a href={'tel:'+getClientData('clientPhone')}>
                    <div className='ring' style={
                        {
                            backgroundImage: 'url('+ring+')',
                            backgroundRepeat: 'no-repeat',
                            width: "70%",
                            height: "70%",
                            position: "absolute",
                            top: '15%',
                            left: '30%',
                            transform: 'rotateZ(-15deg)'
                        }
                    }></div>
                </a>

			</div>
		) 
	}
}

export default CallPopup;