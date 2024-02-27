import Programs from "./Programs";
import Figure1 from "./Figure1";
import Figure from "./Figure";
import React from "react";

import "./DivFusionColumnWrapper1.css";
import DivowlItem from "./DivowlItem";
const certificateFigureData = require('../json/certificate.json');
console.log([ certificateFigureData[2] ])


const DivFusionColumnWrapper1 = () => {
  const DivFusionColumnWrapper1Data = [
    {
      image: "/aiml1jpg@2x.png",
      heading: "AI and ML Bootcamp",
      description: "Cultivate your acumen in Python, Artificial…",
      startDate: "Start Date: 16th March 2024",
      rightArrowsvg: "/rightarrowsvg-3.svg",
      figureData: certificateFigureData[2],
    },
    {
      image: "/whatsappimage20230714at125555amjpeg@2x.png",
      heading: "Future Lawyers’ Program by Harv…Future Lawyers’ ",
      description: "Use the power of  law to bring about a p…  ",      
      startDate: "Start Date: 20th April 2024",
      rightArrowsvg: "/rightarrowsvg-3.svg",
      figureData: certificateFigureData[5],
    },
    {
      image: "/pexelspixabay1393921536x1024jpg@2x.png",
      heading: "Harvard Model Congress Young L…",
      description: "A life-changing 2-Week Virtual Program f…",
      startDate: "Start Date: 13th April 2024",
      rightArrowsvg: "/rightarrowsvg-3.svg",
      figureData: certificateFigureData[4],
    },    
    {
      image: "/ent21jpg@2x.png",
      heading: "Future Entrepreneurs Program by …",
      description: "Who Said Start-Ups Are Only For Grown-…",
      startDate: "Start Date: 24th February 2024",
      rightArrowsvg: "/rightarrowsvg-3.svg",
      figureData: certificateFigureData[0],
    },
    {
      image: "/whatsappimage20230714at125208am1jpeg@2x.png",
      heading: "World Debate Stars with the Harv…",
      description: "A Unique and Intensive 2-Weekend Progr…",      
      startDate: "Start Date: 27th April 2024",
      rightArrowsvg: "/rightarrowsvg-3.svg",
      figureData: certificateFigureData[7],
    },
    {
      image: "/whatsappimage20230714at10028am1536x1025jpeg@2x.png",
      heading: "Future MUN Leaders by the Harva…",
      description: "Becoming a Best Delegate: A Step by Ste…",
      startDate: "Start Date: 24th February 2024",
      rightArrowsvg: "/rightarrowsvg-3.svg",
      figureData: certificateFigureData[0],  // dteail page is not its own - default one - update its data 
    }
  ]
  return (
    <section className="div-fusion-column-wrapper">
      <div className="s-3">
        <Programs
          certificatePrograms="Certificate Programs"
          experienceGlobalLearning="Experience global learning,"
          participateInProjectsAndB="participate in projects and build"
          networksGlobally="networks globally."
          cERTIFICATES="CERTIFICATES"
          url='/certificate'
        />

        
        <div className="divfusion-layout-column">
          
          {/* <Figure1
            whatsAppImage20230714At12="/aiml1jpg@2x.png"
            futureLawyersProgramByHar="AI and ML Bootcamp"
            useThePowerOfLawToBringAb="Cultivate your acumen in Python, Artificial…"
            rightArrowsvg="/rightarrowsvg-3.svg"
            card={certificateFigureData[2]}
          />
          <Figure1
            whatsAppImage20230714At12="/whatsappimage20230714at125555amjpeg@2x.png"
            futureLawyersProgramByHar="Future Lawyers’ Program by Harv…Future Lawyers’ "
            useThePowerOfLawToBringAb="Use the power of  law to bring about a p…  "
            rightArrowsvg="/rightarrowsvg-3.svg"
            card={certificateFigureData[5]}
          />
          <Figure1
            whatsAppImage20230714At12="/pexelspixabay1393921536x1024jpg@2x.png"
            futureLawyersProgramByHar="Harvard Model Congress Young L…"
            useThePowerOfLawToBringAb="A life-changing 2-Week Virtual Program f…"
            rightArrowsvg="/rightarrowsvg-3.svg"
            propPadding="var(--padding-19xl) var(--padding-3xs) var(--padding-19xl) var(--padding-4xs)"
            // propAlignSelf="unset"
            // propFlex="unset"
            card={certificateFigureData[4]}
          />
          <Figure1
            whatsAppImage20230714At12="/ent21jpg@2x.png"
            futureLawyersProgramByHar="Future Entrepreneurs Program by …"
            useThePowerOfLawToBringAb="Who Said Start-Ups Are Only For Grown-…"
            rightArrowsvg="/rightarrowsvg-3.svg"
            propPadding="var(--padding-19xl) var(--padding-3xs) var(--padding-19xl) var(--padding-4xs)"
            // propAlignSelf="unset"
            card={certificateFigureData[0]}   // not its own - default one - update its data 
          />
          <Figure1
            whatsAppImage20230714At12="/whatsappimage20230714at125208am1jpeg@2x.png"
            futureLawyersProgramByHar="World Debate Stars with the Harv…"
            useThePowerOfLawToBringAb="A Unique and Intensive 2-Weekend Progr…"
            rightArrowsvg="/rightarrowsvg-3.svg"
            propPadding="var(--padding-19xl) var(--padding-3xs) var(--padding-19xl) var(--padding-4xs)"
            // propAlignSelf="unset"
            // propFlex="unset"
            card={certificateFigureData[7]}
          />
          <Figure
            whatsAppImage20230714At10="/whatsappimage20230714at10028am1536x1025jpeg@2x.png"
            futureMUNLeadersByTheHarv="Future MUN Leaders by the Harva…"
            becomingABestDelegateASte="Becoming a Best Delegate: A Step by Ste…"
            rightArrowsvg="/rightarrowsvg-3.svg"
            card={certificateFigureData[0]}   // not its own - default one - update its data 
          /> */}

          {DivFusionColumnWrapper1Data.map((item, index) => (        
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

export default DivFusionColumnWrapper1;
