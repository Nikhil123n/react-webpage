import DivowlItem from "./DivowlItem";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import "./Container.css";
// import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Container = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/stepper-1");
  }, [navigate]);

  const defaultCard = 
  {
    "category": "Certificate programs",
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
    <div className="hero-container">
      <div className="carousel-img-catelog-grp-1">
        <div className="divowl-stage-outer">
          <DivowlItem
            link900x5502Aboutjpg="/link--900x5502aboutjpg@2x.png"
            heading5InnovationLeaders={`Innovation & Leadership World Workshop`}
            startDateOctober21st="Start Date: October 21st"
            developSocialInnovationAn="Develop social innovation and"
            entrepreneurialSpirit="entrepreneurial spirit"
            rightArrowsvg="/rightarrowsvg@2x.png"
            card = {defaultCard}
          />
          <DivowlItem
            link900x5502Aboutjpg="/link--900x550about4jpg@2x.png"
            heading5InnovationLeaders="Take The World Forward Fellowship"
            startDateOctober21st="Start Date: November 18th"
            developSocialInnovationAn="Creating the next generation of"
            entrepreneurialSpirit="changemakers"
            rightArrowsvg="/rightarrowsvg-1@2x.png"
            propPadding="var(--padding-14xl) var(--padding-4xs) var(--padding-smi) var(--padding-3xs)"
            card = {defaultCard}
          />
          <DivowlItem
            link900x5502Aboutjpg="/link--400x600featureimage1png@2x.png"
            heading5InnovationLeaders="The Leadership Competition"
            startDateOctober21st="Start Date: November 4th"
            developSocialInnovationAn={`Compete in challenges & develop`}
            entrepreneurialSpirit="project proposals"
            rightArrowsvg="/rightarrowsvg-2@2x.png"
            propPadding="var(--padding-14xl) var(--padding-4xs) var(--padding-smi) var(--padding-3xs)"
            card = {defaultCard}
          />
        </div>
      </div>
      <div className="heading-cta">
        <h1 className="heading-1-container">
          <span>
            <p className="ivy-league-education">Ivy League Education</p>
            <p className="unbounded">Unbounded</p>
          </span>
        </h1>
        <div className="future-doctors-event-info-grou">
          <div className="learn-with-the">{`Learn with the World’s Best Teachers, Mentors & Students`}</div>
          <button className="button" onClick={onButtonContainerClick}>
            <div className="get-started">Get Started</div> 
            <FontAwesomeIcon icon={faAngleRight} className="angle-right-icon" swapOpacity size="lg" />            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container;
