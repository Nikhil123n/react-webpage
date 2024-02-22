import React, { useState } from "react";
import { Row, Col, ButtonGroup } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import NavigationLinks from "../components/NavigationLinks";
import DivcolLg from "../components/DivcolLg";
// import Container from "../components/Container";
import Footer from "../components/Footer";
import ConnectUs from "../components/ConnectUs";
import DivowlItem from "../components/DivowlItem";
import DivfusionColumnWrapper from "../components/DivfusionColumnWrapper"; 
import { Button } from "@coreui/coreui";
import "./CertificateProgram.css";


const CertificateProgram = () => {
    const StudentLoveProgram = 'none';
    const style = {backgroundColor: 'rgba(0, 0, 0, 0)' }
    const beAChangemakers = {alignSelf: 'baseline'}
    const background = {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderStyle: 'inset',
        borderRadius: '12px 12px 12px 12px;',
        boxShadow: 'none',
        borderColor: '#878d92',
    }

    const whyLWL = [
      {
          icon: "",
          head: "Build a strong portfolio",
          content: "Gain a unique opportunity to enhance your skills and build a strong portfolio through various projects and initiatives.",
      },
      {
          icon: "",
          head: "Break Limits",
          content: "Break down the unfair ‘limits’ of\nman-made barriers",
      },
      {
          icon: "",
          head: "Powerful Networks",
          content: "Help students build\npowerful networks with\nglobal entities and enrich\nbonds with like-minded peers\nfrom around the world",
      },
      {
          icon: "",
          head: "Young Mind",
          content: "Expose the young mind to a\nricher palette of possibilities",
      },
      {
          icon: "",
          head: "Citizen Leaders",
          content: "Initiate a journey aimed to\nbuild holistic ‘Citizen Leaders’\nof tomorrow who are both globally\nprepared and locally sensitized",
      },
      {
          icon: "",
          head: "Opportunity",
          content: "Bring the next generation\ncloser to opportunities that\ntheir parents and seniors lacked"
      },
  ]

    const toogleBarStylesCP = {
          color: '#878d92', 
          marginRight: '7px',
          textTransform: 'uppercase',
          letterSpacing: '3px',          
          }
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      if (toggleState !== index) {
        setToggleState(index);
        console.log(index.school_programs);
      }
    }; 
    const contentElement = document.getElementById("content");
    function scrollToDiv(divId) {
      const element = document.getElementById(divId);
      element.scrollIntoView({ behavior: "smooth" });
    }

    const [toggleScheduleState, setToggleScheduleState] = useState(1);
    const toggleSchedule = (index) => {
        if (toggleScheduleState !== index) {
            setToggleScheduleState(index);          
        }
      };

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
                      <li class=" active" style={{fontSize: '18px', color:'#878D92', marginTop:'15px', color : '#F1B537' }} >  Our Offerings  </li>
                      <li class="breadcrumb-item"></li>                      
                      <li class=" active" style={{fontSize: '18px', color:'#878D92', marginTop:'15px', color : '#F1B537' }} >  Certificate Programs  </li>
                      <li class="breadcrumb-item"></li>                      
                      <li class=" active" style={{fontSize: '18px', color:'#878D92', marginTop:'15px' }} >  The Future Changemakers Program by Harvard Student Agencies  </li>
                  </ol>
              </nav>                    
            </div>
          </section>    

          <div className="" style={{width: "100%", height: '600px', overflow: 'hidden', backgroundSize: 'cover', marginTop: '-46px'}}>
              <img src="about-us-cover-image.jpeg" width="100%" height='600' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="img-fluid" alt="..."  
                  />
          </div>

          <Container className="about-us-container" > 
                {/* Row 1  */}
                <Row style={{display: 'flex', justifyContent: 'space-between', padding: "25px 60px"}}>
                    <Col>
                        <Row style={{ color: '#878D92', fontSize: '16px', padding: '0 0 10px 13px'}}>In collaborations with</Row>
                        <Row>
                          <img src="certificate-program-collabortion-logo.jpeg" 
                                style={{maxHeight: "50px", important: "true", width: 'auto'}} alt="">
                          </img> 
                        </Row>
                          
                    </Col>
                    <Col xs="auto" style={{position: 'relative', backgroundColor: '#323232',
                                        padding: '10px 10px 0 10px',
                                        top: '0',
                                        borderRadius: "0 0 5px 5px"
                                        }}>
                        <Row style={{color: "#878D92", margin: "0 0 10px" }}>Starts on</Row>
                        <Row style={{color: "#F1B537", fontSize: '24px', fontWeight: '600', margin: "0 0 10px", lineHeight: '20px'}}>12 Oct</Row>
                        <Row style={{color: "#fff", margin: "0 0 10px"}}>2024</Row>                        
                    </Col>
                </Row>

                {/* Row 2  */}
                <Row style={{display: 'flex', justifyContent: 'space-between', padding: "25px 60px"}}>
                    <Col>
                        <Row style={{ color: '#fff', fontWeight: '600', lineHeight: '1.3'}}>
                          <h2 style={{marginBottom: '0px', padding: '0 0 10px 0px'}}>The Future Changemakers Program by Harvard Student Agencies</h2>
                        </Row>
                        <Row style= {{color: "#878D92", fontWeight: '400', fontSize: '20px', important: 'true'}}> 
                          <i style={{paddingLeft: '0px'}}>Empowering the next generation of innovators and leaders for a better tomorrow.</i>
                        </Row>
                          
                    </Col>
                    <Col xs="auto" style={{alignSelf: 'center' }}>
                        
                        <Row style={{color: "#F1B537", fontSize: '24px', fontWeight: '600', margin: "0 0 10px", lineHeight: '20px'}}>
                                <button className="button" >
                                    <div className="lets-talk">Apply Now</div>
                                    <FontAwesomeIcon icon={faAngleRight} className="angle-right-icon" swapOpacity />            
                                </button>
                        </Row>                                                
                    </Col>
                </Row>
                
                {/* Row 3  */}
                <Row style={{display: 'flex', justifyContent: 'space-between', padding: "25px 60px"}}>
                    <Col style={{ padding: '0 25px 20px 0'}}>
                        <Row style={{ color: '#878D92', fontSize: '15px', paddingBottom: '5px'}}> <p>Eligibility</p> </Row>
                        <Row style={{ color: '#fff', fontSize: '17px' }} > <p>Grades 8th-12th</p> </Row>                          
                    </Col>
                    <Col style={{ padding: '0 25px 20px 0'}}>
                        <Row style={{ color: '#878D92', fontSize: '15px', paddingBottom: '5px'}}> <p>Duration</p> </Row>
                        <Row style={{ color: '#fff', fontSize: '17px' }} > <p>4 Weekends</p> </Row>                          
                    </Col>
                    <Col style={{ padding: '0 25px 20px 0'}}>
                        <Row style={{ color: '#878D92', fontSize: '15px', paddingBottom: '5px'}}> <p>Early Application Date</p> </Row>
                        <Row style={{ color: '#fff', fontSize: '17px', paddingBottom: '5px'}} > <p>31 August, 2024</p> </Row>                          
                        <Row style={{ color: '#F1B537', fontSize: '12px' }} > <p>[Regular Date: 15 Sep, 2024]</p> </Row>                          
                    </Col>
                    <Col style={{ padding: '0 25px 20px 0'}}>
                        <Row style={{ color: '#878D92', fontSize: '15px', paddingBottom: '5px'}}> <p>Program Fee for Early Applicants</p> </Row>
                        <Row style={{ color: '#fff', fontSize: '17px', paddingBottom: '5px' }} > <p>USD 350</p> </Row>                          
                        <Row style={{ color: '#F1B537', fontSize: '12px' }} > <p>[Regular Fee: USD 450]</p> </Row>                          
                    </Col>
                    <Col style={{ padding: '0 25px 20px 0'}}>
                        <Row style={{ color: '#878D92', fontSize: '15px', paddingBottom: '5px'}}> <p>Application Deadline</p> </Row>
                        <Row style={{ color: '#fff', fontSize: '17px' }} > <p>15 September, 2024</p> </Row>                          
                    </Col>
                    <Col style={{ padding: '0 25px 20px 0'}}>
                        <Row style={{ color: '#878D92', fontSize: '15px', paddingBottom: '5px'}}> <p>Program Delivery</p> </Row>
                        <Row style={{ color: '#fff', fontSize: '17px' }} > <p>Zoom Led</p> </Row>                          
                    </Col>
                </Row>                
          </Container>

          <Container>
          <div className="timeline">            

            <div className="event">
                <div className="tab-grp-1" style={{gap: '0'}}>
                  <button className="timeline-btn-border c-1 mt-4 certificate-program-btn" onClick={() => {toggleTab(1); scrollToDiv('about');} }>
                        <div className={toggleState === 1 ? "about active-tabs" : "about"}  style={toogleBarStylesCP}>About</div>
                   </button>

                   <button className="timeline-btn-border c-1 mt-4 certificate-program-btn" onClick={() => {toggleTab(2); scrollToDiv('what-you-ll-gain');} }>
                        <div className={toggleState === 2 ? "what-will-gain active-tabs" : "what-will-gain"} style={toogleBarStylesCP} >What You'll Gain</div>
                   </button>
                   
                   <button className="timeline-btn-border c-1 mt-4 certificate-program-btn" onClick={() => {toggleTab(3); scrollToDiv('mentors');} }>
                        <div className={toggleState === 3 ? "mentors active-tabs" : "mentors"}  style={toogleBarStylesCP} >Mentors</div>
                   </button>
                   
                   <button className="timeline-btn-border c-1 mt-4 certificate-program-btn" onClick={() => {toggleTab(4); scrollToDiv('awards');} }>
                        <div className={toggleState === 4 ? "awards-recognition active-tabs" : "awards-recognition"}  style={toogleBarStylesCP} >Awards & Recognition</div>
                   </button>
                   
                   <button className="timeline-btn-border c-1 mt-4 certificate-program-btn" onClick={() => {toggleTab(5); scrollToDiv('schedule');} }>
                        <div className={toggleState === 5 ? "schedule active-tabs" : "schedule"}  style={toogleBarStylesCP} >Schedule</div>
                   </button>
                   
                   <button className="timeline-btn-border c-1 mt-4 certificate-program-btn" onClick={() => {toggleTab(6); scrollToDiv('testimonials');} }>
                        <div className={toggleState === 6 ? "testimonials active-tabs" : "testimonials"} style={toogleBarStylesCP} >Testimonials</div>
                   </button>
                </div>
             </div>
          </div>          
          
          </Container>

          <section className="arrow-svg" id="about">
                <div className="event-img-overlay-parent">
                    <DivcolLg 
                        removeGoldenHeader={{display: 'none' }} 
                        heading="Taking The Room Out Of The Classroom"
                        // paragraph={TakingRoomOutofClassroom}
                        imgPath="certificate-program-individual-page-common-img.jpg"
                    />
                </div>
          </section>

          <Container className="about-us-LWL-container" id="what-you-ll-gain">
                <Row className="mb-4">
                    <div>
                        <h2>
                            What You’ll Gain
                        </h2>
                        <h5>
                            Learn the art of eloquent debating
                        </h5>
                    </div>
                </Row>
                <Row  className="g-3">
                    {whyLWL.map((item, idx) => (
                        <Col key={idx} className="col-12 col-md-6 col-lg-4">
                        <Card className="about-us-card" style={{marginLeft: '1.5%', marginRight: '1.5%'}}>
                            {/* <Card.Img variant="top" src="" /> */}
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

            <Container className="mt-5" style={{marginBottom: '7rem'}} id='mentors'>
              <section className="hero-container">
                  <Row className="mb-4">
                    <Col>
                        <div>
                            <h2 style={{color: '#fff'}}>
                                Past Mentors
                            </h2>
                            <h5>
                                Our expert mentors from previous sessions
                            </h5>
                        </div>
                    </Col>
                    <Col xs="auto"> 
                      <div className="img-overlay-frame1">
                        <div className="left-arrowsvg-parent">
                          <img
                            className="left-arrowsvg-icon2"
                            alt=""
                            src="/leftarrowsvg-2.svg"
                          />
                          <img
                            className="right-arrowsvg-icon8"
                            alt=""
                            src="/rightarrowsvg-16.svg"
                          />
                        </div>
                      </div>                
                    </Col>
                </Row> 
                  
                <div className="carousel-img-catelog-grp-1" 
                    style={{
                            width: '100%',
                            left: '0',
                            right: '0',
                            padding: '0px',
                            marginTop: '100px', // add again when max-width: 800px media screen                            
                          }}>
                    <div className="divowl-stage-outer col-12 col-md-6 col-lg-4">
                        <DivowlItem
                            link900x5502Aboutjpg="/link--900x5502aboutjpg@2x.png"
                            heading5InnovationLeaders={`Innovation & Leadership World Workshop`}
                            startDateOctober21st="Start Date: October 21st"
                            developSocialInnovationAn="Develop social innovation and"
                            entrepreneurialSpirit="entrepreneurial spirit"
                            rightArrowsvg="/rightarrowsvg@2x.png"
                        />
                        <DivowlItem
                            link900x5502Aboutjpg="/link--900x550about4jpg@2x.png"
                            heading5InnovationLeaders="Take The World Forward Fellowship"
                            startDateOctober21st="Start Date: November 18th"
                            developSocialInnovationAn="Creating the next generation of"
                            entrepreneurialSpirit="changemakers"
                            rightArrowsvg="/rightarrowsvg-1@2x.png"
                            propPadding="var(--padding-14xl) var(--padding-4xs) var(--padding-smi) var(--padding-3xs)"
                        />
                        <DivowlItem
                            link900x5502Aboutjpg="/link--400x600featureimage1png@2x.png"
                            heading5InnovationLeaders="The Leadership Competition"
                            startDateOctober21st="Start Date: November 4th"
                            developSocialInnovationAn={`Compete in challenges & develop`}
                            entrepreneurialSpirit="project proposals"
                            rightArrowsvg="/rightarrowsvg-2@2x.png"
                            propPadding="var(--padding-14xl) var(--padding-4xs) var(--padding-smi) var(--padding-3xs)"
                        />
                        <DivowlItem
                            link900x5502Aboutjpg="/link--400x600featureimage1png@2x.png"
                            heading5InnovationLeaders="The Leadership Competition"
                            startDateOctober21st="Start Date: November 4th"
                            developSocialInnovationAn={`Compete in challenges & develop`}
                            entrepreneurialSpirit="project proposals"
                            rightArrowsvg="/rightarrowsvg-2@2x.png"
                            propPadding="var(--padding-14xl) var(--padding-4xs) var(--padding-smi) var(--padding-3xs)"
                        />
                    </div>
                </div>
              </section>
          </Container>      


          <Container className="about-us-LWL-container mt-3" id="awards">
                <Row className="mb-4">
                    <div>
                        <h2>
                            Awards & Recognitions
                        </h2>
                        <h5>
                            Showcase your achievements to the world
                        </h5>
                    </div>
                </Row>   
                <Row  className="g-3">
                    {whyLWL.map((item, idx) => (
                        <Col key={idx} className="col-12 col-md-6 col-lg-3">
                        <Card className="about-us-card" style={{marginLeft: '1.5%', marginRight: '1.5%'}}>
                            {/* <Card.Img variant="top" src="" /> */}
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

          <Container className="" id="schedule">
                <Row className="mb-4">
                    <div>
                        <h2>
                            Schedule
                        </h2>
                        <h5>
                            Time are in EST time zone
                        </h5>
                    </div>
                </Row> 
                <Row  className="g-3">
                    <ButtonGroup style={{gap: '15px', overflow: 'hidden', overflowX: 'scroll', scrollbarWidth: 'none'}}>
                        <button className="button schedule-btn" onClick={() => toggleSchedule(1)} >
                            <div className={toggleScheduleState === 1 ? "lets-talk active-tabs": "lets-talk"} >Week 1 | Day 1</div>                            
                        </button>
                        <button className="button schedule-btn" onClick={() => toggleSchedule(2)} >
                            <div className={toggleScheduleState === 2 ? "lets-talk active-tabs": "lets-talk"} >Week 1 | Day 2</div>                            
                        </button>
                        <button className="button schedule-btn" onClick={() => toggleSchedule(3)} >
                            <div className={toggleScheduleState === 3 ? "lets-talk active-tabs": "lets-talk"} >Week 2 | Day 1</div>                            
                        </button>
                        <button className="button schedule-btn" onClick={() => toggleSchedule(4)} >
                            <div className={toggleScheduleState === 4 ? "lets-talk active-tabs": "lets-talk"} >Week 2 | Day 2</div>                            
                        </button>
                        <button className="button schedule-btn" onClick={() => toggleSchedule(5)} >
                            <div className={toggleScheduleState === 5 ? "lets-talk active-tabs": "lets-talk"} >Week 3 | Day 1</div>
                        </button>
                        <button className="button schedule-btn" onClick={() => toggleSchedule(6)} >
                            <div className={toggleScheduleState === 6 ? "lets-talk active-tabs": "lets-talk"} >Week 3 | Day 2</div>                        
                        </button>
                        <button className="button schedule-btn" onClick={() => toggleSchedule(7)} >
                            <div className={toggleScheduleState === 7 ? "lets-talk active-tabs": "lets-talk"}>Week 4 | Day 1</div>
                        </button>
                        <button className="button schedule-btn" onClick={() => toggleSchedule(8)} >
                            <div className={toggleScheduleState === 8 ? "lets-talk active-tabs": "lets-talk"} >Week 4 | Day 2</div>                            
                        </button>
                        
                    </ButtonGroup>
                </Row>
                <Row className={toggleScheduleState === 1 ? "schedule-row2-data active-content" : "schedule-row2-data"} >
                    <Col xs="auto" className="p-0">
                        <Row className="lb1-row1">
                            <p className="lb1"> Date </p>
                            <p className="lb1 lb1-white"> October 26, 2024 -Saturday </p>
                        </Row>
                        <Row className="lb1-row2" >
                            <p className="lb1"> Time </p>
                            <p className="lb1 lb1-white"> 9:00 am - 10:30 am-EST </p>
                            
                        </Row>
                    </Col>
                    <Col className="schedule-col2-lb2">
                        <b className="schedule-lb2"> Date: 26th October </b> <br></br>
                        <b className="schedule-lb2"> Session 5 </b> <br></br>
                        <b className="schedule-lb2"> Innovation, Prototyping and Strategic Analysis Group work on Social Impact Projects </b>
                    </Col>
                    <Col xs="auto" style={{alignSelf: 'center' }}>
                        
                        <Row style={{color: "#F1B537", fontSize: '24px', fontWeight: '600', margin: "0 0 10px", lineHeight: '20px'}}>
                                <button className="button lb2-btn" >
                                    <div className="lets-talk">Apply Now</div>                                    
                                </button>
                        </Row>                                                
                    </Col>

                </Row>
                <Row className={toggleScheduleState === 2 ? "schedule-row2-data active-content" : "schedule-row2-data"} >
                    <Col xs="auto" className="p-0">
                        <Row className="lb1-row1">
                            <p className="lb1"> Date </p>
                            <p className="lb1 lb1-white"> October 27, 2024 -Saturday </p>
                        </Row>
                        <Row className="lb1-row2" >
                            <p className="lb1"> Time </p>
                            <p className="lb1 lb1-white"> 9:00 am - 10:30 am-EST </p>
                            
                        </Row>
                    </Col>
                    <Col className="schedule-col2-lb2">
                        <b className="schedule-lb2"> Date: 26th October </b> <br></br>
                        <b className="schedule-lb2"> Session 5 </b> <br></br>
                        <b className="schedule-lb2"> Innovation, Prototyping and Strategic Analysis Group work on Social Impact Projects </b>
                    </Col>
                    <Col xs="auto" style={{alignSelf: 'center' }}>
                        
                        <Row style={{color: "#F1B537", fontSize: '24px', fontWeight: '600', margin: "0 0 10px", lineHeight: '20px'}}>
                                <button className="button lb2-btn" >
                                    <div className="lets-talk">Apply Now</div>                                    
                                </button>
                        </Row>                                                
                    </Col>

                </Row>


          </Container>

          <Container className="mt-5 mb-3" id="testimonials" style={{textAlign: 'center'}}>
            <Row>
              <Col>
                <h1 style={{
                  fontSize: '60px',
                  fontWeight: '600',
                  lineHeight: '1.6',
                  color: '#fff',
                }}><b><b>Students and alumni love our programs</b></b></h1>
              </Col>
            </Row>
            <Row>
              <Col> 
                <h6 style={{
                  fontSize: '20px',
                  lineHeight: '27px',
                  color: '#878D92',
                  important: 'true'
                }}><b><b>What people are saying about us</b></b></h6>
              </Col>              
            </Row>
            <Row lg='6' className="mt-4" style={{justifyContent: 'space-evenly'}}> 
              <Col>
                  <Row>
                    <p style={{
                      color: '#f1b537',
                      margin: '0 0 0 20px',
                      fontSize: '50px',
                      fontWeight: '600',
                      lineHeight: '61px',
                      
                    }}><b><b><b>1000+</b></b></b></p>
                  </Row>
                  <Row>
                  <span style={{
                      color: '#878d92',
                      margin: '0 0 0 20px',
                      fontSize: '24px',
                      fontWeight: '500',
                      lineHeight: '29px',
                  }}><b><b><b>Students</b></b></b></span>
                  </Row>
              </Col>
              <Col>
                  <Row>
                    <p style={{
                      color: '#f1b537',
                      margin: '0 20px 0 0',
                      fontSize: '50px',
                      fontWeight: '600',
                      lineHeight: '61px',
                      
                    }}><b><b><b>25+</b></b></b></p>
                  </Row>
                  <Row>
                    <span style={{
                      color: '#878d92',
                      margin: '0 20px 0 0',
                      fontSize: '24px',
                      fontWeight: '500',
                      lineHeight: '29px',
                  }}><b><b><b>Countries</b></b></b></span>
                  </Row>
              </Col>
            </Row>
          </Container>

          
          <Container style={{marginBottom: '7rem'}}>
              <section className="hero-container">
                  <Row className="mb-4 sm-1">
                    <Col>
                        <div>
                            <h2 style={{color: '#fff'}}>
                                You may also like
                            </h2>
                            <h5>
                                Achieve your academic and career goals faster, for less.
                            </h5>
                        </div>
                    </Col>
                    <Col xs="auto"> 
                      <div className="img-overlay-frame1">
                        <div className="left-arrowsvg-parent">
                          <img
                            className="left-arrowsvg-icon2"
                            alt=""
                            src="/leftarrowsvg-2.svg"
                          />
                          <img
                            className="right-arrowsvg-icon8"
                            alt=""
                            src="/rightarrowsvg-16.svg"
                          />
                        </div>
                      </div>                
                    </Col>
                </Row> 
                  
                <div className="carousel-img-catelog-grp-1" 
                    style={{
                            width: '100%',
                            left: '0',
                            right: '0',
                            padding: '0px',
                            marginTop: '100px', // add again when max-width: 800px media screen                            
                          }}>
                    <div className="divowl-stage-outer">
                    <DivowlItem
                        link900x5502Aboutjpg="/link--900x5502aboutjpg@2x.png"
                        heading5InnovationLeaders={`Innovation & Leadership World Workshop`}
                        startDateOctober21st="Start Date: October 21st"
                        developSocialInnovationAn="Develop social innovation and"
                        entrepreneurialSpirit="entrepreneurial spirit"
                        rightArrowsvg="/rightarrowsvg@2x.png"
                    />
                    <DivowlItem
                        link900x5502Aboutjpg="/link--900x550about4jpg@2x.png"
                        heading5InnovationLeaders="Take The World Forward Fellowship"
                        startDateOctober21st="Start Date: November 18th"
                        developSocialInnovationAn="Creating the next generation of"
                        entrepreneurialSpirit="changemakers"
                        rightArrowsvg="/rightarrowsvg-1@2x.png"
                        propPadding="var(--padding-14xl) var(--padding-4xs) var(--padding-smi) var(--padding-3xs)"
                    />
                    <DivowlItem
                        link900x5502Aboutjpg="/link--400x600featureimage1png@2x.png"
                        heading5InnovationLeaders="The Leadership Competition"
                        startDateOctober21st="Start Date: November 4th"
                        developSocialInnovationAn={`Compete in challenges & develop`}
                        entrepreneurialSpirit="project proposals"
                        rightArrowsvg="/rightarrowsvg-2@2x.png"
                        propPadding="var(--padding-14xl) var(--padding-4xs) var(--padding-smi) var(--padding-3xs)"
                    />
                    <DivowlItem
                        link900x5502Aboutjpg="/link--400x600featureimage1png@2x.png"
                        heading5InnovationLeaders="The Leadership Competition"
                        startDateOctober21st="Start Date: November 4th"
                        developSocialInnovationAn={`Compete in challenges & develop`}
                        entrepreneurialSpirit="project proposals"
                        rightArrowsvg="/rightarrowsvg-2@2x.png"
                        propPadding="var(--padding-14xl) var(--padding-4xs) var(--padding-smi) var(--padding-3xs)"
                    />
                    </div>
                </div>
              </section>
          </Container>        
            
          <ConnectUs divNone={StudentLoveProgram}  />
          <Footer />
        </div>

    );
}
export default CertificateProgram;