import Event1 from "./Event1";
import EventInfoGrpAll from "./EventInfoGrpAll";
import React from "react";

import "./EventInfoAll.css";

const EventInfoAll = () => {
  return (
    <section className="event-info-all">
      <div className="student-achievements-wrapper">
        <h2 className="student-achievements">Student Achievements</h2>
      </div>

      <div className="leftarrowsvg">
        <div className="leftarrowsvgrightarrowsvg">
          <img
            className="left-arrowsvg-icon3"
            alt=""
            src="/leftarrowsvg-2.svg"
          />
          <img
            className="right-arrowsvg-icon10"
            alt=""
            src="/rightarrowsvg-16.svg"
          />
        </div>
      </div>
      

      <div className="entrepreneurship-program-frame">        
        
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
            december2023="2 December, 2024"
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
      {/* <div className="event1">
        <Event1
          eventImg1="/event-img-1@2x.png"
          fellowships="Entrepreneurship Program"
          heading="India Dance Classes through AI"
          sTARTSON="STUDENT NAME"
          december2023="Isha Toshniwal"
          dURATION="DURATION"
          weeks="8 Weeks"
        />
        <Event1
          eventImg1="/event-img-1@2x.png"
          fellowships="Future Changemakers"
          heading="Romania Financial App"
          sTARTSON="STUDENT NAME"
          december2023="Ema Bacalu"
          dURATION="DURATION"
          weeks="2 Weekends"
        />
        

        <Event1
          eventImg1="/event-img-1@2x.png"
          fellowships="Entrepreneurship Program"
          heading="India Dance Classes through AI"
          sTARTSON="STUDENT NAME"
          december2023="Isha Toshniwal"
          dURATION="TIMELINE"
          weeks="8 Weeks"
          propBackgroundImage="url('/event-img-1@2x.png')"
          propWidth="309px"
          propFlex="unset"
          propMinWidth="unset"
          propGap="240px"
          propHeight="32px"
          propPadding="0px 6px 0px 0px"
          propWidth1="234px"
          propAlignSelf="unset"
          propWidth2="unset"
          propAlignSelf1="unset"
          propWidth3="unset"
          propAlignSelf2="unset"
        />
        <div className="event-1">
          <img className="event-img-12" alt="" src="/event-img-1@2x.png" />
          <div className="img-overlay-14" />
          <div className="event-1-inner">
            <button className="future-changemakers-wrapper">
              <div className="future-changemakers">Future Changemakers</div>
            </button>
          </div>
          <div className="event-info-grp-all-12">
            <div className="c-14">
              <div className="heading5">Romania Financial App</div>
              <div className="event-info-grp-12">
                <div className="event-date-grp-22">
                  <div className="student-name1">STUDENT NAME</div>
                  <div className="ema-bacalu">Ema Bacalu</div>
                </div>
                <div className="event-date-grp-32">
                  <div className="timeline1">TIMELINE</div>
                  <div className="weekends1">2 Weekends</div>
                </div>
              </div>
            </div>
            <img
              className="right-arrowsvg-icon9"
              alt=""
              src="/rightarrowsvg-14.svg"
            />
          </div>
        </div>
        <div className="leftarrowsvg-parent">         
          <div className="reach-us">
            <div className="event-3">
              <img className="event-img-13" alt="" src="/event-img-1@2x.png" />
              <div className="img-overlay-15" />
              <div className="impactand-research-fellowship-wrapper">
                <button className="impactand-research-fellowship">
                  <div className="future-doctors1">Future Doctors</div>
                </button>
              </div>
              <div className="event-info-grp-all-13">
                <div className="c-15">
                  <div className="heading6">Canada Case Study</div>
                  <div className="event-info-grp-13">
                    <div className="event-date-grp-23">
                      <div className="student-name2">STUDENT NAME</div>
                      <div className="mariam-bibi">Mariam Bibi</div>
                    </div>
                    <div className="event-date-grp-33">
                      <div className="timeline2">TIMELINE</div>
                      <div className="days">3 Days</div>
                    </div>
                  </div>
                </div>
                <img
                  className="right-arrowsvg-icon11"
                  alt=""
                  src="/rightarrowsvg-14.svg"
                />
              </div>
            </div>
            <div className="event-41">
              <div className="event-img-1-group">
                <img
                  className="event-img-14"
                  alt=""
                  src="/event-img-1-1@2x.png"
                />
                <div className="img-overlay-16" />
              </div>
              <button className="impact-and-research-fellowship-wrapper">
                <div className="impact-and-research">
                  Impact and Research Fellowship
                </div>
              </button>
              <EventInfoGrpAll
                heading="Case Study"
                sTARTSON="STUDENT NAME"
                december2023="Sarmiza Romania"
                dURATION="TIMELINE"
                propPadding="0px var(--padding-12xs) 0px 0px"
                propWidth="119px"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="submit-btn-container">
        <button className="submit-btn2">
          <div className="view-all1">View All</div>
        </button>
      </div>
    </section>
  );
};

export default EventInfoAll;
