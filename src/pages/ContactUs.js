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
        <div class="home">
            <section className="top-level">
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

            {/* marginTop: '-16%', */}
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
                        <Button variant="outline-secondary">
                            <FontAwesomeIcon icon={faEnvelope} className="fa-regular" swapOpacity size="lg" />            
                            TEAM@LEARNWITHLEADERS.COM</Button>{''}
                    </Col>
                    <Col>
                        <Button variant="outline-secondary">
                            <FontAwesomeIcon icon={faWhatsapp} className="fa-regular" swapOpacity size="lg" />            
                            +44 7868813293</Button>{''}
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