import React, { Component } from 'react';

class Copyright extends Component {
	render() {
		const whatYearItIs = function (){
		const date = new Date();
        const year = date.getFullYear();
    	return year;
		}
		return (
		    <>{'Copyright '+ whatYearItIs()}</>
		) 
	}
}

export default Copyright;