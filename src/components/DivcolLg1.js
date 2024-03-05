import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./DivcolLg1.css";
const fellowshipFigureData = require('../json/fellowship.json');

const DivcolLg1 = ({ propFlex, propAlignSelf, heading, arrowStyles, paragraph, timelineRemove, deadline, startDate, card }) => {  
  
  // console.log(timelineRemove)  

  const navigate = useNavigate();
  let newCard;      

  const getCardHeading = () => {
    newCard = fellowshipFigureData.filter((data) => {return data.programName == heading})    
    onLinkExploreClick(newCard);
  }
  const onLinkExploreClick = useCallback((newCard) => {       
    navigate("/program-reg",{
      state: newCard[0].programName
    });
  }, [navigate]);

  const getCardDetails = () => {
    newCard = fellowshipFigureData.filter((data) => {return data.programName == heading})    
    onCardClick(newCard);
  }
  const onCardClick = useCallback((newCard) => {        
    navigate("/certificate-program",{
      state: newCard ? newCard[0] : {}
    });
  }, [navigate]);
  
  
  const divcolLg5Style = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  // console.log(fellowshipFigureData)

  return (
    <div className="divcol-lg-5" style={divcolLg5Style}>
      <div className="heading-wrapper">
        <div className="heading">
          <h3 className="link-heading-container">
            <p className="hdfc-capital-advisors" onClick={getCardDetails}>
              {heading ? heading : "HDFC Capital Advisors: Corporate Internship Project"}
              </p>
          </h3>
          <div className="img-overlay1">
            <div className="event-date-grp" style={{...arrowStyles, ...timelineRemove}}>
              <div className="application-deadline">Application Deadline</div>
              <div className="program-starts">Program Starts</div>
            </div>
            <div className="event-date-grp1" style={{...arrowStyles, ...timelineRemove}}>
              <div className="december-2023">{deadline}</div>
              <div className="december-20231">{startDate}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="in-collaboration-with-container">
        <span className="applynow">
          <p className="in-collaboration-with">
            <i> {paragraph ? paragraph : content} </i>
          </p>
          <a href="" onClick={getCardHeading} style={arrowStyles} >Apply Now</a>
        </span>
      </div>
    </div>
  );
};

export default DivcolLg1;
