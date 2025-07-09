import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

class ContactForm extends Component {
  constructor () {
    super();
    this.state = {
			contact: {name: false, lastname: false, mobile: false, email: false}
      }
      this.handleTextInput = this.handleTextInput.bind(this);
      this.handleUserInput = this.handleUserInput.bind(this);
	  }
  handleTextInput (event) {
  	const value = event.target.value,
  		name = event.target.name,
  		forwardObject = {[name]: value};
  	this.props.saveValues(forwardObject);
  	}
  handleUserInput(event){
  	const id = event.target.id,
  		name = event.target.name,
  		forwardObject = {[name]: id};
  	this.props.saveValues(forwardObject);
  }
	render() {
    let contactFormLabels = this.props.contactForm ? this.props.contactForm : [];
		return (
      <fieldset>
        <Form.Group as={Row} controlId="name">
          <Col  xs={{offset: 1, span: 10}} md={{offset: 2, span: 6}} lg={{offset: 2, span: 8}}>
            <Form.Control onChange={this.handleTextInput} value={this.props.name ? this.props.name : ''} name="name" type="text" placeholder={contactFormLabels[0]} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="email">
          <Col  xs={{offset: 1, span: 10}} md={{offset: 2, span: 6}} lg={{offset: 2, span: 8}}>
            <Form.Control onChange={this.handleTextInput} value={this.props.email ? this.props.email : ''} name="email" type="email" placeholder={contactFormLabels[1]} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="message">
          <Col style={{fontVariant: 'normal'}} xs={{offset: 1, span: 10}} md={{offset: 2, span: 6}} lg={{offset: 2, span: 8}}>
            <Form.Control onChange={this.handleTextInput} value={this.props.message ? this.props.message : ''} as="textarea" rows={7} type="text" name='message' placeholder={contactFormLabels[3]} />
          </Col>
        </Form.Group>  
        <Form.Group as={Row} controlId="accept">
          <Form.Label column  xs={{offset: 1, span: 10}} md={{offset: 2, span: 6}} lg={{offset: 2, span: 8}}>
          <Form.Check onChange={this.handleUserInput} checked={this.props.accept ? true : null} style={{display: 'inline', marginRight: '15px'}} type="checkbox" name='accept'/>
           {this.props.contactRules}
          </Form.Label>
        </Form.Group>  
        <Button ref={(el) => { this.nextButton = el; }} style={{border: 'none', cursor: 'pointer', width:  '15vh', visibility: 'visible'}} variant='light'  name='next' id='next' onClick={!this.props.name || !this.props.email || !this.props.message || !this.props.accept ? null : this.props.sendForm }>send</Button>     
        </fieldset>
		) 
	}
}

export default ContactForm;