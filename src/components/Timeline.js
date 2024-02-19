import Img1 from "./Img1";
import Img from "./Img";
import React, { useState } from "react";
import eventData from "./student-events.json";
import "./Timeline.css";

const Timeline = () => {
  const [toggleState, setToggleState] = useState(1);

  const programs = eventData.school_programs;
  // console.log(eventData, programs);

  const toggleTab = (index) =>  {
    setToggleState(index);
    console.log(index.school_programs);
  };
  


  return (
    <div className="timeline">
      <h2 className="gallery">Gallery</h2>


      <div className="event">
        <div className="tab-grp-1">
          <button className="c-1">
            <div className={toggleState === 1 ? "in-school-programs active-tabs" : "in-school-programs"} onClick={() => toggleTab(1)} >In-School Programs </div>
          </button>
          <button className="c-2">
            <div className={toggleState === 2 ? "impact-stories active-tabs" : "impact-stories"} onClick={() => toggleTab(2) }>Impact Stories</div>
          </button>
          <button className="c-3">
            <div className={toggleState === 3 ? "testimonials active-tabs" : "testimonials"} onClick={() => toggleTab(3)} >Testimonials</div>
          </button>
          <button className="c-4">
            <div className="community-events" onClick={() => toggleTab(4)} >Community Events</div>
          </button>
        </div>


        <div className={toggleState === 1 ? "div-fusion-image-element active-content" : "div-fusion-image-element"}  >    
          <Img1
            catelogImg1="/catelog-img-1@2x.png"
            heading="Indonesia| Binus School Simprug"
            studentsConceptualizedNov="Students conceptualized novel business ideas addressing real-world issues"
          />
          <Img1
            catelogImg1="/catelog-img-1@2x.png"
            heading="USA| Beekmantown High School"
            studentsConceptualizedNov="Students learn the importance of body language, team-work, and communication in leadership through fun activities."
            propPadding="var(--padding-172xl) var(--padding-xl) var(--padding-xl)"
            propBackgroundImage="url('/catelog-img-1@2x.png')"
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
            catelogImg1="/catelog-img-1@2x.png"
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
          <Img
            catelogImg1="/catelog-img-1@2x.png"
            heading="Brazil| Escola Bilíngue Pueri Domus School"
            studentsCraftedCaptivatin="Students learned to master pitch, inflection, rhythm, volume, pauses, pronunciation and the art of persuading"
            propPadding="var(--padding-194xl) var(--padding-xl) var(--padding-xl)"
            propBackgroundImage="url('/catelog-img-1@2x.png')"
          />
        </div>
          
        <div className={toggleState === 1 ? "div-fusion-image-element active-content" : "div-fusion-image-element"}  >    
        {programs.map((event, index) => (          
            <Img1
              catelogImg1={event.img}
              heading={event.location + '|' + event.venue}              
            />
            // console.log(img);          
        ))}  
        </div>    
        

        <div className={toggleState === 2 ? "div-fusion-image-element active-content" : "div-fusion-image-element"}  >    
          <Img1
            catelogImg1="/catelog-img-1@2x.png"
            heading="Indonesia| Binus School Simprug"
            studentsConceptualizedNov="Students conceptualized novel business ideas addressing real-world issues"
          />
        </div>

      </div>

      <div className="submit-btn-wrapper">
        <button className="submit-btn">
          <div className="view-more">View More</div>
        </button>
      </div>
    </div>
  );
};

export default Timeline;
