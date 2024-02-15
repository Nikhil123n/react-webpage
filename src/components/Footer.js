import "./Footer.css";

const Footer = () => {
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
              <div className="gallery1">Gallery</div>
              <div className="blog-media">{`Blog & Media`}</div>
              <div className="contact-us">Contact us</div>
              <div className="about-us">About us</div>
            </div>
          </div>
          <div className="link-faqs-parent">
            <div className="link-faqs">FAQ’s</div>
            <div className="what-is-learn-with-leaders-parent">
              <div className="what-is-learn">What is Learn with Leaders?</div>
              <div className="how-to-apply">How to apply for a program?</div>
              <div className="what-is-the">What is the selection process?</div>
              <div className="how-do-i">How do I contact LwL?</div>
            </div>
          </div>
        </div>
      </div>
      <div className="disclaimer-text">
        <div className="symbols-frame">
          <h3 className="symbol2"></h3>
          <h3 className="symbol3"></h3>
          <h3 className="symbol4"></h3>
          <h3 className="symbol5"></h3>
        </div>
        <div className="learnwithleaders-all-rights">
          © 2022 Learnwithleaders. All rights reserved
        </div>
      </div>
      <div className="disclaimer-all-the-container">
        <span>
          <p className="disclaimer-all-the">
            Disclaimer: All the courses and programs provided on our website are
            not provided by Harvard or any other university. All the courses and
            programs are
          </p>
          <p className="created-and-organized">
            created and organized by student clubs and student organizations of
            various universities. The student clubs and student organisations
            are run and
          </p>
          <p className="operated-independently-by">
            operated independently by undergraduates of universities. We, Learn
            with Leaders, are the partner platform of the student clubs and
            student
          </p>
          <p className="organisations-amplifying-the">
            organisations amplifying the remarkable autonomy and responsibility
            shouldered by these driven clubs and organisations, promoting the
            significance
          </p>
          <p className="and-effectiveness-of">
            and effectiveness of these impactful programs.
          </p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
