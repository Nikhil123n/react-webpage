import { useMemo } from "react";
import "./Event1.css";

const Event1 = ({
  eventImg1,
  fellowships,
  heading,
  sTARTSON,
  december2023,
  dURATION,
  weeks,
  propBackgroundImage,
  propWidth,
  propFlex,
  propMinWidth,
  propGap,
  propHeight,
  propPadding,
  propWidth1,
  propAlignSelf,
  propWidth2,
  propAlignSelf1,
  propWidth3,
  propAlignSelf2,
}) => {
  const event2Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
      gap: propGap,
    };
  }, [propBackgroundImage, propWidth, propFlex, propMinWidth, propGap]);

  const programsFrameStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameWithDivFusionColumnWStyle = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth1,
    };
  }, [propPadding, propWidth1]);

  const headingStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const eventDateGrp2Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const sTARTSONStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const eventDateGrp3Style = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const weeksStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
    };
  }, [propAlignSelf2]);

  return (
    <div className="event-2" style={event2Style}>
      <img className="event-img-1" alt="" src={eventImg1} />
      <div className="img-overlay-12" />
      <div className="programs-frame" style={programsFrameStyle}>
        <button
          className="frame-with-div-fusion-column-w"
          style={frameWithDivFusionColumnWStyle}
        >
          <div className="fellowships">{fellowships}</div>
        </button>
      </div>
      <div className="event-info-grp-all-1">
        <div className="c-11">
          <div className="heading3" style={headingStyle}>
            {heading}
          </div>
          <div className="event-info-grp-1">
            <div className="event-date-grp-2" style={eventDateGrp2Style}>
              <div className="starts-on" style={sTARTSONStyle}>
                {sTARTSON}
              </div>
              <div className="december-20232">{december2023}</div>
            </div>
            <div className="event-date-grp-3" style={eventDateGrp3Style}>
              <div className="duration">{dURATION}</div>
              <div className="weeks1" style={weeksStyle}>
                {weeks}
              </div>
            </div>
          </div>
        </div>
        <img
          className="right-arrowsvg-icon6"
          alt=""
          src="/rightarrowsvg-14.svg"
        />
      </div>
    </div>
  );
};

export default Event1;
