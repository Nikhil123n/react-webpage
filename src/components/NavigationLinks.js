import "./NavigationLinks.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'


const NavigationLinks = () => {
  return (
    <header className="navigation-links">
      <div className="button-link">
        <img className="logo-icon" loading="eager" alt="" src="/logo@2x.png" />
        <div className="nav-btn-1">
          <div className="item" />
          <div className="our-offerings">Our offerings</div>
          <FontAwesomeIcon icon={faAngleDown} className="angle-right-icon" swapOpacity />                      
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
            <button className="button" >
              <div className="lets-talk">Let’s Talk</div>
              <FontAwesomeIcon icon={faAngleRight} className="angle-right-icon" swapOpacity />            
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationLinks;
