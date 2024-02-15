import "./NavigationLinks.css";

const NavigationLinks = () => {
  return (
    <header className="navigation-links">
      <div className="button-link">
        <img className="logo-icon" loading="eager" alt="" src="/logo@2x.png" />
        <div className="nav-btn-1">
          <div className="item" />
          <div className="our-offerings">Our offerings</div>
          <img className="chevron-down-icon" alt="" src="/chevrondown@2x.png" />
        </div>
      </div>
      <div className="event-image-overlay">
        <div className="container-frame">
          <div className="main-content-frame">
            <input
              className="search-anything"
              placeholder="Search anything..."
              type="text"
            />
            <img className="search-icon" alt="" src="/search@2x.png" />
          </div>
          <div className="link">
            <div className="lets-talk">Let’s Talk</div>
            <div className="symbol"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationLinks;
