import "./Gallery.css";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import NavigationLinks from "../components/NavigationLinks";
import EventImgOverlay from "../components/EventImgOverlay";
import DivcolLg from "../components/DivcolLg";


import Footer from "../components/Footer";

import ConnectUs from "../components/ConnectUs";


const AboutUs = () => {    
    const StudentLoveProgram = 'none';
    const TakingRoomOutofClassroom = (
        <ul>
          <li>We focus on ideas and narratives that don’t get sufficient space and time in the school curriculum.</li>
          <li>We help young learners connect with leading thinkers, pioneering practitioners, and global leaders who lie outside the circle and reach students.</li>
          <li>We bring students closer to acclaimed academic and corporate institutions featured in media headlines and social stories.</li>
        </ul>
      );
    const OurVision = "We aim to inspire the next generation to become changemakers and problem-solvers by providing them with the required skillsets and thinking abilities. We aspire to change the lives of every high school student across the world."
    const OurMission = "We are on a mission to effect a paradigm shift in education and introduce an updated and need-of-the-hour curriculum to teenagers, allowing them to explore their interests, maximize their potential, and rise as future leaders."

    const emailAddress = "team@learnwithleaders.com";
    const letsConnectButtonClick = () => {
        window.location.href = `mailto:${emailAddress}`;
      };
    const whyLWL = [
        {
            icon: "about-us-icon-1.png",
            head: "Face to Face",
            content: "Bring high schoolers\nface-to-face with\nlife-altering phenomena\npersonalities, and experiences",
        },
        {
            icon: "about-us-icon-2.png",
            head: "Break Limits",
            content: "Break down the unfair ‘limits’ of\nman-made barriers",
        },
        {
            icon: "about-us-icon-3.png",
            head: "Powerful Networks",
            content: "Help students build\npowerful networks with\nglobal entities and enrich\nbonds with like-minded peers\nfrom around the world",
        },
        {
            icon: "what-gain-1-1.png",
            head: "Young Mind",
            content: "Expose the young mind to a\nricher palette of possibilities",
        },
        {
            icon: "what-gain-1-2.png",
            head: "Citizen Leaders",
            content: "Initiate a journey aimed to\nbuild holistic ‘Citizen Leaders’\nof tomorrow who are both globally\nprepared and locally sensitized",
        },
        {
            icon: "about-us-icon-6.png",
            head: "Opportunity",
            content: "Bring the next generation\ncloser to opportunities that\ntheir parents and seniors lacked"
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

            <div className="hero-about-us-img" >
                <img src="about-us-cover-image.jpeg" width="100%" height='600' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="img-fluid" alt="..."  
                    />
            </div>

            {/* <div className="" style={{width: "100%"}}>
                <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                    src="about-us-cover-image.jpeg?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps vehicle tracker</a>
                </iframe>
            </div> */}

            <Container className="about-us-container" > 
                <Row>
                    <h2>About us</h2>
                </Row>
                <Row style={{lineHeight: '1.5'}}>
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

            <section className="arrow-svg">
                <div className="event-img-overlay-parent">
                    <DivcolLg 
                        arrowStyles={{display: 'none' }} 
                        heading="Taking The Room Out Of The Classroom"
                        paragraph={TakingRoomOutofClassroom}
                        imgPath="TakingRoomOutOfClass.jpg"
                    />

                    <Container className="about-us-LWL-container" >
                        <Row className="mb-4">
                            <div>
                                <h2>
                                    Why LWL?
                                </h2>
                                <h5>
                                    The potential to learn for a middle and high school student is limitless –
                                </h5>
                            </div>
                        </Row>
                        <Row  className="g-3">
                            {whyLWL.map((item, idx) => (
                                <Col key={idx} className="col-12 col-md-6 col-lg-4">
                                <Card className="about-us-card">
                                    <Card.Img style={{width: '57px', marginLeft: '10px'}}  variant="top" src={item.icon} />
                                    <Card.Body>
                                        <Card.Title className="about-us-card-title" > {item.head} </Card.Title>
                                        <Card.Text className="about-us-card-text">
                                            {item.content.split('\n').map((line, index) => (
                                                <React.Fragment key={index}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>

                    <EventImgOverlay 
                        arrowStyles={{display: 'none' }}
                        programName = "none"
                        heading="Our Vision"
                        paragraph={OurVision}
                        imgPath="OurVision.jpg"
                    />

                    <DivcolLg 
                        arrowStyles={{display: 'none' }} 
                        heading="Our Mission"
                        paragraph={OurMission}
                        imgPath="OurMission.png"
                    />

                    <Container className="lets-connect-container">
                        <Row xs="auto" className="lets-connect-row">
                            <Col>
                                <h4>For further queries regarding the platform or the courses, reach out to us at:</h4>
                            </Col>
                            <Col>
                            <a href={`mailto:${emailAddress}`} target="_blank" style={{ textDecoration: 'none', cursor: 'pointer'}}>
                                <button className="button" >
                                    <div className="lets-talk">Let’s connect</div>
                                    <FontAwesomeIcon icon={faAngleRight} className="angle-right-icon" swapOpacity />            
                                </button>
                            </a>
                            </Col>
                        </Row>
                    </Container>
                                        
                </div>
            </section>

            
            <ConnectUs divNone={StudentLoveProgram}    />
            <div class="mt-3 mb-5"></div>
            <Footer />
        </div>
    );
  };
  
  export default AboutUs;

