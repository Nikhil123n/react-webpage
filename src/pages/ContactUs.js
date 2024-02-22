import "./Gallery.css";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import NavigationLinks from "../components/NavigationLinks";
import Footer from "../components/Footer";
import "../components/Footer.css";
import ConnectUs from "../components/ConnectUs";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Button from 'react-bootstrap/Button';


const ContactUs = () => {    

    const StudentLoveProgram = 'none';
    
    return (
        <div class="home" style={{gap: '0px'}}>
            <section className="top-level" style={{marginBottom: '10px'}}>
                <div className="figma-logo" style={{gap: '25px'}}>
                    <NavigationLinks />
                    
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li >
                                <a href="/" style={{fontSize:'30px'}}>
                                    <img src="/home.png">
                                    </img>
                                </a>
                            </li>      
                            <li class="breadcrumb-item"></li>                      
                            <li class=" active" style={{fontSize: '18px', color:'#878D92', marginTop:'15px' }} >  Contact us  </li>
                        </ol>
                    </nav>                                                                                                                
               </div>
            </section>
            {/* <div className="google-map-div" style={{width: "100%"}}>
                <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps vehicle tracker</a>
                </iframe>
            </div> */}

            {/* marginTop: '-16%', */}
            <div className="google-map-div" style={{width: "100%"}}>
                <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps vehicle tracker</a>
                </iframe>
            </div>
            <Container className="contactus-container">                 
                <Row className="pb-3 contactus-row">
                    <Row className="contactus-row1" style={{
                        marginLeft: '0px',
                        marginRight: '0px',
                    }}>
                        OFFICE LOCATIONS
                    </Row>
                    <Row className="contactus-row2">
                        <Col xs sm="auto"> 
                            <FontAwesomeIcon icon={faLocationDot} className="angle-right-icon" swapOpacity size="sm" />            
                        </Col>                        
                        <Col><span>Singapore</span></Col>
                    </Row>
                </Row>
                <hr class="hr hr-blurry" />
                <Row className="contactus-row">
                    <Col>
                        <Button variant="outline-secondary" className="contactus-button">                            
                            <FontAwesomeIcon icon={faEnvelope} className="fa-regular" swapOpacity size="lg" />            
                            <span className="span-contactus">
                            TEAM@LEARNWITHLEADERS.COM
                            </span>
                        </Button>{''}
                    </Col>
                    <Col style={{textAlign: 'center'}}>
                        <Button variant="outline-secondary" className="contactus-button">                            
                            <FontAwesomeIcon icon={faWhatsapp} className="fa-regular" swapOpacity size="lg" />            
                            <span className="span-contactus">
                            +44 7868813293
                            </span>
                        </Button>{''}
                            
                    </Col>                    
                </Row>
                <hr class="hr hr-blurry" />                

                <Row className="contactus-row">
                <section className="frame-parent">
                                        
                        <div className="frame-wrapper">
                            <div className="frame-group">
                            <div className="join-the-changemakers-wrapper">
                                <div className="join-the-changemakers">Join the ChangeMakers</div>
                            </div>
                            <div className="join-form-frame">
                                <div className="input">
                                <input
                                    className="enter-your-email-id"
                                    placeholder="Enter your Email-Id"
                                    type="text"
                                />
                                </div>
                                <button className="button1">
                                <div className="submit">Submit</div>
                                </button>
                            </div>
                            </div>
                        </div>
                </section>
                </Row>

            </Container>
      
            <Footer />    
         
        
        </div>
    );
  };
  
  export default ContactUs;