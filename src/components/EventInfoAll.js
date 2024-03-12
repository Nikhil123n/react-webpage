import Event1 from "./Event1";
import EventInfoGrpAll from "./EventInfoGrpAll";
import React, {useState, useRef} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import "./EventInfoAll.css";
const StudentAchievementsData = require('../json/studentAchievements.json');

const EventInfoAll = () => {

  const defaultCard = 
    {
      "category": "Student Achievements",
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
    
    // const [currentIndex, setCurrentIndex] = useState(0);
    // console.log(StudentAchievementsData.length)

    // const handleNextSlide = () => {
    //   setCurrentIndex((prevIndex) => (prevIndex === StudentAchievementsData.length - 4 ? 0 : prevIndex + 1));
    // };
    
    // const handlePrevSlide = () => {
    //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? StudentAchievementsData.length - 4 : prevIndex - 1));
    // };

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 4
      },
      desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 800, min: 500 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 500, min: 0 },
        items: 1
      }
    };
    const carouselRef = useRef(null);

    const handleNextSlide = () => {
      carouselRef.current.next();
    };
  
    const handlePrevSlide = () => {
      carouselRef.current.previous();
    };
  


  return (
    <section className="event-info-all">
      <div className="student-achievements-wrapper">
        <h2 className="student-achievements">Student Achievements</h2>
      </div>

      <div className="leftarrowsvg">
        <div className="leftarrowsvgrightarrowsvg">
          <button style={{backgroundColor: "transparent", border: '0'}}  onClick={handlePrevSlide}>
          <img
            className="left-arrowsvg-icon3"
            alt=""
            src="/leftarrowsvg-2.svg"
          />
          </button>
          <button style={{backgroundColor: "transparent", border: '0'}} onClick={handleNextSlide}>
          <img
            className="right-arrowsvg-icon10"
            alt=""
            src="/rightarrowsvg-16.svg"
          />
          </button>
        </div>
      </div>
      

      <div className="entrepreneurship-program-frame">        
        
        <Carousel 
            ref={carouselRef}
            infinite={true}
            responsive={responsive} 
            arrows={false}
            partialVisible={true}
            
            containerClass="heading-text2" >
            {StudentAchievementsData.map((event, index) => (
              <Event1
                key={index}
                eventImg1={event.image}
                fellowships={event.subcategory}
                heading={event.programName}
                sTARTSON="STARTS ON"
                december2023={event.date}
                dURATION="DURATION"
                weeks={event.weeks}
                hideEventInfoGrp1={{display: 'none' }} 
                card = {Object.keys(event).length > 4 ? event : defaultCard }
                // transitionStyle= {{ transform: `translateX(-${currentIndex * 100}%)` }}
              />
            ))} 
          
        </Carousel>
      </div>
      <div className="submit-btn-container">
        <button className="submit-btn2">
          <div className="view-all1">View All</div>
        </button>
      </div>
    </section>
  );
};

export default EventInfoAll;
