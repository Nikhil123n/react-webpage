import "./NavigationLinks.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
// import '@coreui/coreui/dist/css/coreui.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { CDropdown, CDropdownToggle, CDropdownMenu,CDropdownItem, CPopover, CButton } from "@coreui/react";

const NavigationLinks = () => {

  const handleButtonClick = () => {    
    window.open('https://calendly.com/learnwithleaders?utm_source=DWS&utm_medium=DWS', '_blank');
  };
  
  return (
    <header className="navigation-links">
      <div className="button-link">
        <img className="logo-icon" loading="eager" alt="" src="/logo@2x.png" />

        {/* <CDropdown className="drop-down-navbar">
          <CDropdownToggle color="transparent" className="drop-down-text" >Our offerings</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      
        <CPopover
          title="Certificate Programs"
          className="popover-btn"
          content="Build skills, global networks & success mindset."
          placement="bottom"
        >
          <CButton color="transparent">Our offerings</CButton>
        </CPopover> */}


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
            <button className="button" onClick={handleButtonClick}>
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
