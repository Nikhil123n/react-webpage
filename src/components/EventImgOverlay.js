import React from "react";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import DivcolLg1 from "./DivcolLg1";
import "./EventImgOverlay.css";

const internshipFigureData = require('../json/internship.json');
console.log(internshipFigureData)


const EventImgOverlay = ({arrowStyles, programName, heading, paragraph, imgPath, deadline, startDate}) => {
  // console.log(arrowStyles)
  const imgDefault = "/whatsappimage20230714at011517scaledjpg@2x.png";
  const programNameGolden = "corporate internship";
  const programNameGoldenURL = "/internship"
  
  const navigate = useNavigate();
  const onLinkExploreClick = useCallback(() => {
    navigate( programNameGoldenURL ? programNameGoldenURL : '');
  }, [navigate]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);

  const onNextClick = () => {
    if (currentIndex < internshipFigureData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSlideDirection("slide-left");
      setTimeout(() => setSlideDirection(null), 500); // Reset slide direction after transition
    }
  };

  const onPrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSlideDirection("slide-right");
      setTimeout(() => setSlideDirection(null), 500); // Reset slide direction after transition
    }
  };

  const currentData = internshipFigureData[currentIndex];


  return (
    <div className="event-img-overlay">
      <div className="impact-and-research-fellowship" style={arrowStyles}>
        <div className="divowl-controls">          
        <button style={{backgroundColor: "transparent", border: '0'}} className="arrow-button" onClick={() => onNextClick() } >
          <img
            className="right-arrowsvg-icon4"
            alt=""
            src="/rightarrowsvg-16.svg"             
          />
          </button>
          <button style={{backgroundColor: "transparent", border: '0'}} className="arrow-button" onClick={() => onPrevClick() } >
          <img
            className="left-arrowsvg-icon"
            loading="eager"
            alt=""
            src="/leftarrowsvg-2.svg"
          />
          </button>
        </div>
      </div>

      <div className="input-text">
        <div className="event-list" >
          <img
            className={`whatsapp-image-2023-07-14-at-0-icon ${slideDirection}`}
            loading="eager"
            alt=""
            src={imgPath ? imgPath : currentData.image}
          />
          <div className="link-fellowships" onClick={onLinkExploreClick} > 
              {programName ? '' : programNameGolden }
            </div>
        </div>
        <div className={`divcol-lg-5-wrapper ${slideDirection}`} >
          <DivcolLg1 
              arrowStyles = {arrowStyles}
              heading={currentData.programName}
              paragraph={currentData.description}
              deadline={currentData.deadline}
              startDate={currentData.earlyApplicationDate}
              card={currentData}

            />
        </div>
      </div>
    </div>
  );
};

export default EventImgOverlay;
