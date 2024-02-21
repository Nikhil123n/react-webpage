import "./Gallery.css";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { cilHome } from "@coreui/icons";

import NavigationLinks from "../components/NavigationLinks";

import Footer from "../components/Footer";
import CIcon from "@coreui/icons-react";
import ConnectUs from "../components/ConnectUs";


const AboutUs = () => {    
    const galleryEventsList = [
        {
            "eventName": 'Virtual Events',
            "url": "",
        },
        {
            "eventName": 'In-School Programs',
            "url": "",
        },
        {
            "eventName": 'Impact Stories',
            "url": "",
        },
        {
            "eventName": 'Testimonials',
            "url": "",
        },
        {
            "eventName": 'Community Events',
            "url": "",
        },
        {
            "eventName": 'Rewards and Recognitions',
            "url": "",
        },
    ]

    return (
        <div class="home" style={{gap: '0px'}}>
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
                            <li class=" active" style={{fontSize: '18px', color:'#878D92', marginTop:'15px' }} >  About us  </li>
                        </ol>
                    </nav>                    

                </div>
            </section>

            <img src="about-us-cover-image.jpeg" class="img-fluid" alt="..."  
                style={{backgroundSize: 'cover'}} />

            <Container className="about-us-container" > 
                <Row>
                    <h2>About us</h2>
                </Row>
                <Row>
                    <p>Learn with Leaders is a global education initiative inspiring teenagers to change the way they think 
                        so that they can make more fulfilling career and life decisions.</p>
                    <p>Our programs and competitions spanning entrepreneurship, design thinking, leadership, artful thinking, 
                        sustainability, MUNs, and finance primarily fill the gap that our traditional education system cannot address.</p>
                    <p>Across our programs, we try to maintain a commonality of students getting to learn new skills, group project work, 
                        and international participation.</p>
                    <p className="para-4">We, Learn with Leaders, are the partner platform of the student clubs and student organizations amplifying the remarkable 
                        autonomy and responsibility shouldered by these driven clubs and organizations, promoting the significance and effectiveness 
                        of these impactful programs.</p>
                </Row>
            </Container>

            <ConnectUs />
            <Footer />
        </div>
    );
  };
  
  export default AboutUs;

