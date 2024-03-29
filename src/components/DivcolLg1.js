import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./DivcolLg1.css";


const DivcolLg1 = ({ propFlex, propAlignSelf, heading, arrowStyles, paragraph, timelineRemove, startDate, forApplyNow, jsonData, card }) => {  
  
  // console.log(timelineRemove)  

  const navigate = useNavigate();
  let newCard;      
  let fellowshipFigureData = jsonData;
  console.log("jsonData", jsonData)
  
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthNamesF = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

  const dateh = new Date(parseInt(card.date));  
  let deadline = new Date(parseInt(card.deadline));    

  const getCardDetails = () => {
    newCard = fellowshipFigureData.filter((data) => {return data.programName == heading})    
    onCardClick(newCard);
  }
  const onCardClick = useCallback((newCard) => {        
    navigate("/certificate-program",{
      state: {
        state: newCard ? newCard[0] : {}
      }  
    });
  }, [navigate]);
  
  console.log("forApplyNow", forApplyNow)
  const onLinkExploreClick = useCallback((newCard) => {       
    if (forApplyNow) {      
      window.location.href = forApplyNow;
    } else {
      navigate("/program-reg",{
        state: newCard.length > 0 ? newCard[0].programName : heading
      });
    }  
  }, [forApplyNow, navigate, heading]);
  
  const getCardHeading  = (event) => {
    event.preventDefault(); // Prevent default anchor tag behavior
    const newCard = fellowshipFigureData.filter((data) => {return data.programName == heading})    
    onLinkExploreClick(newCard);
  }

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
              <div className="december-2023"> {deadline.getDate()} {monthNamesF[deadline.getMonth()]}, {deadline.getFullYear()} </div>
              <div className="december-20231"> {dateh.getDate()} {monthNames[dateh.getMonth()]} {dateh.getFullYear()} </div>
            </div>
          </div>
        </div>
      </div>
      <div className="in-collaboration-with-container">
        <span className="applynow">
          <p className="in-collaboration-with">
            <i> {paragraph ? paragraph : content} </i>
          </p>
          <a href="" onClick={(event) => getCardHeading(event)} style={arrowStyles} >Apply Now</a>
        </span>
      </div>
    </div>
  );
};

export default DivcolLg1;
