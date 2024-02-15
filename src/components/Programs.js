import { useMemo } from "react";
import "./Programs.css";

const Programs = ({
  certificatePrograms,
  experienceGlobalLearning,
  participateInProjectsAndB,
  networksGlobally,
  cERTIFICATES,
  propGap,
  propMinWidth,
  propWidth,
  propMinWidth1,
}) => {
  const programsStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDivStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const cERTIFICATESStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth1,
    };
  }, [propWidth, propMinWidth1]);

  return (
    <div className="programs" style={programsStyle}>
      <div className="before" />
      <div className="join-the-change-makers-parent" style={frameDivStyle}>
        <div className="join-the-change-makers">
          <h3 className="certificate-programs">{certificatePrograms}</h3>
          <div className="experience-global-learning-container">
            <p className="experience-global-learning">
              {experienceGlobalLearning}
            </p>
            <p className="participate-in-projects">
              {participateInProjectsAndB}
            </p>
            <p className="networks-globally">{networksGlobally}</p>
          </div>
        </div>
        <div className="img-overlay">
          <div className="link-explore">Explore all</div>
          <div className="symbol1"></div>
        </div>
      </div>
      <div className="certificates" style={cERTIFICATESStyle}>
        {cERTIFICATES}
      </div>
    </div>
  );
};

export default Programs;
