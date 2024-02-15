import { useMemo } from "react";
import "./EventInfoGrpAll.css";

const EventInfoGrpAll = ({
  heading,
  sTARTSON,
  december2023,
  dURATION,
  propPadding,
  propWidth,
}) => {
  const eventInfoGrpAll1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const eventDateGrp21Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="event-info-grp-all-11" style={eventInfoGrpAll1Style}>
      <div className="c-12">
        <div className="heading4">{heading}</div>
        <div className="event-info-grp-11">
          <div className="event-date-grp-21" style={eventDateGrp21Style}>
            <div className="starts-on1">{sTARTSON}</div>
            <div className="december-20233">{december2023}</div>
          </div>
          <div className="event-date-grp-31">
            <div className="duration1">{dURATION}</div>
            <div className="weekends">2 Weekends</div>
          </div>
        </div>
      </div>
      <img
        className="right-arrowsvg-icon7"
        alt=""
        src="/rightarrowsvg-14.svg"
      />
    </div>
  );
};

export default EventInfoGrpAll;
