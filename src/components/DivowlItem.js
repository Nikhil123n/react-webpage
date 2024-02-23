import { useMemo, useCallback } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./DivowlItem.css";

const DivowlItem = ({
  link900x5502Aboutjpg,
  heading5InnovationLeaders,
  startDateOctober21st,
  developSocialInnovationAn,
  entrepreneurialSpirit,
  rightArrowsvg,
  propPadding,
  propPadding1,
  propAlignSelf,
  propGap,
  className,
  card,
}) => {

  
  const divcitemcontentStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const navigate = useNavigate();
  const onCardClick = useCallback(() => {
    navigate("/certificate-program",{
      state: card ? card : "The Leadership Competition by the Harvard MUN Team"
    });
  }, [navigate]);




  return (
    <div className="divowl-item" onClick={onCardClick} style={className}>
      <img
        className="link-900x550-2-aboutjpg"
        alt=""
        src={link900x5502Aboutjpg}
      />
      <div className="divcitemcontent" style={divcitemcontentStyle}>
        <div className="img-overlay-frame">
          <div className="heading-5">{heading5InnovationLeaders}</div>
        </div>
        <div className="event-info-group-all">
          <div className="start-date-october">{startDateOctober21st}</div>
        </div>
        <div className="weeks">
          <div className="develop-social-innovation-container">
            <p className="develop-social-innovation">
              {developSocialInnovationAn} {entrepreneurialSpirit}
            </p>            
          </div>
          <img
            className="right-arrowsvg-icon"
            loading="eager"
            alt=""
            src={rightArrowsvg}
          />
        </div>
      </div>
    </div>
  );
};

export default DivowlItem;
