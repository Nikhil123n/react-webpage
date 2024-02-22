import DivcolLg1 from "./DivcolLg1";
import React from "react";

import "./EventImgOverlay.css";

const EventImgOverlay = ({arrowStyles, programName, heading, paragraph, imgPath}) => {
  // console.log(arrowStyles)
  const imgDefault = "/whatsappimage20230714at011517scaledjpg@2x.png";
  const programNameGolden = "corporate internship";
  console.log(programName)

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
          <div className="link-fellowships" > 
              {programName ? '' : programNameGolden 
            }</div>
        </div>
        <div className="divcol-lg-5-wrapper">
          <DivcolLg1 
              arrowStyles = {arrowStyles}
              heading={heading}
              paragraph={paragraph}
            />
        </div>
      </div>
    </div>
  );
};

export default EventImgOverlay;
