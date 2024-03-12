import Programs from "./Programs";
import Figure from "./Figure";
import Figure1 from "./Figure1";
import React from "react";

import "./FutureDoctors.css";
const competitionFigureData = require('../json/competition.json');
import DivowlItem from "./DivowlItem";
console.log([ competitionFigureData[2] ])

const FutureDoctors = () => {
  const FutureDoctorsData = [
    {
      image: "/whatsappimage20230714at125555amjpeg-1@2x.png",
      heading: "The Leadership Competition by the Harvard MUN Team",
      description: "Learn leadership skills from Harvard student mentors, compete in challenges & develop project proposals to benefit your community.",
      startDate: "Start Date: 23 March 2024",
      rightArrowsvg: "/rightarrowsvg-9.svg",
      figureData: competitionFigureData[0],
    },
    {
      image: "/906241-830545776975015-583285608404393633-o1536x965jpg@2x.png",
      heading: "The Wolves of Wall Street Competition",
      description: "Harvard Student Agencies presents - The World’s first Global Stock Market Competition for the Youth.",
      startDate: "Start Date: 20 April 2024",
      rightArrowsvg: "/rightarrowsvg-9.svg",
      figureData: competitionFigureData[1],
    },
    {
      image: "/feature400x60011jpg@2x.png",
      heading: "The HUCEG Sustainability Leaders Challenge",
      description: "Kick start your sustainability journey with mentors from Harvard HUCEG.",
      startDate: "Start Date: 20 April 2024",
      rightArrowsvg: "/rightarrowsvg-9.svg",
      figureData: competitionFigureData[2],
    }
  ]
  return (
    <section className="future-doctors">
      <div className="s-4">
        <Programs
          certificatePrograms="Competitions"
          experienceGlobalLearning="Learn and compete with a"
          participateInProjectsAndB="global peer group. Win at a"
          networksGlobally="global stage."
          cERTIFICATES="COMPETITIONS"
          url="/competition"
          // propGap="284px"
          // propMinWidth="229px"
          // propWidth="562px"
          // propMinWidth1="562px"
        />
        <div className="divfusion-layout-column1">
          {/* <Figure
            whatsAppImage20230714At10="/whatsappimage20230714at125555amjpeg-1@2x.png"
            futureMUNLeadersByTheHarv="The Leadership Competition by th…"
            becomingABestDelegateASte="Learn leadership skills from Harvard stud…"
            rightArrowsvg="/rightarrowsvg-9.svg"
            propPadding="var(--padding-18xl) var(--padding-3xs)"
            propAlignSelf="stretch"
            propFlex="1"
            card={competitionFigureData[1]}
          />
          <Figure
            whatsAppImage20230714At10="/906241-830545776975015-583285608404393633-o1536x965jpg@2x.png"
            futureMUNLeadersByTheHarv="The Wolves of Wall Street Compet…"
            becomingABestDelegateASte="Harvard Student Agencies presents – Th…"
            rightArrowsvg="/rightarrowsvg-9.svg"
            propPadding="var(--padding-18xl) var(--padding-3xs)"
            propAlignSelf="stretch"
            propFlex="1"
            card={competitionFigureData[2]}
          />
          <Figure1
            whatsAppImage20230714At12="/feature400x60011jpg@2x.png"
            futureLawyersProgramByHar="The HUCEG Sustainability Leader…"
            useThePowerOfLawToBringAb="Kick start your sustainability journey with…"
            rightArrowsvg="/rightarrowsvg-9.svg"
            propPadding="var(--padding-18xl) var(--padding-3xs)"
            propAlignSelf="stretch"
            propFlex="1"
            card={competitionFigureData[0]}

          /> */}

          
          {FutureDoctorsData.map((item, index) => (        
            <DivowlItem
                  link900x5502Aboutjpg={item.image}
                  heading5InnovationLeaders={item.heading}
                  startDateOctober21st={item.startDate}
                  developSocialInnovationAn={item.description}
                  // entrepreneurialSpirit="entrepreneurial spirit"
                  rightArrowsvg={item.rightArrowsvg}
                  
                  // card = {Object.keys(item).length > 4 ? item : defaultCard }
                  card={item.figureData}

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
        </div>
      </div>
    </section>
  );
};

export default FutureDoctors;
