import React, { Component } from "react";
import { Row, Col} from 'react-bootstrap';
import { getClientData } from "../DataModelEngine";
class Header extends Component {
  render ()
 {
    return (
        <Row>
          <Col sm={12} lg={12}>
            <header className="App-header ">
              <img src={getClientData('logotype')} className='logotype' alt={getClientData('clientCompanyName')}/>
            </header>
          </Col>
        </Row> 
    );
  }
}

export default Header;
