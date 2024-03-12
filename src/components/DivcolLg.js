import DivcolLg1 from "./DivcolLg1";
import { useMemo, useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./DivcolLg.css";
const fellowshipFigureData = require('../json/fellowship.json');

const DivcolLg = ({arrowStyles, heading, paragraph, imgPath, removeGoldenHeader, timelineRemove, deadline, startDate}) => {
  const imgDefault = "/whatsappimage20230714at011517scaledjpg-1@2x.png"
  const fellowProgramName = "Fewllowship";
  const fellowProgramNameURL = '/fellowship';

  const navigate = useNavigate();
  const onLinkExploreClick = useCallback(() => {
    navigate( fellowProgramNameURL ? fellowProgramNameURL : '');
  }, [navigate]);


  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  let [currentData, setCurrentData] = useState(fellowshipFigureData[currentIndex]);
  
  const onPrevClick = () => {
    // if (currentIndex > 0) {
    //   const index = currentIndex - 1;
    //   setCurrentIndex(currentIndex - 1);
    //   setSlideDirection("slide-right");
    //   setTimeout(() => setSlideDirection(null), 500); // Reset slide direction after transition
    //   currentData= fellowshipFigureData[index];
    // }
    if (currentIndex > 0 ) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        setSlideDirection("slide-right");
        setTimeout(() => setSlideDirection(null), 500); // Reset slide direction after transition
        setCurrentData(fellowshipFigureData[newIndex]);
        return newIndex;
      });      
    }
  };
  const onNextClick = () => {
    if (currentIndex < fellowshipFigureData.length - 1) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        setSlideDirection("slide-left");
        setTimeout(() => setSlideDirection(null), 500); // Reset slide direction after transition
        setCurrentData(fellowshipFigureData[newIndex]);
        return newIndex;
      });      
    }
  };  

  console.log(currentIndex, currentData)  
  

  return (
    <div className="divcol-lg-12">
      <img
        className={`whatsapp-image-2023-07-14-at-0-icon1 ${slideDirection}`}
        alt=""
        src={currentData.image}
      />
      <div className={`into-arrow-svg ${slideDirection}`} >
        <DivcolLg1 propAlignSelf="stretch" 
                  heading={currentData.programName}
                  arrowStyles={arrowStyles}
                  timelineRemove={timelineRemove}
                  paragraph={currentData.description}
                  deadline={currentData.deadline}
                  startDate={currentData.earlyApplicationDate}
                  card={currentData}
                  jsonData = {require('../json/fellowship.json')}
          />

        <button style={{backgroundColor: "transparent", border: '0'}} className="arrow-button" onClick={() => onPrevClick() } >
          <img style={arrowStyles} className="left-arrowsvg-icon1" alt="" src="/leftarrowsvg-2.svg" />
        </button>
        <button style={{backgroundColor: "transparent", border: '0'}} className="arrow-button" onClick={() => onNextClick() } >
          <img style={arrowStyles} className="right-arrowsvg-icon5" alt="" src="/rightarrowsvg-16.svg" />
        </button>
      </div>
      <div className="link-fellowships1" onClick={onLinkExploreClick} style={{...arrowStyles, ...removeGoldenHeader} } >Fellowships</div>
    </div>
  );
};

export default DivcolLg;
