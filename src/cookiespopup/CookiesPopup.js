import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import './popup.css'

class CookiesPopup extends Component {
	constructor (props) {
		super(props);
		this.state = {
			mainClass: "cookies-popup"
		};
    	this.setCookie = this.setCookie.bind(this);
	};


	setCookie() {
		const cookies = new Cookies();
		let expires = new Date();
  	expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000));
		cookies.set('cookies-accepted', true, expires.toUTCString(), {path: '/'});
		this.setState({
			mainClass: "cookies-popup-disappear"
		})
	}
	render() {
		return (
			<div className={this.state.mainClass}>
				<p className='cookies-popup-close-button' onClick={this.setCookie}>X</p>
				<p>Nettstedet bruker cookies. Ved å bruke nettstedet godtar du cookie politikk.</p>
			</div>
		) 
	}
}

export default CookiesPopup;