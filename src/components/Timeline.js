import Img1 from "./Img1";
import Img from "./Img";
import React from "react";

import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="timeline">
      <h2 className="gallery">Gallery</h2>
      <div className="event">
        <div className="tab-grp-1">
          <button className="c-1">
            <div className="in-school-programs">In-School Programs</div>
          </button>
          <button className="c-2">
            <div className="impact-stories">Impact Stories</div>
          </button>
          <button className="c-3">
            <div className="testimonials">Testimonials</div>
          </button>
          <button className="c-4">
            <div className="community-events">Community Events</div>
          </button>
        </div>
        <div className="div-fusion-image-element">
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
