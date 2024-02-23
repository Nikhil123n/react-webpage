import DivcolLg1 from "./DivcolLg1";
import React from "react";

import "./DivcolLg.css";

const DivcolLg = ({arrowStyles, heading, paragraph, imgPath, removeGoldenHeader, timelineRemove}) => {
  const imgDefault = "/whatsappimage20230714at011517scaledjpg-1@2x.png"

  return (
    <div className="divcol-lg-12">
      <img
        className="whatsapp-image-2023-07-14-at-0-icon1"
        alt=""
        src={imgPath ? imgPath : imgDefault}
      />
      <div className="into-arrow-svg">
        <DivcolLg1 propFlex="unset" propAlignSelf="stretch" heading={heading} 
                  arrowStyles={arrowStyles}
                  timelineRemove={timelineRemove}
                  paragraph={paragraph}
          />
        <img style={arrowStyles} className="left-arrowsvg-icon1" alt="" src="/leftarrowsvg-2.svg" />
        <img style={arrowStyles} className="right-arrowsvg-icon5" alt="" src="/rightarrowsvg-16.svg" />
      </div>
      <div className="link-fellowships1" style={{...arrowStyles, ...removeGoldenHeader}} >Fellowships</div>
    </div>
  );
};

export default DivcolLg;
