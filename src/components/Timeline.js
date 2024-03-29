import Img1 from "./Img1";
import Img from "./Img";
import React, { useState } from "react";
import "./Timeline.css";

const Timeline = () => {

  const InSchoolProgramsData = require('../json/inSchoolPrograms.json');
  

  const [toggleState, setToggleState] = useState(1);

  const school_programs = InSchoolProgramsData.in_school_programs;
  const impact_stories = InSchoolProgramsData.impact_stories;
  const testimonials = InSchoolProgramsData.testimonials;
  const community_events = InSchoolProgramsData.community_events;
  // console.log(eventData, programs);

  // const toggleTab = (index) =>  {
  //   setToggleState(index);
  //   console.log(index.school_programs);
  // };
  
  const toggleTab = (index) => {
    if (toggleState !== index) {
      setToggleState(index);
      console.log(index.school_programs);
    }
  };

  return (
    <div className="timeline">
      <h2 className="gallery">Gallery</h2>


      <div className="event">
        <div className="tab-grp-1">
          <button className="timeline-btn-border c-1" onClick={() => toggleTab(1)}>
            <div className={toggleState === 1 ? "in-school-programs active-tabs" : "in-school-programs"}  >In-School Programs </div>
          </button>
          <button className="timeline-btn-border  c-2"  onClick={() => toggleTab(2) }>
            <div className={toggleState === 2 ? "impact-stories active-tabs" : "impact-stories"} >Impact Stories</div>
          </button>
          <button className="timeline-btn-border  c-3"  onClick={() => toggleTab(3) }>
            <div className={toggleState === 3 ? "testimonials active-tabs" : "testimonials"} >Testimonials</div>
          </button>
          {/* <button className="timeline-btn-border  c-4"  onClick={() => toggleTab(4) }>
            <div className={toggleState === 4 ? "community-events active-tabs" : "community-events"} >Community Events</div>
          </button> */}
        </div>


        {/* <div className={toggleState === 1 ? "div-fusion-image-element active-content" : "div-fusion-image-element"}  >    
          <Img1
            catelogImg1="Gallery/Ahmedabad International School-India-HMCSF.jpeg"
            heading="Indonesia| Binus School Simprug"
            studentsConceptualizedNov="Students conceptualized novel business ideas addressing real-world issues"            
          />
          <Img1
            catelogImg1="/catelog-img-1@2x.png"
            heading="USA| Beekmantown High School"
            studentsConceptualizedNov="Students learn the importance of body language, team-work, and communication in leadership through fun activities."
            propPadding="var(--padding-172xl) var(--padding-xl) var(--padding-xl)"
            propBackgroundImage="url('/Gallery/Ahmedabad International School-India-HMCSF.jpeg')"
            propHeight="66px"
          />
          <Img1
            catelogImg1="/catelog-img-1@2x.png"
            heading="UAE| GEMS Wellington Academy"
            studentsConceptualizedNov="Students felt inspired and empowered, ready to make a positive impact in their community and beyond!"
            propPadding="var(--padding-194xl) var(--padding-xl) var(--padding-xl)"
            propBackgroundImage="url('/catelog-img-1@2x.png')"
            propHeight="unset"
          />
          <Img
            catelogImg1="/Gallery/Ahmedabad International School-India-HMCSF.jpeg"
            heading="Germany| St George British International School"
            studentsCraftedCaptivatin="Students crafted captivating elevator pitches to entice potential investors"
          />
          <Img1
            catelogImg1="/catelog-img-1@2x.png"
            heading="Turkey| MEF International School"
            studentsConceptualizedNov="Students received useful tips for doing business and learnt how to negotiate and solve problems"
            propPadding="var(--padding-194xl) var(--padding-xl) var(--padding-xl)"
            propBackgroundImage="url('/catelog-img-1@2x.png')"
            propHeight="unset"
          />

        </div> */}
          
        <div className={toggleState === 1 ? "div-fusion-image-element active-content" : "div-fusion-image-element"}  >    
          {school_programs.map((event, index) => (          
              <Img1
                propBackgroundImage= {event.img_url}              
                heading={event.location + ' | ' + event.venue}    
                galleryUrl = '/gallery/in-school-programs'                                        
                galleryEventName = 'In School Programs'
              />            
          ))}  
        </div>    
        

        <div className={toggleState === 2 ? "div-fusion-image-element active-content" : "div-fusion-image-element"}  >    
          {impact_stories.map((event, index) => (          
              <Img1
                propBackgroundImage= {event.img_url}              
                heading={event.location + ' | ' + event.venue}                                            
                galleryUrl = '/gallery/impact-stories'      
                galleryEventName = "Impact Stories"                                  
              />            
          ))}  
        </div>

        <div className={toggleState === 3 ? "div-fusion-image-element active-content" : "div-fusion-image-element"}  >    
          {testimonials.map((event, index) => (          
              <Img1
                propBackgroundImage= {event.img_url}              
                heading={event.location + ' | ' + event.venue} 
                galleryUrl = '/gallery/testimonials'         
                galleryEventName = "Testimonials"                                  
              />            
          ))}  
        </div>

        {/* <div className={toggleState === 4 ? "div-fusion-image-element active-content" : "div-fusion-image-element"}  >    
          {community_events.map((event, index) => (          
              <Img1
                propBackgroundImage= {event.img_url}              
                heading={event.location + ' | ' + event.venue}                                            
                galleryUrl = '/gallery/community-events'
                galleryEventName = "Community Events"
              />            
          ))}  
        </div> */}



      </div>

      {/* <div className="submit-btn-wrapper">
        <button className="submit-btn">
          <div className="view-more">View More</div>
        </button>
      </div> */}
    </div>
  );
};

export default Timeline;
