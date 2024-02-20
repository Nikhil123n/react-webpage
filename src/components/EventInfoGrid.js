import Event1 from "./Event1";
import EventInfoGrpAll from "./EventInfoGrpAll";
import React, { useState } from "react";

import "./EventInfoGrid.css";

const EventInfoGrid = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    if (toggleState !== index) {
      setToggleState(index);
      console.log(index.school_programs);
    }
  };

  return (
    <section className="event-info-grid">
      <h2 className="masterclass-in-different">
        Offline Programs (In Different Countries)
      </h2>
      
      <div className="entrepreneurship-program-frame">
      <div className="tab-grp-11">
          <button className="c-13"  onClick={() => toggleTab(1)}>
            <div className={toggleState === 1 ? "upcoming-events active-tabs" : "upcoming-events"}>Upcoming Events</div>
          </button>
          <button className="c-21"  onClick={() => toggleTab(2)}>
            <div className={toggleState === 2 ? "past-events active-tabs" : "past-events"}>Past Events</div>
          </button>
        </div>
                
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

        <div className={toggleState === 1 ? "heading-text active-content" : "heading-text"}  >
          <Event1
            eventImg1="/event-img-1@2x.png"
            fellowships="India"
            heading="The Young Global Leadership Program - Hosted by JBCN"
            sTARTSON="STARTS ON"
            december2023="19 August, 2023"
            dURATION="DURATION"
            weeks="5 DAYS"
          />
          <Event1
            eventImg1="/event-img-1@2x.png"
            fellowships="Indonesia"
            heading="The Young Global Leadership Program - Hosted by SIS Kelapa Galding"
            sTARTSON="STARTS ON"
            december2023="17 July, 2024"
            dURATION="DURATION"
            weeks="3 Days"
          />
                    
          <Event1
            eventImg1="/event-img-1@2x.png"
            fellowships="Malaysia"
            heading="The Young Global Leadership Program - Hosted by Straits..."
            sTARTSON="STARTS ON"
            december2023="16 August, 2024"
            dURATION="DURATION"
            weeks="3 Days"
          />
          <Event1
            eventImg1="/event-img-1@2x.png"
            fellowships="India"
            heading="The Young Global Leadership Program - Hosted by Straits..."
            sTARTSON="STARTS ON"
            december2023="16 August, 2024"
            dURATION="DURATION"
            weeks="2 Weekends"
          />          
        </div>

        <div className={toggleState === 2 ? "heading-text active-content" : "heading-text"}  >
          <Event1
              eventImg1="/event-img-1@2x.png"
              fellowships="India"
              heading="The Young Global Leadership Program - Hosted by JBCN"
              sTARTSON="STARTS ON"
              december2023="19 August, 2023"
              dURATION="DURATION"
              weeks="5 DAYS"
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
