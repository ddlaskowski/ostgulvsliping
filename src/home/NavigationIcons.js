import React, { Component } from "react";
import { Row, Col} from 'react-bootstrap';
import { services } from "./../content/servicesContent";

class NavigationIcons extends Component {
    render ()
    {
        const servicesContent = services;
        return (
          <Row id='services'>
            {servicesContent && servicesContent.map((service, index)=>(
                <Col key={index} xs={4} sm={4} lg={4}>
                    <div style={{backgroundImage: 'url('+service.ico+')'}}>
                        <a
                        navigationid={service.name}
                        name="tjenester" 
                        href={'/'+service.name}>
                            <div
                            name="tjenester"
                            navigationid={service.name}
                            id='service-link'
                            ></div>
                        </a>
                        <p>
                        {service.name}
                        </p>
                    </div>
                </Col>
            ))}
       </Row>
    )
}

}
export default NavigationIcons;
