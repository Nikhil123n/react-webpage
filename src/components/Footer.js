import "./Footer.css";
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faTwitter, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();
  const onButtonClick = (sectionId) => {
    if (sectionId === 'faq') {
      navigate(`/faq`);
    } else {
      navigate(`/faq#${sectionId}`);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-frame-parent">
          <div className="footer-frame">
            <div className="reach-us1">Reach us</div>
            <div className="link-teamlearnwithleadersc">
              team@learnwithleaders.com
            </div>
            <div className="singapore">Singapore</div>
            <div className="india">India</div>
          </div>
          <div className="quick-links-group">
            <div className="quick-links1">Quick Links</div>
            <div className="quick-links-menu">
              <div className="gallery1"> 
                <a href={'/gallery'} style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}>
                  Gallery
                </a>                
              </div>
              <div className="blog-media">
                <a href={'/blog-media'} style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}>
                  {`Blog & Media`}              
                </a>
              </div>
              <div className="contact-us">
              <a href={'/contact-us'} style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}>
                Contact us </a>
              </div>
              <div className="about-us">
                <a href={'/about-us'} style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}>  
                About us</a>
              </div>
            </div>
          </div>
          <div className="link-faqs-parent">
            <div className="link-faqs" onClick={ () => onButtonClick('faq')}>FAQ’s</div>
            <div className="what-is-learn-with-leaders-parent">
              <div className="what-is-learn" onClick={ () => onButtonClick('learn-with-leaders')}>What is Learn with Leaders?</div>
              <div className="how-to-apply" onClick={ () => onButtonClick('how-to-apply')}>How to apply for a program?</div>
              <div className="what-is-the" onClick={ () => onButtonClick('selection-process')}>What is the selection process?</div>
              <div className="how-do-i" onClick={ () => onButtonClick('contact-lwl')}>How do I contact LwL?</div>
            </div>
          </div>
        </div>
      </div>
      <div className="disclaimer-text">
        <div className="symbols-frame">
          <a href="https://www.facebook.com/learnwithleaders" target="_blank"> <FontAwesomeIcon icon={faFacebookF} /> </a>
          <a href="https://twitter.com/LearnLeaders" target="_blank"> <FontAwesomeIcon icon={faTwitter} /> </a>
          <a href="https://www.instagram.com/learnwithleaders/" target="_blank"> <FontAwesomeIcon icon={faInstagram} /> </a>
          <a href="https://www.linkedin.com/company/learn-with-leaders/" target="_blank"> <FontAwesomeIcon icon={faLinkedinIn} /> </a>       
        </div>
        <div className="learnwithleaders-all-rights">
          © 2024 Learnwithleaders. All rights reserved
        </div>
      </div>
      <div className="disclaimer-all-the-container">
        <span>
          <p className="disclaimer-all-the">
            Disclaimer: All the courses and programs provided on our website are
            not provided by Harvard or any other university. All the courses and
            programs are          
            created and organized by student clubs and student organizations of
            various universities. The student clubs and student organisations
            are run and          
            operated independently by undergraduates of universities. We, Learn
            with Leaders, are the partner platform of the student clubs and
            student       
            organisations amplifying the remarkable autonomy and responsibility
            shouldered by these driven clubs and organisations, promoting the
            significance        
            and effectiveness of these impactful programs.
          </p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
