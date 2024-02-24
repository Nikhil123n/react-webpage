import Figure1 from "./Figure1";
import Figure from "./Figure";
import React from "react";
import "./gridElements.css";
import DivowlItem from "./DivowlItem";
const value = 4;

const GridElements = ({data, gridTemplateValue, prgName}) => {
  // console.log(data, gridTemplateValue)

  const value = gridTemplateValue !== undefined ? gridTemplateValue : 4;
  // console.log(data, gridTemplateValue)

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

  // console.log(Object.keys(...data).length)

  return (
    <section className="figure-grid-wrapper">
              <div className="figure-grid-container" >

            {/* <div className="figure-grid-item"> */}
            {/* {data.map((item, index) => (
              <Figure1
                key={index}
                whatsAppImage20230714At12={item.image}
                futureLawyersProgramByHar={item.programName}
                useThePowerOfLawToBringAb={item.description}
                rightArrowsvg="/rightarrowsvg-3.svg"
              />
            ))} */}

            {data.map((item, index) => (              
              <DivowlItem
                link900x5502Aboutjpg={item.image}
                heading5InnovationLeaders={item.programName}
                // startDateOctober21st="Start Date: October 21st"
                developSocialInnovationAn={item.description}
                // entrepreneurialSpirit="entrepreneurial spirit"
                rightArrowsvg="/rightarrowsvg@2x.png"
                
                card = {Object.keys(item).length > 4 ? item : defaultCard }

                className={{
                  width: 'auto',
                  overflow: 'hidden',
                  height: '380px',
                  borderRadius: 'var(--br-3xs)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxSizing: 'border-box',
                  position: 'relative',
                  gap: 'var(--gap-xs)',
                  textAlign: 'left',
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--color-white)',
                  fontFamily: 'var(--font-inter)'
                }}
            />
            ))}
          
            {/* </div> */}
        </div>
    </section>
  );
};

export default GridElements;