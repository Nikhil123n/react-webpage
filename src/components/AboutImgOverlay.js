import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DivcolLg1 from "./DivcolLg1";


import "./EventImgOverlay.css";
const internshipFigureData = require('../json/internship.json');
console.log(internshipFigureData)

const AboutImgOverlay = ({arrowStyles, programName, heading, paragraph, imgPath, deadline, startDate}) => {
  // console.log(arrowStyles)
  const imgDefault = "/whatsappimage20230714at011517scaledjpg@2x.png";
  const programNameGolden = "corporate internship";
  const programNameGoldenURL = "/internship"
  
  const navigate = useNavigate();
  const onLinkExploreClick = useCallback(() => {
    navigate( programNameGoldenURL ? programNameGoldenURL : '');
  }, [navigate]);


  return (
    <div className="event-img-overlay">
      <div className="impact-and-research-fellowship" style={arrowStyles}>
        <div className="divowl-controls">          
          <img
            className="right-arrowsvg-icon4"
            alt=""
            src="/rightarrowsvg-16.svg"             
          />
          <img
            className="left-arrowsvg-icon"
            loading="eager"
            alt=""
            src="/leftarrowsvg-2.svg"
          />
        </div>
      </div>
      <div className="input-text">
        <div className="event-list">
          <img
            className="whatsapp-image-2023-07-14-at-0-icon"
            loading="eager"
            alt=""
            src={imgPath ? imgPath : imgDefault}
          />
          <div className="link-fellowships" onClick={onLinkExploreClick} > 
              {programName ? '' : programNameGolden 
            }</div>
        </div>
        <div className="divcol-lg-5-wrapper">
          <DivcolLg1 
              arrowStyles = {arrowStyles}
              heading={heading}
              paragraph={paragraph}
              deadline={deadline}
              startDate={startDate}
              card={internshipFigureData[0]}

            />
        </div>
      </div>
    </div>
  );
};

export default AboutImgOverlay;
