import "./frame-component.css";

const FrameComponent = ({
  studentInfo,
  studentMobileNumber,
  india,
  chevronDown,
}) => {
  return (
    <div className="text-desc-parent">
      <div className="text-desc">
        <div className="no-text">
          <div className="student-info">{studentInfo}</div>
          <div className="column-1">
            <div className="student-mobile-number">{studentMobileNumber}</div>
          </div>
        </div>
      </div>
      <div className="spacer-1-parent">
        <div className="spacer-1" />
        <div className="opt-3">
          <div className="india-parent">
            <img className="india-icon" alt="" src={india} />
            <img className="chevron-down-icon1" alt="" src={chevronDown} />
          </div>          
          <input className="mobile-no" placeholder="Mobile no" type="number" min="1000000000" max="999999999999"/>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
