import React, { Component } from "react";
import { Row, Col,} from 'react-bootstrap';
import { getClientData } from "./../DataModelEngine";
import Copyright from "./Copyright";

class Footer extends Component {
  render ()
 {
    return (
        <footer >
          <Row >
            <Col xs={{span: 12, order: 12}} lg={{span: 4, order: 1}} >
              <p>
                <a name='mail' href={"mailto:"+getClientData('clientEmail')}>{getClientData('clientEmail')}</a> 
              </p>
              <p>
                <a name='ring' href={'tel:'+getClientData('clientPhone')}>{getClientData('clientFancyPhone')}</a>
              </p>
            </Col>
            <Col xs={{span: 12, order: 1}} lg={{span: 4, order: 4}}>
              <img src={getClientData('logotype')} className='logotype-footer' alt={getClientData('clientCompanyName')}/>
              <p style={{width: "100%", height: '25px', textAlign: 'center'}}><Copyright/></p>
            </Col>
            <Col xs={{span: 12, order: 6}} lg={{span: 4, order: 12}}>
              <p>
                {getClientData('clientCompanyName')}
              </p>
              <p>
                {getClientData('clientAddress')}
              </p>
              <p>  
                {getClientData('clientCity')}
              </p>
            </Col>
          </Row>
        </footer>
    );
  }
}

export default Footer;
