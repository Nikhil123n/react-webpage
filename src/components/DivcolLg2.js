import DivcolLg1 from "./DivcolLg1";
import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import "./DivcolLg.css";
const fellowshipFigureData = require('../json/fellowship.json');

const DivcolLg2 = ({arrowStyles, heading, paragraph, imgPath, removeGoldenHeader, timelineRemove, deadline, startDate}) => {
  const imgDefault = "/whatsappimage20230714at011517scaledjpg-1@2x.png"
  const fellowProgramName = "Fewllowship";
  const fellowProgramNameURL = '/fellowship';

  const navigate = useNavigate();
  const onLinkExploreClick = useCallback(() => {
    navigate( fellowProgramNameURL ? fellowProgramNameURL : '');
  }, [navigate]);


  return (
    <div className="divcol-lg-12">
      <img
        className="whatsapp-image-2023-07-14-at-0-icon1"
        alt=""
        src={imgPath ? imgPath : imgDefault}
      />
      <div className="into-arrow-svg">
        <DivcolLg1 propAlignSelf="stretch" 
                  heading={heading} 
                  arrowStyles={arrowStyles}
                  timelineRemove={timelineRemove}
                  paragraph={paragraph}
                  deadline={deadline}
                  startDate={startDate}
                  card={fellowshipFigureData[0]}
          />
        <img style={arrowStyles} className="left-arrowsvg-icon1" alt="" src="/leftarrowsvg-2.svg" />
        <img style={arrowStyles} className="right-arrowsvg-icon5" alt="" src="/rightarrowsvg-16.svg" />
      </div>
      <div className="link-fellowships1" onClick={onLinkExploreClick} style={{...arrowStyles, ...removeGoldenHeader} } >Fellowships</div>
    </div>
  );
};

export default DivcolLg2;
