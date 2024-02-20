import { useMemo } from "react";
import React from "react";

import "./Programs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

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
  url,
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
              {experienceGlobalLearning}{participateInProjectsAndB}{networksGlobally}</p>
          </div>
        </div>
        <a className="img-overlay" href={url} style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <div className="link-explore">Explore all</div>
          <div className="symbol1">
            <FontAwesomeIcon icon={faArrowRightLong} className="angle-right-icon" swapOpacity />            
          </div>
        </a>
      </div>
      <div className="certificates" style={cERTIFICATESStyle}>
        {cERTIFICATES}
      </div>
    </div>
  );
};

export default Programs;
