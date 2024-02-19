import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./StepperForm3.css";
import styled from 'styled-components';

const StepperForm3 = () => {  
  const navigate = useNavigate();

  const onPreviousButtonClick = useCallback(() => {
    navigate("/stepper-2");
  }, [navigate]);

  return (
    <div className="stepper-form-p-1">
      <header className="search-user">
        <img className="logo-icon2" loading="eager" alt="" src="/logo@2x.png" onClick={onPreviousButtonClick} />
      </header>
      <main className="logoframe">
        <div className="registrationform">
          <h1 className="registration-form">Registration form</h1>
          <div className="stepper-content-grp-1">

          {/* Stepper Container Group */}
          <div className="stepper-c-1">
            <img
              className="vuesaxlineartick-circle-icon"
              loading="eager"
              alt=""
              src="/vuesaxlineartickcircle.svg"
            />
            <div className="basic-questions">Basic Questions</div>
          </div>

          <div className="formgrp">
            <div className="connector-l-1 color" />
            <div className="connector-l-2 color" />
            <div className="stepper-c-1">
            <img
              className="vuesaxlineartick-circle-icon"
              loading="eager"
              alt=""
              src="/vuesaxlineartickcircle.svg"
            />
              <div className="educational-questions">Educational Questions</div>
            </div>
          </div>
          <div className="stepper-c-1">
            <img
              className="vuesaxlineartick-circle-icon"
              loading="eager"
              alt=""
              src="/vuesaxlineartickcircle.svg"
            />
            <div className="personal-questions">Personal Questions</div>
          </div>
        </div>
        </div>
        <section className="form-grp-1">
        <div className="frameemail3">
            <div className="text-desc10">
              <div className="no-text10">
                <div className="div9">1.</div>
                <div className="c-111">
                  <div className="where-should-we1">
                    What is your name? This question
                    is required.*
                  </div>
                  <div className="youll-receive-an">
                    Please write your name.
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-1-parent5">
              <div className="spacer-112" />
              <div className="opt-311">
                <input className="email2" placeholder="Full Name" type="text" />                
              </div>
            </div>
          </div>

          <div className="frameemail3">
            <div className="text-desc10">
              <div className="no-text10">
                <div className="div9">2.</div>
                <div className="c-111">
                  <div className="where-should-we1">
                    What country do you live in? This question
                    is required.*
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-1-parent5">
              <div className="spacer-112" />
              <div className="opt-311">
                <input className="email2" placeholder="Enter Country" type="text" />                
              </div>
            </div>
          </div>

          <div className="frameemail3">
            <div className="text-desc10">
              <div className="no-text10">
                <div className="div9">3.</div>
                <div className="c-111">
                  <div className="where-should-we1">
                    Optional What is your Mobile Number?
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-1-parent5">
              <div className="spacer-112" />
              <div className="opt-311">
                <input className="email2" placeholder="Mobile No" type="number" />                
              </div>
            </div>
          </div>

          <div className="frameemail3">
            <div className="text-desc10">
              <div className="no-text10">
                <div className="div9">4.</div>
                <div className="c-111">
                  <div className="where-should-we1">
                  Optional Do you want us to send your parents information about our programs?If so, what is their email
                  </div>
                  <div className="youll-receive-an">
                    They'll receive an email about Learn with Leaders and a registration link.
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-1-parent5">
              <div className="spacer-112" />
              <div className="opt-311">
                <input className="email2" placeholder="Email" type="email" />                
              </div>
            </div>
          </div>
          <div className="frameemail3">
            <div className="text-desc10">
              <div className="no-text10">
                <div className="div9">5.</div>
                <div className="c-111">
                  <div className="where-should-we1">
                  Optional Do you have any questions about our programs?
                  </div>
                  <div className="youll-receive-an">
                    Write them here and we'll get back to you via email.
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-1-parent5 w-100">
              <div className="spacer-112" />
              <div className="opt-311 h-100">
                <textarea className="email2 h-100" placeholder="Type your answer" />               
              </div>
            </div>
          </div>

          {/* <FutureCareerFields /> */}
          <div className="future-career-fields">
            <div className="skills-learning">
              <button className="submit-btn1" onClick={onPreviousButtonClick}>
                <div className="previous">Previous</div>
              </button>
              <button className="submit-btn2">
                <div className="next">Next</div>
              </button>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default StepperForm3;
