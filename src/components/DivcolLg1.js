import { useMemo } from "react";
import React from "react";
import "./DivcolLg1.css";

const DivcolLg1 = ({ propFlex, propAlignSelf }) => {
  const divcolLg5Style = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div className="divcol-lg-5" style={divcolLg5Style}>
      <div className="heading-wrapper">
        <div className="heading">
          <h3 className="link-heading-container">
            <p className="hdfc-capital-advisors">
              HDFC Capital Advisors: Corporate Internship Project</p>
          </h3>
          <div className="img-overlay1">
            <div className="event-date-grp">
              <div className="application-deadline">Application Deadline</div>
              <div className="program-starts">Program Starts</div>
            </div>
            <div className="event-date-grp1">
              <div className="december-2023">13 December, 2023</div>
              <div className="december-20231">16 December, 2023</div>
            </div>
          </div>
        </div>
      </div>
      <div className="in-collaboration-with-container">
        <span>
          <p className="in-collaboration-with">
            <i> In collaboration with Harvard Entrepreneurship Collective and Learn with Leaders. Embark on an 8-week Experiential Learning Project Tackling a Fortune 500 real-world business problem, guided by a Harvard undergraduate mentor to craft live solutions that address the impact of Green Finance for residential</i>
          </p>
        </span>
      </div>
    </div>
  );
};

export default DivcolLg1;
