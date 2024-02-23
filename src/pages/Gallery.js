import "./Gallery.css";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { cilHome } from "@coreui/icons";

import NavigationLinks from "../components/NavigationLinks";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Footer from "../components/Footer";
import CIcon from "@coreui/icons-react";


const Gallery = () => {    
    const galleryEventsList = [
        {
            "eventName": 'Virtual Events',
            "url": "",
            "imgPath": "Gallery/virtual_events_cover.jpg",
        },
        {
            "eventName": 'In-School Programs',
            "url": "",
            "imgPath": "Gallery/in-school-programs-cover.jpg",
        },
        {
            "eventName": 'Impact Stories',
            "url": "",
            "imgPath": "Gallery/impact_stories_cover.jpg",
        },
        {
            "eventName": 'Testimonials',
            "url": "",
            "imgPath": "Gallery/testimonials.jpeg",
        },
        {
            "eventName": 'Community Events',
            "url": "",
            "imgPath": "Gallery/community_events_cover.jpeg",
        },
        {
            "eventName": 'Rewards and Recognitions',
            "url": "",
            "imgPath": "Gallery/rewards-recognition-cover.jpeg",
        },
    ]

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
                            <li class=" active" style={{fontSize: '18px', color:'#878D92', marginTop:'15px' }} >  Gallery  </li>
                        </ol>
                    </nav>


                    <div className="carousel-container-gallery">
                        <div className="carousel-header-gallery">
                            <h2>Gallery</h2>
                            <div>Glimpses of our online and offline sessions across the world with students, teachers and mentors</div>
                        </div>
                    </div>                
                    
                    <Container >
                        <Row  className="g-3">
                            {Array.from( galleryEventsList ).map((item, idx) => (
                                
                                <Col key={idx} className="col-12 col-md-6 col-lg-4 card-col-gallery">
                                    <a key={idx} href={item.url}  style={{ textDecoration: 'none', cursor: 'pointer' }} >
                                        <Card className="card-title-gallery bg-transparent">
                                            <Card.Img variant="top" src={item.imgPath} />
                                            <Card.Body>
                                            <Card.Title > {item.eventName} </Card.Title>                                    
                                                <img src="/rightarrowsvg-3.svg" alt="" ></img>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                </Col>                                
                                )
                            )}
                        </Row>
                    </Container>                                                              
               </div>
            </section>
            
      
            <Footer />    

            {/* Bootstrap Container References :: */}
            {/* <Container className="mt-5"> 
                <div className="row g-3">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src="/akshadatrainsstudentsandplantstreesaspartofthesustainablespacesprograminschoolsatdubaiscaledjpg@2x.png"></img>
                            <div class="card-body"> 
                                <h5 className="card-title">Card 1 Card 1Card Title</h5>
                                <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src="/akshadatrainsstudentsandplantstreesaspartofthesustainablespacesprograminschoolsatdubaiscaledjpg@2x.png"></img>
                            <div class="card-body"> 
                                <h5 className="card-title">Card 1 Card 1Card Title</h5>
                                <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src="/akshadatrainsstudentsandplantstreesaspartofthesustainablespacesprograminschoolsatdubaiscaledjpg@2x.png"></img>
                            <div class="card-body"> 
                                <h5 className="card-title">Card 1 Card 1Card Title</h5>
                                <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>                
                </div>                 
            </Container> */}
                        
            {/* <Container className="mt-5">
                <Row  className="g-3">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col key={idx} className="col-12 col-md-6 col-lg-4">
                        <Card>
                            <Card.Img variant="top" src="/akshadatrainsstudentsandplantstreesaspartofthesustainablespacesprograminschoolsatdubaiscaledjpg@2x.png" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row>
            </Container> */}
        
        </div>
    );
  };
  
  export default Gallery;

