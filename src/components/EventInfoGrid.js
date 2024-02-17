import Event1 from "./Event1";
import EventInfoGrpAll from "./EventInfoGrpAll";
import React from "react";

import "./EventInfoGrid.css";

const EventInfoGrid = () => {
  return (
    <section className="event-info-grid">
      <h2 className="masterclass-in-different">
        Offline Programs (In Different Countries)
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
        <div className="heading-text">
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
          
          {/* <Event1
            eventImg1="/event-img-1@2x.png"
            fellowships="Indonesia"
            heading="The Young Global Leadership Program - Hosted by SIS Kelapa Galding"
            sTARTSON="STARTS ON"
            december2023="17 July, 2024"
            dURATION="DURATION"
            weeks="3 DAYS"
            propBackgroundImage="url('/event-img-1@2x.png')"
            propWidth="309px"
            propFlex="unset"
            propMinWidth="unset"
            propGap="213px"
            propHeight="unset"
            propPadding="var(--padding-7xs) var(--padding-xs) var(--padding-7xs) var(--padding-base)"
            propWidth1="unset"
            propAlignSelf="stretch"
            propWidth2="124px"
            propAlignSelf1="stretch"
            propWidth3="unset"
            propAlignSelf2="unset"
          /> */}
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
          {/* <div className="event-frame">          
            <div className="t-i-m-e-l-i-n-e">
              <Event1
                eventImg1="/event-img-1@2x.png"
                fellowships="Malaysia"
                heading="The Young Global Leadership Program..."
                sTARTSON="STARTS ON"
                december2023="19 August, 2024"
                dURATION="DURATION"
                weeks="3 Days"
                propBackgroundImage="url('/event-img-1@2x.png')"
                propWidth="unset"
                propFlex="1"
                propMinWidth="201px"
                propGap="213px"
                propHeight="unset"
                propPadding="var(--padding-7xs) var(--padding-xs) var(--padding-7xs) var(--padding-base)"
                propWidth1="unset"
                propAlignSelf="stretch"
                propWidth2="124px"
                propAlignSelf1="stretch"
                propWidth3="62px"
                propAlignSelf2="stretch"
              />
              <div className="event-4">
                <div className="event-img-1-parent">
                  <img
                    className="event-img-11"
                    alt=""
                    src="/event-img-1@2x.png"
                  />
                  <div className="img-overlay-13" />
                </div>
                <div className="event-4-inner">
                  <button className="certificate-programs-wrapper">
                    <div className="certificate-programs1"> India </div>
                  </button>
                </div>
                <EventInfoGrpAll
                  heading="The Young Global Leadership Program..."
                  sTARTSON="STARTS ON"
                  december2023="19 August, 2023"
                  dURATION="DURATION"                  
                />
              </div>
            </div>
          </div> */}
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
