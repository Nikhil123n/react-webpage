import Event1 from "./Event1";
import EventInfoGrpAll from "./EventInfoGrpAll";
import React from "react";

import "./EventInfoGrid.css";

const EventInfoGrid = () => {
  return (
    <section className="event-info-grid">
      <h2 className="masterclass-in-different">
        Masterclass (In Different Countries)
      </h2>
      
      <div className="entrepreneurship-program-frame">        
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
        <div className="heading-text2">
          <Event1
            eventImg1="/event-img-1@2x.png"
            fellowships="Fellowships"
            heading="HDFC Capital Advisors: Corporate Internship Project"
            sTARTSON="STARTS ON"
            december2023="16 December, 2023"
            dURATION="DURATION"
            weeks="8 Weeks"
          />
          <Event1
            eventImg1="/event-img-1@2x.png"
            fellowships="Certificate Programs"
            heading="World Sustainability Stars Program"
            sTARTSON="STARTS ON"
            december2023="17 February, 2024"
            dURATION="DURATION"
            weeks="2 Weekends"
          />                    
          <Event1
            eventImg1="/event-img-1@2x.png"
            fellowships="Certificate Programs"
            heading="Future Entrepreneurs Program by Harvard Student Agencies"
            sTARTSON="STARTS ON"
            december2023="17 February, 2024"
            dURATION="DURATION"
            weeks="3 Days"
          />
          <Event1
            eventImg1="/event-img-1@2x.png"
            fellowships="Certificate Programs"
            heading="Future Entrepreneurs Program by Harvard Student Agencies"
            sTARTSON="STARTS ON"
            december2023="2 August, 2024"
            dURATION="DURATION"
            weeks="2 Weekends"
          />
          
        </div>
      </div>
      <div className="event-img-overlay1">
        <button className="submit-btn1">
          <div className="view-all">View All</div>
        </button>
      </div>
    </section>
  );
};

export default EventInfoGrid;
