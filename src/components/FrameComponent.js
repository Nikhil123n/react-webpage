import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="frame-parent">
      <div className="students-love-frame-parent">
        <div className="students-love-frame">
          <h1 className="students-and-alumni">
            Students and alumni love our programs
          </h1>
          <div className="what-people-are">What people are saying about us</div>
        </div>
        <div className="divfusion-layout-column2">
          <div className="divfusion-separator-border" />
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="frame-group">
          <div className="join-the-changemakers-wrapper">
            <div className="join-the-changemakers">Join the ChangeMakers</div>
          </div>
          <div className="join-form-frame">
            <div className="input">
              <input
                className="enter-your-email-id"
                placeholder="Enter your Email-Id"
                type="text"
              />
            </div>
            <button className="button1">
              <div className="submit">Submit</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
