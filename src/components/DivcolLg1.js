import { useMemo } from "react";
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
              HDFC Capital Advisors: Corporate
            </p>
            <p className="internship-project">Internship Project</p>
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
            In collaboration with Harvard Entrepreneurship
          </p>
          <p className="collective-and-learn-with-lead">
            <span className="collective-and-learn">{`Collective and Learn with Leaders. `}</span>
            <i>Embark on an 8-</i>
          </p>
          <p className="week-experiential-learning-pro">
            <i>week Experiential Learning Project Tackling a Fortune</i>
          </p>
          <p className="real-world-business-problem-g">
            <i>500 real-world business problem, guided by a Harvard</i>
          </p>
          <p className="undergraduate-mentor-to-craft">
            <i>undergraduate mentor to craft live solutions that</i>
          </p>
          <p className="address-the-impact-of-green-fi">
            <i>address the impact of Green Finance for residential</i>
          </p>
        </span>
      </div>
    </div>
  );
};

export default DivcolLg1;
