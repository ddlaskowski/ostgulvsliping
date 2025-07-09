import React, { Component } from "react";
import ContactForm from './ContactForm';
import {Col, Button } from 'react-bootstrap';
import { getClientData } from "../DataModelEngine";
import { serverConnection } from "../serverroutes/serverRouteEngine";

class ContactPanel extends Component {
    constructor () {
        super();
        this.state = {
            messageId: false,
            messageForm: {
                email: false,
                mobile: false,
                name: false,
                message: false,
                accept: false,
            }
        }
        this.saveValues = this.saveValues.bind(this);
        this.sendForm = this.sendForm.bind(this);
        this.clearMessageId = this.clearMessageId.bind(this);
    }
    saveValues(object) {
        this.setState({
            messageForm: {
                ...this.state.messageForm,
                ...object,
            }
        })
    }

    clearMessageId(){
        this.setState({
            messageId: false
        })
    }
    sendForm() {
        let inquiry = this.state.messageForm;
        inquiry.uid = getClientData('uid');
        inquiry.client_key = getClientData('clientKey');
        const json = serverConnection('sendContactForm', 'post', 'json', inquiry);
        this.setState(
            {
                messageId: true, 
                messageForm: {
                    email: false,
                    mobile: false,
                    name: false,
                    message: false,
                    accept: false,
                },
            }
        )
    }

  render (){
      const lang = {
        kontakt: {
            no: ['navn', 'e-post eller tlf.', 'telefon', 'melding']
        },
        kontaktRules: {
             no: 'Jeg godtar behandlingen av mine personlige opplysninger gitt i dette forespørselsskjemaet av Østgulvsliping AS for å kontakte deg og svare på det stilte spørsmålet.'
        },
        thankYouHeader: ['Takk for melding!', 'Vi kontakter deg snart.'],
      }      
      return (
        <div id='kontakt' className='content'>
            {/*<div className='picture'>
                <img src='./lc_ico/lc_contact.svg' alt='description'/>          
        </div>*/}
            {!this.state.messageId && <div >
                <h1>{this.props.contactHeader}</h1>
                <ContactForm contactRules={lang.kontaktRules.no} contactForm={lang.kontakt.no} sendForm={this.sendForm} saveValues={this.saveValues} {...this.state.messageForm}/>
            </div>}
            {this.state.messageId && <div >
                <h1>{lang.thankYouHeader[0]}</h1>
                <h3>{lang.thankYouHeader[1]}</h3>
                <Button ref={(el) => { this.nextButton = el; }} style={{borderRadius: 0, visibility: 'visible'}} as={Col} variant='light'  name='next' id='next' onClick={this.clearMessageId}>OK</Button>
            </div>}
        </div>
        )}
}

export default ContactPanel;