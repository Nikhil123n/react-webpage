import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavigationLinks from "../components/NavigationLinks";;
import Footer from "../components/Footer";

import "./faq.css";

const FAQ = () => {
const navigate = useNavigate();

const onButtonContainerClick = useCallback(() => {
    navigate("/stepper-1");
}, [navigate]);

  return (
    <div className="home">
      <section className="top-level">
        <div className="figma-logo">
          <NavigationLinks />
        </div>
      </section>
      <div className="faq-container">
        <h1 class="main-Heading">FAQ</h1>

        <div className="faq-section" id="learn-with-leaders">
            <h2 className="sub-heading">What is Learn with Leaders?</h2>
            <p className="paragraph">
            Learn with Leaders is a global education initiative that aims to empower school students worldwide. By connecting them with esteemed faculty, accomplished alumni, and experienced student mentors from IVY League universities and leading corporations, we provide unparalleled learning and mentoring opportunities, in diverse fields from Research, Law, Finances, Medical, Leadership, Communication and even social impact.
            </p>
        </div>
        <div className="faq-section">
            <h2 className="sub-heading">What topics does LwL cover?</h2>
            <p className="paragraph">
            LwL has over 40 programs covering various topics, which are broadly classified into business, science and technology, leadership, social impact, and communication.
            </p>
        </div>
        <div className="faq-section">
            <button className="button" onClick={onButtonContainerClick}>
            <div className="get-started">Get Started</div> 
            <FontAwesomeIcon icon={faAngleRight} className="angle-right-icon" swapOpacity size="lg" />            
            </button>
        </div>
        <div className="faq-section" id="how-to-apply">
            <h2 className="sub-heading">How to apply for a program?</h2>
            <p className="paragraph">
            To apply for our program, go to your interested program page and click on the ‘Apply Now’ tab. You will be redirected to our Google Form page. You are required to fill out the entire Google form carefully and provide honest answers. Once you have filled the form, proofread it to rectify any errors. Lastly, click on the ‘Submit’ tab to submit your application.
            </p>
            <p className="paragraph">
            Please Note: You will not be allowed to make any changes once the application is submitted.
            </p>
        </div>
        <div className="faq-section">
            <h2 className="sub-heading">How will I know if I am selected for the program?</h2>
            <p className="paragraph">
            Once you have applied to the program, the LwL team will connect with you via email. You will be notified about your shortlist/rejection for the interview round and of your selection/rejection for the program via email communication. Meanwhile, you can send us your queries at 
            <span className="paragraph color-yellow">
                team@learnwithleaders.com
            </span>
            </p>
            <p className="paragraph">
            Pro Tip: Don’t forget to check your spam.
            </p>
        </div>
        <div className="faq-section">
            <h2 className="sub-heading">How do I pay for the program?</h2>
            <p className="paragraph">
            Upon your selection for the program, our team will send you an email with the payment details. You can either pay using a credit card through our stripe payment gateway or bank transfer the amount. Your selection for the program will only be confirmed once you have made the payment within the stipulated time.
            </p>
            <p className="paragraph">
            Please Note: The fees paid are non-refundable.
            </p>
        </div>
        <div className="faq-section">
            <h2 className="sub-heading">Is there aid available?</h2>
            <p className="paragraph">
            LwL often offers a considerable ‘Early Bird’ discount for most of our programs. Besides that, we also provide scholarships to students based on their performance in the interview round. If you wish to apply for a scholarship for a particular program, we request you to send us an email informing us about the same at  <span className="paragraph color-yellow">team@learnwithleaders.com</span>  before the interview round.
            </p>
        </div>
        <div className="faq-section">
            <h2 className="sub-heading">How to participate in a competition?</h2>
            <p className="paragraph">
            LwL has a list of exciting competitions. Please check the ‘Competitions’ tab under ‘Our Offerings’ on our home page or click here (hyperlink it) to view the list. To participate in the competition, click on the ‘Register Now’ or ‘Apply Now’ tab on the competition page. You will be redirected to our Google Form page. Please fill out the complete Google Form, proofread it, and then click on the ‘Submit’ tab at the bottom of the form. Once we receive your application, you will be notified of the further process
            </p>
            <p className="paragraph">
            Please Note: You will not be allowed to make any changes once the application is submitted.
            </p>
        </div>
        <div className="faq-section">
            <h2 className="sub-heading">What if I miss a class?</h2>
            <p className="paragraph">
            LwL programs are generally conducted over the weekends or during summer/spring breaks so that you can leverage our sessions to the maximum. However, if, due to some reason, you have to miss a class, then you can send us an email regarding the same. All our sessions are recorded, and we can share the video of the session with you so you can come prepared for your next class. However, we encourage our students to attend all classes for better understanding and peer and mentor interactions.
            </p>
        </div>
        <div className="faq-section">
            <h2 className="sub-heading">How can I connect with the mentors?</h2>
            <p className="paragraph">
            Our mentors are here to guide you with their expertise. Hence our students are often provided with email ids of the program mentors for direct communication and queries that may arise during and/or after the program.
            </p>
        </div>
        <div className="faq-section" id="selection-process">
            <h2 className="sub-heading">What is the selection process?</h2>
            <p className="paragraph">
            You will have to submit an application by clicking on the ‘Apply Now’ tab. Shortlisted students then undergo an interview round before the final cohort is selected. Each of our programs is limited to a small cohort of 15-20 participants for a focused-group approach. Hence, we encourage early applications from our students.
            </p>
        </div>
        <div className="faq-section">
            <h2 className="sub-heading">Who awards the certificates?</h2>
            <p className="paragraph">
            Learn with Leaders awards participation certificates to all our students. In selected programs, students may also receive certifications from our partner organisations. We also award winners’ certificates and other special certificates as per the program requirements. Please check the ‘Awards & Recognition’ tab on your interested program page for further details.
            </p>
        </div>
        <div className="faq-section" id="contact-lwl">
            <h2 className="sub-heading">How do I contact LwL?</h2>
            <p className="paragraph">
            LwL has offices in Delhi, India, and Singapore. You can easily connect with us via email at team@learnwithleaders.com.
            </p>
            <p className="paragraph">
            You can also ping us on WhatsApp or call us at +91 8448973362.
            </p>
        </div>
       </div>
      <Footer />
    </div>
  );
};

export default FAQ;
