import "./Gallery.css";
import React from "react";
import { useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { cilHome } from "@coreui/icons";

import NavigationLinks from "../components/NavigationLinks";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Footer from "../components/Footer";
import CIcon from "@coreui/icons-react";

const InSchoolProgramsData = require('../json/inSchoolPrograms.json');


const GalleryEvents = () => {       
    const navigate = useNavigate();
    const location = useLocation();
    const eventData = location.state;
    const eventName = "In School Programs".toLowerCase().replace(/ /g, "_");

    console.log("eventData")
    console.log(eventData, eventName)
    
    const school_programs = InSchoolProgramsData[eventData.toLowerCase().replace(/ /g, "_")];


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
                            <li class=" active" style={{fontSize: '18px', color:'#878D92', marginTop:'15px', color : '#F1B537' }} >  Gallery  </li>
                            <li class="breadcrumb-item"></li>                      
                            <li class=" active" style={{fontSize: '18px', color:'#878D92', marginTop:'15px' }} >  {eventData} </li>
                        </ol>
                    </nav>


                    <div className="carousel-container-gallery">
                        <div className="carousel-header-gallery">
                            <h2>{eventData}</h2>
                            <div>Glimpses of our online and offline sessions across the world with students, teachers and mentors</div>
                        </div>
                    </div>                
                    
                    <Container >
                        <Row  className="g-3">
                            {Array.from( school_programs ).map((item, idx) => (
                                
                                <Col key={idx} className="col-12 col-md-6 col-lg-4 card-col-gallery">
                                    <a key={idx} href={item.img_url}  style={{ textDecoration: 'none', cursor: 'pointer' }} >
                                        <Card className="card-title-gallery bg-transparent">
                                            <Card.Img variant="top" src={item.img} />
                                            <Card.Body>
                                            <Card.Title >{item.location + '  |  ' } {item.venue} </Card.Title>                                    
                                                <img src="/rightarrowsvg-3.svg" alt="" ></img>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                </Col>                                
                                )
                            )}
                        </Row>
                    </Container>                                                              

                    {/* <Container>
                        <Row>
                        {school_programs.map((event, index) => (          
                                <Img1
                                    propBackgroundImage= {event.img_url}              
                                    heading={event.location + ' | ' + event.venue}    
                                    galleryUrl = '/gallery/in-school-programs'                                        
                                />            
                            ))}  
                        </Row>
                    </Container> */}
               </div>
            </section>
            
      
            <Footer />    

            
        
        </div>
    );
  };
  
  export default GalleryEvents;

