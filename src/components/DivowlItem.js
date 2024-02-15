import { useMemo } from "react";
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
}) => {
  const divcitemcontentStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="divowl-item">
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
              {developSocialInnovationAn}
            </p>
            <p className="entrepreneurial-spirit">{entrepreneurialSpirit}</p>
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
