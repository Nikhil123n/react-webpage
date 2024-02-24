import Event1 from "./Event1";
import EventInfoGrpAll from "./EventInfoGrpAll";
import React from "react";

import "./EventInfoGrid.css";
const MasterclassProgramsData = require('../json/masterclass.json');

const EventInfoGrid = () => {

  const defaultCard = 
    {
      "category": "Masterclass programs",
      "image": "/Certificate/world-debate.jpeg",
      "programName": "World Debate Stars with the Harvard MUN Team (ICMUN)",
      "programURL": "world-debate-stars-with-the-harvard-MUN-team-(ICMUN)",
      "description": "A Unique and Intensive 2-Weekend Program on developing fundamental skills in argumentation and persuasion in personal and academic life.",
      "hashtag": "#CertifcateLeadership",
      "date": 1708773981000,
      "eligibility": "Grades 6th-12th",
      "duration": "2 Weekends",
      "earlyApplicationDate": 1707996381000,
      "programFee": "USD 300",
      "regularFee": "USD 400",
      "deadline": 1708601181000,
      "about": "World Debate Stars with the Harvard MUN Team is a course spread over two weekends and is led by qualified Student Mentors who have gained valuable experience debating through their involvement competing on the collegiate MUN circuit.",
      "schedule": [
        {
          "tabTitle": "Week 1| Day 1",
          "date": "1708773981000",
          "time": "9:00 am - 12:00 pm-EST",
          "description": "Theme: The Fundamentals of Argumentation\nStudents will attend a webinar on creating convincing arguments, focusing on rhetorical strategies and selection of evidence for arguments.\nTopic 1: Rhetorical Strategies in Debate\nTopic 2: The Keystone of an Argument: Evidence"
        },
        {
          "tabTitle": "Week 1| Day 2",
          "date": "1708860381000",
          "time": "9:00 am - 12:00 pm-EST",
          "description": "Students will attend a webinar on counterarguments, focusing on anticipating what others might say and effective methods of rebuttal.\nTopic 1: Planning for Your Opponent’s Argument\nTopic 2: Refute and Rebut: The Core of a Counterargument"
        },
        {
          "tabTitle": "Week 2| Day 1",
          "date": "1709378781000",
          "time": "9:00 am - 12:00 pm-EST",
          "description": "Theme: Thinking on Your Feet\nStudents will attend a webinar on necessary debate skills, focusing on public speaking in debate and ways to capture attention in an argument.\nTopic 1: Being a Successful Orator in Debate\nTopic 2: All Eyes on Me: Standing Out in an Argument"
        },
        {
          "tabTitle": "Week 2| Day 2",
          "date": "1709465181000",
          "time": "9:00 am - 12:00 pm-EST",
          "description": "1 - Students will attend a session on coming up with arguments on the spot, focusing on general frameworks for building an argument and strategies for avoiding getting flustered in a debate.\n2 - Mock Debate"
        }
      ]
    }

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
           {MasterclassProgramsData.map((event, index) => (
              <Event1
                key={index}
                eventImg1={event.image}
                fellowships={event.subcategory}
                heading={event.programName}
                sTARTSON="STARTS ON"
                december2023={event.date}
                dURATION="DURATION"
                weeks={event.weeks}
                card = {Object.keys(event).length > 4 ? event : defaultCard }
              />
            ))}                    
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
