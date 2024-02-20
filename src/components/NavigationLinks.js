import "./NavigationLinks.css";
import {React, useState, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CDropdown, CDropdownToggle, CDropdownMenu,CDropdownItem, CPopover, CButton } from "@coreui/react";

const NavigationLinks = () => {
  const navigate = useNavigate();
  const [popoverVisible, setPopoverVisible] = useState(false);
  const popoverStyle = {    
    'background-color': '#121212',
    '--cui-popover-max-width': 'none',
    '--bs-popover-max-width': 'none',
    '--cui-popover-border': '1px solid #343434!important',      
    '--bs-popover-border-color': '#343434',
    '--cui-popover-border-radius': '15px',
    '--bs-popover-bg': '#121212'
  };
  const popoverStyles = {
    marginTop: '2% !important',
    border: '1px solid #343434 !important',
    borderRadius: '15px',
  };
  const popoverButtonStyle = {
    '--bs-btn-color': 'white',
    '--bs-btn-font-size': '16px',
    '--bs-btn-font-weight': '400',
    '--bs-btn-border-color': '#343434',
    '--bs-btn-hover-border-color': '#F1B537'
  }

  const menuItems = [
    {
      heading: "Certificate Programs",
      description: "Build skills, global networks & success mindset.",
      url: "/certificate",
      src: "/rightarrowsvg-3.svg"
    },
    {
      heading: "Competitions",
      description: "Compete with the best minds in the world.",
      url: "/competition",
      src: "/rightarrowsvg-3.svg"
    },
    {
      heading: "Fellowships",
      description: "Work on impactful projects as future leaders.",
      url: "/fellowship",
      src: "/rightarrowsvg-3.svg"
    },
    {
      heading: "Conferences",
      description: "Participate in global social/political phenomena.",
      url: "/conference",
      src: "/rightarrowsvg-3.svg"
    },
    {
      heading: "Internships",
      description: "Learn and experience the industry hands-on.",
      url: "/internship",
      src: "/rightarrowsvg-3.svg"
    },
    {
      heading: "Ivy Masterclasses",
      description: "Explore diverse fields with global peers and Ivy League mentors.",
      url: "/masterclass",
      src: "/rightarrowsvg-3.svg"
    }
  ];


  const renderMenu = () => {
    return (
      <div className="popover-content">
        {menuItems.map((item, index) => (
          <a key={index} 
          href={item.url} 
          style={{ textDecoration: 'none', cursor: 'pointer' }}
          className="menu-item"> 
          <div >
            <h4>{item.heading}</h4>
            <p>{item.description}</p>
            <img  alt="" src={item.src} /> 
          </div>
          </a>
        ))}
      </div>
    );
  };

  const handleLogoClick =  useCallback(() => {
    navigate("/");
  }, [navigate]);
  const handleButtonClick = () => {    
    window.open('https://calendly.com/learnwithleaders?utm_source=DWS&utm_medium=DWS', '_blank');
  };
  
  
  return (
    <header className="navigation-links">
      <div className="button-link">
        <img className="logo-icon" loading="eager" alt="" src="/logo@2x.png"  onClick={handleLogoClick}/>

        <CPopover
          placement="bottom-start"
          content={renderMenu()}
          size="lg"
          style={popoverStyle}          
          // title="Menu"
          trigger={['click', 'focus']}
          visible={popoverVisible}
          onVisibleChange={setPopoverVisible}
        >
          <CButton color="transparent" style={popoverButtonStyle} >Our offerings 
              <FontAwesomeIcon icon={faAngleDown} className="angle-right-icon" swapOpacity />                      
          </CButton>
        </CPopover>

        {/* <div className="nav-btn-1">
          <div className="item" />
          <div className="our-offerings">Our offerings</div>
          <FontAwesomeIcon icon={faAngleDown} className="angle-right-icon" swapOpacity />                      
        </div> */}
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
