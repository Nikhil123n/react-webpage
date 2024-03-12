import React, { useState, useCallback } from "react";
import { Row, Col, ButtonGroup } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import NavigationLinks from "../components/NavigationLinks";
import DivcolLg2 from "../components/DivcolLg2";
// import Container from "../components/Container";
import Footer from "../components/Footer";
import ConnectUs from "../components/ConnectUs";
import DivowlItem from "../components/DivowlItem";
import DivfusionColumnWrapper from "../components/DivfusionColumnWrapper"; 
import { Button } from "@coreui/coreui";
import "./CertificateProgram.css";

import { useNavigate, useLocation } from "react-router-dom";



const CertificateProgram = ({card, prgName}) => {
    const StudentLoveProgram = 'none';
    const TakingRoomOutofClassroom = "Students will get access to the sessions where they will be coached by an Ivy-League mentor on the art, science, and fun of speaking their mind about relevant and international themes, to peers and mentors on an international stage."
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
          icon: "what-gain-1-1.png",
          head: "Build a strong portfolio",
          content: "Gain a unique opportunity to enhance your skills and build a strong portfolio through various projects and initiatives.",          
      },
      {
          icon: "what-gain-1-2.png",
          head: "Break Limits",
          content: "Break down the unfair ‘limits’ of\nman-made barriers",
      },
      {
          icon: "what-gain-1-3.png",
          head: "Powerful Networks",
          content: "Help students build\npowerful networks with\nglobal entities and enrich\nbonds with like-minded peers\nfrom around the world",
      },
      {
          icon: "what-gain-1-4.png",
          head: "Young Mind",
          content: "Expose the young mind to a\nricher palette of possibilities",
      },
      {
          icon: "what-gain-1-5.png",
          head: "Citizen Leaders",
          content: "Initiate a journey aimed to\nbuild holistic ‘Citizen Leaders’\nof tomorrow who are both globally\nprepared and locally sensitized",
      },
      {
          icon: "what-gain-1-6.png",
          head: "Opportunity",
          content: "Bring the next generation\ncloser to opportunities that\ntheir parents and seniors lacked"
      },
    ]

    const awardsRecog = [
        {
            icon: "what-gain-1-1.png",
            head: "Certificate",
            content: "Certificate of Participation provided to all participants.",          
        },
        {
            icon: "awards-recognition-1-2.png",
            head: "Webinars/Masterclass",
            content: "Access to all LWL webinar/masterclass.",
        },
        {
            icon: "what-gain-1-1.png",
            head: "LwL Social Media Feature",
            content: "Get a chance to be featured on Learn with Leaders’ Social Media platforms.",
        },
        {
            icon: "awards-recognition-1-4.png",
            head: "Portfolio Enhancement",
            content: "Enhance your portfolio with certificates and projects.",
        },        
      ]
    
    const mentorsList = [
        {
            src:"tomokimatsuno.png",
            mentor_name: "Tomoki Matsuno",
            university: "Student, Harvard University",
            previous_session: 'Government & East Asian Studies'
        },
        {
            src:"Albie-Giandomenico.jpg",
            mentor_name: "Albie Giandomenico",
            university: "Student, Harvard University",
            previous_session: 'Economics and Astrophysics'
        },
        {
            src:"Sherry-Liu.png",
            mentor_name: "Sherry Liu",
            university: "Student, Harvard University",
            previous_session: 'Applied Math in Economics and Computer Science'
        },
        {
            src:"Francisco-Fernandez.jpg",
            mentor_name: "Francisco Fernandez",
            university: "Student, Harvard University",
            previous_session: 'Philosophy and Education Studies'
        },
        {
            src:"Ina-Bhoopalam.png",
            mentor_name: "Ina Bhoopalam",
            university: "Student, Harvard University",
            previous_session: 'Economics'
        },
        {
            src:"GraceLi.jpg",
            mentor_name: "Grace Li  ",
            university: "Student, Harvard University",
            previous_session: 'CS, Neuroscience & Economics'
        }

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
      
    const navigate = useNavigate();
    const location = useLocation();
    const programCardData = location.state.state;
    const applynowLink = location.state.url;

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthNamesF = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const dateh = new Date(parseInt(programCardData.date));
    const earlyApplicationDate = new Date(parseInt(programCardData.earlyApplicationDate));
    const deadline = new Date(parseInt(programCardData.deadline));
    // console.log(date, date.getFullYear())
    
    const onLinkExploreClick = useCallback(() => {

        if (applynowLink) {
            // If URL exists, navigate to it
            window.location.href = applynowLink;
        } else {
            navigate("/program-reg",{
            state: programCardData.programName
            });
        }
    }, [applynowLink, navigate, programCardData]);

    console.log("condition", applynowLink ? applynowLink : programCardData.programName)

    let prevProgramPage = programCardData.category.split(" ")[0].toLowerCase();
    prevProgramPage = "/" + prevProgramPage;
    // console.log(prevProgramPage)
    const onPreviousLinkClick = useCallback(() => {
        navigate(prevProgramPage);
    }, [navigate, prevProgramPage]);

    


    

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
                      <a> <li class=" active" style={{fontSize: '18px', color:'#878D92', marginTop:'15px', color : '#F1B537' }} onClick={onPreviousLinkClick} > {programCardData.category}  </li></a>
                      <li class="breadcrumb-item"></li>                      
                      <li class=" active" style={{fontSize: '18px', color:'#878D92', marginTop:'15px' }} >  {programCardData.programName}  </li>
                  </ol>
              </nav>                    
            </div>
          </section>    

          <div className="hero-about-us-img" style={{ marginTop: '-46px'}}>
              <img src="about-us-cover-image.jpeg" width="100%" height='600' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="img-fluid" alt="..."  
                  />
          </div>

          <Container className="certificate-container" > 
                {/* Row 1  */}
                <Row style={{display: 'flex', justifyContent: 'space-between', padding: "0px 60px 25px"}}>
                    <Col style={{ alignSelf: "flex-end"}}>
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
                        <Row style={{color: "#F1B537", fontSize: '24px', fontWeight: '600', margin: "0 0 10px", lineHeight: '20px'}}>{dateh.getDate()} {monthNames[dateh.getMonth()]}</Row>
                        <Row style={{color: "#fff", margin: "0 0 10px"}}>{dateh.getFullYear()}</Row>                        
                    </Col>
                </Row>

                {/* Row 2  */}
                <Row style={{display: 'flex', justifyContent: 'space-between', padding: "25px 60px"}}>
                    <Col>
                        <Row style={{ color: '#fff', fontWeight: '600', lineHeight: '1.3'}}>
                          <h2 style={{marginBottom: '0px', padding: '0 0 10px 0px'}}>{programCardData.programName}</h2>
                        </Row>
                        <Row style= {{color: "#878D92", fontWeight: '400', fontSize: '20px', important: 'true'}}> 
                          <i style={{paddingLeft: '0px'}}>{programCardData.description}</i>
                        </Row>
                          
                    </Col>
                    <Col xs="auto" style={{alignSelf: 'center', padding: 'calc(var(--bs-gutter-x) * .5) 0'}}>
                        
                        <Row style={{color: "#F1B537", fontSize: '24px', fontWeight: '600', margin: "0 0 10px", lineHeight: '20px'}}>
                                <button className="button" onClick={onLinkExploreClick} >
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
                        <Row style={{ color: '#fff', fontSize: '17px' }} > <p> {programCardData.eligibility} </p> </Row>                          
                    </Col>
                    <Col style={{ padding: '0 25px 20px 0'}}>
                        <Row style={{ color: '#878D92', fontSize: '15px', paddingBottom: '5px'}}> <p>Duration</p> </Row>
                        <Row style={{ color: '#fff', fontSize: '17px' }} > <p> {programCardData.duration} </p> </Row>                          
                    </Col>
                    <Col style={{ padding: '0 25px 20px 0'}}>
                        <Row style={{ color: '#878D92', fontSize: '15px', paddingBottom: '5px'}}> <p>Early Application Date</p> </Row>
                        <Row style={{ color: '#fff', fontSize: '17px', paddingBottom: '5px'}} > <p>{earlyApplicationDate.getDate()} {monthNamesF[earlyApplicationDate.getMonth()]}, {earlyApplicationDate.getFullYear()}</p> </Row>                          
                        <Row style={{ color: '#F1B537', fontSize: '12px' }} > <p>[Regular Date: 15 Sep, 2024]</p> </Row>                          
                    </Col>
                    <Col style={{ padding: '0 25px 20px 0'}}>
                        <Row style={{ color: '#878D92', fontSize: '15px', paddingBottom: '5px'}}> <p>Program Fee for Early Applicants</p> </Row>
                        <Row style={{ color: '#fff', fontSize: '17px', paddingBottom: '5px' }} > <p>{programCardData.programFee}</p> </Row>                          
                        <Row style={{ color: '#F1B537', fontSize: '12px' }} > <p>[Regular Fee: {programCardData.regularFee}]</p> </Row>                          
                    </Col>
                    <Col style={{ padding: '0 25px 20px 0'}}>
                        <Row style={{ color: '#878D92', fontSize: '15px', paddingBottom: '5px'}}> <p>Application Deadline</p> </Row>
                        <Row style={{ color: '#fff', fontSize: '17px' }} > <p>{deadline.getDate()} {monthNamesF[deadline.getMonth()]}, {deadline.getFullYear()}</p> </Row>                          
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
                        <div className={toggleState === 1 ? "about active-tab" : "about"}  style={toogleBarStylesCP}>About</div>
                   </button>

                   <button className="timeline-btn-border c-1 mt-4 certificate-program-btn" onClick={() => {toggleTab(2); scrollToDiv('what-you-ll-gain');} }>
                        <div className={toggleState === 2 ? "what-will-gain active-tab" : "what-will-gain"} style={toogleBarStylesCP} >What You'll Gain</div>
                   </button>
                   
                   <button className="timeline-btn-border c-1 mt-4 certificate-program-btn" onClick={() => {toggleTab(3); scrollToDiv('mentors');} }>
                        <div className={toggleState === 3 ? "mentors active-tab" : "mentors"}  style={toogleBarStylesCP} >Mentors</div>
                   </button>
                   
                   <button className="timeline-btn-border c-1 mt-4 certificate-program-btn" onClick={() => {toggleTab(4); scrollToDiv('awards');} }>
                        <div className={toggleState === 4 ? "awards-recognition active-tab" : "awards-recognition"}  style={toogleBarStylesCP} >Awards & Recognition</div>
                   </button>
                   
                   <button className="timeline-btn-border c-1 mt-4 certificate-program-btn" onClick={() => {toggleTab(5); scrollToDiv('schedule');} }>
                        <div className={toggleState === 5 ? "schedule active-tab" : "schedule"}  style={toogleBarStylesCP} >Schedule</div>
                   </button>
                   
                   <button className="timeline-btn-border c-1 mt-4 certificate-program-btn" onClick={() => {toggleTab(6); scrollToDiv('testimonials');} }>
                        <div className={toggleState === 6 ? "testimonials active-tab" : "testimonials"} style={toogleBarStylesCP} >Testimonials</div>
                   </button>
                </div>
             </div>
             </div>                    
          </Container>

          <section className="arrow-svg" id="about">
                <div className="event-img-overlay-parent">
                    <DivcolLg2 
                        removeGoldenHeader={{display: 'none' }} 
                        timelineRemove={{display: 'none' }}
                        heading={programCardData.programName}
                        paragraph={programCardData.about}
                        imgPath={programCardData.image}
                        forApplyNow={applynowLink}
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

            <Container className="mt-5" id='mentors'>
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
                    <Col xs="5" sm="4" md="3" lg="2"> 
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
                <Row className=""><div></div></Row>
                <div className="carousel-img-catelog-grp-1 past-mentors-container" 
                    style={{
                            width: '100%',
                            left: '0',
                            right: '0',
                            padding: '0px',
                            marginTop: '100px', // add again when max-width: 800px media screen                            
                          }}>
                    <div className="divowl-stage-outer col-12 col-md-6 col-lg-4 three-card-display">
                        {mentorsList.map((item, idx) => (
                            <DivowlItem
                                link900x5502Aboutjpg={item.src}
                                heading5InnovationLeaders={item.mentor_name}
                                startDateOctober21st={item.university}
                                developSocialInnovationAn={item.previous_session}    
                                rightArrowsvg="/rightarrowsvg@2x.png"  
                                propPadding="var(--padding-14xl) var(--padding-4xs) var(--padding-smi) var(--padding-3xs)"                      
                                divowlStyles={{
                                    gap:'8px',
                              }}
                            />
                        ))}
                    </div>
                </div>
                  
                {/* <div className="carousel-img-catelog-grp-1 past-mentors-container" 
                    style={{
                            width: '100%',
                            left: '0',
                            right: '0',
                            padding: '0px',
                            marginTop: '100px', // add again when max-width: 800px media screen                            
                          }}>
                    <div className="divowl-stage-outer col-12 col-md-6 col-lg-4 three-card-display">
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
                </div> */}
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
                    {awardsRecog.map((item, idx) => (
                        <Col key={idx} className="col-12 col-md-6 col-lg-3">
                        <Card className="about-us-card" style={{marginLeft: '1.5%', marginRight: '1.5%'}}>
                            <Card.Img style={{width: '57px'}}  variant="top" src={item.icon} /> 
                            <Card.Body style={{paddingLeft: '0px'}} >
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

          <Container className="mt-5" id="schedule">
                <Row className="mb-5">
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
                    {/* <ButtonGroup style={{gap: '15px', overflow: 'hidden', overflowX: 'scroll', scrollbarWidth: 'none'}}>
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
                        
                    </ButtonGroup> */}

                    <ButtonGroup style={{gap: '15px', overflow: 'hidden', overflowX: 'scroll', scrollbarWidth: 'none'}}>
                        {programCardData.schedule.map((item, index) => (
                            <button key={index} className="button schedule-btn" onClick={() => toggleSchedule(index + 1)}>
                                <div className={toggleScheduleState === index + 1 ? "lets-talk active-tab" : "lets-talk"}><span>{item.tabTitle}</span></div>
                            </button>
                        ))}
                    </ButtonGroup>
                </Row>
                {/* <Row className={toggleScheduleState === 1 ? "schedule-row2-data active-content" : "schedule-row2-data"} >
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
                    <Col lg="12" className="p-0">
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

                </Row> */}
                
                {programCardData.schedule.map((item, index) => (
                    <Row key={index} className={toggleScheduleState === index + 1 ? "schedule-row2-data active-content" : "schedule-row2-data"}>
                        <Col xs="auto" className="p-0">
                            <Row className="lb1-row1">
                                <p className="lb1"> Date </p>
                                <p className="lb1 lb1-white"> {new Date(Number(item.date)).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })} - {new Date(Number(item.date)).toLocaleDateString('en-US', { weekday: 'long' })} </p>
                            </Row>
                            <Row className="lb1-row2" >
                                <p className="lb1"> Time </p>
                                <p className="lb1 lb1-white"> {item.time} </p>
                            </Row>
                        </Col>
                        <Col xs="auto" md="8" lg="6" className="schedule-col2-lb2">
                            <p><b className="schedule-lb2"> Date: {new Date(Number(item.date)).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })} </b></p> <br></br>
                            
                            <p><b className="schedule-lb2"> {item.description.split('\n').map((line, index) => (
                                                            <p key={index} className="lb2 ">{line}</p>
                                                            ))} </b></p>
                        </Col>
                        <Col xs="auto" style={{ alignSelf: 'center' }}>
                            <Row style={{ color: "#F1B537", fontSize: '24px', fontWeight: '600', margin: "0 0 10px", lineHeight: '20px' }}>
                                <button className="button lb2-btn" onClick={onLinkExploreClick}  >
                                    <div className="lets-talk" >Apply Now</div>
                                </button>
                            </Row>
                        </Col>
                    </Row>
                    ))}



          </Container>

          <Container className="mt-5 mb-5 testimonials" id="testimonials" style={{textAlign: 'center'}}>
            <Row>
              <Col>
                <h1 className="h1-testimnoials"><b><b>Students and alumni love our programs</b></b></h1>
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
                    <p className= "half-font-size-para1"><b><b><b>1000+</b></b></b></p>
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
                    <p className="half-font-size-para1"><b><b><b>25+</b></b></b></p>
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
                    {/* <Col xs="5" sm="4" md="3" lg="2"> 
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
                    </Col> */}
                </Row> 
                <Row className=""><div></div></Row>
                <Row className=""><div></div></Row>
                  
                <Row className="carousel-img-catelog-grp-1" 
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
                </Row>
              </section>
          </Container>        
            
          <ConnectUs divNone={StudentLoveProgram}  />
          <Footer />
        </div>

    );
}
export default CertificateProgram;