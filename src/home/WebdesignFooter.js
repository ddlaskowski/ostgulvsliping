import React, { Component } from "react";
import { Row, Col,} from 'react-bootstrap';

class WebdesignFooter extends Component {
  render ()
 {
    return (
        <Row id='webdesign'>
          <Col>
          <div style={{width: "100%", height: '70px', textAlign: 'center'}}>            
            <p style={{width: "100%", height: '25px', textAlign: 'center'}}><a name='laskowski' href='https://laskowski.no'>Webdesign Laskowski Creative</a></p>
          </div>
          </Col>
        </Row>
    );
  }
}

export default WebdesignFooter;
