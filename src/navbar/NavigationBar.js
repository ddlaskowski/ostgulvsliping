import React, { Component } from "react";

import logo from './../icons/logo.svg';
import logotype from './../icons/logotype.svg';
import { Navbar, Nav} from 'react-bootstrap';
import { getClientData } from "../DataModelEngine";

class NavigationBar extends Component {
    constructor () {
        super();
        this.state = {};
    } 
    

  render (){
    const menuBar = [
        {title: "Hjem", link: ''},
        {title: "Tjenester", link: 'tjenester'},
        {title: "Know How", link: 'knowhow'},
        {title: "Produkter", link: 'produkter'},
        {title: "Galleri", link: 'galleri'}, 
        {title: "Kontakt oss", link: 'kontakt'}
    ];
    return (
        <Navbar 
            variant="dark" 
            expand="lg" 
            id="navigation-menu" 
            style={{color: '#FFF'}} 
            collapseOnSelect
        >
            <Navbar.Brand 
                href="/">				
                    <div className='nav-logo'>
                        <img 
                            src={logo} 
                            alt={getClientData('clientCompanyName')} 
                        />
                        <img 
                            src={logotype} 
                            alt={getClientData('clientCompanyName')}
                        />
                    </div>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse >
                <Nav 
                    className="ml-auto" 
                    style={{zIndex: '999'}}>
                    {menuBar.length > 0 && menuBar.map((item, index)=>(
                        <Nav.Link 
                        name={item.link} 
                        key={index} 
                        href={'/'+item.link}>
                            {item.title}
                        </Nav.Link>                    
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )}
}

export default NavigationBar;