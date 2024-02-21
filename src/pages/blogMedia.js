import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import NavigationLinks from "../components/NavigationLinks";
import ConnectUs from "../components/ConnectUs";
import Footer from "../components/Footer";

const certificateFigureData = require('../json/certificate.json');
import "./certificate.css";
import "./blogMedia.css";
import "../components/gridElements.css";




const BlogMedia = () => {  
  
  const StudentLoveProgram = 'none';
  const blogAndMediaList = [
    {
        "eventName": 'Virtual Events',
        "url": "https://learnwithleaders.com/wp-content/uploads/2023/07/empowerment.jpg",
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
    <div className="home">
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
                            <li class=" active" style={{fontSize: '18px', color:'#878D92', marginTop:'15px' }} >  Blog & Media  </li>
                        </ol>
                    </nav>


                    <div className="carousel-container-blog">
                        <div className="carousel-header-blog">
                            <h2>Learn with Leaders in the news </h2>
                            <div>They learn creativity and apply it to develop exceptional business plans and grow as</div>
                            <div>future leaders, innovators, and entrepreneurs.</div>
                        </div>
                    </div>                
                    
                    <Container >
                        <Row  className="g-3">
                            {Array.from( blogAndMediaList ).map((item, idx) => (
                                
                                <Col key={idx} className="col-12 col-md-6 col-lg-4 card-col-blog">
                                    <a key={idx} href={item.url}  style={{ textDecoration: 'none', cursor: 'pointer' }} >
                                        <Card className="card-title-blog bg-transparent">
                                            <Card.Img variant="top" src="https://learnwithleaders.com/wp-content/uploads/2023/07/empowerment.jpg" />
                                            <Card.Body 
                                              style={{
                                                maxWidth: '400px',
                                                borderTop: '1px solid #393939',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                height: '200px',
                                              }}>
                                              
                                            <Card.Title 
                                              style={{fontSize: '16px', 
                                                      fontFamily:'Inter, Arial, Helvetica, sans-serif', 
                                                      color:'#fff', 
                                                      letterSpacing: '0.015em',
                                                      fontStyle: 'normal',                                                      
                                                      lineHeight: '20px',
                                                      fontWeight: '400'}}>
                                              Expanding Horizons & Breaking Stereotypes: My Journey through the Public Speaking Masterclass by Hala Osman
                                            </Card.Title>        

                                              <Card.Text style={{fontSize: '16px', 
                                                      fontFamily:'Inter, Arial, Helvetica, sans-serif', 
                                                      color:'#878D92',                                                       
                                                      fontStyle: 'normal',                                                      
                                                      lineHeight: '18px',
                                                      fontWeight: '400',
                                                      display: 'flex',
                                                      justifyContent: 'space-between',
                                                      
                                                      }}>
                                                <span><img src="/rightarrowsvg-3.svg" alt="" ></img></span>
                                                <span>July 5, 2023</span>

                                              </Card.Text>
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
      
      <ConnectUs 
        divNone={StudentLoveProgram}        
      />
      <Footer />
    </div>
  );
};

export default BlogMedia;