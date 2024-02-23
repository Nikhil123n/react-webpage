import { useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./StepperForm2.css";
import styled from 'styled-components';

const StepperForm2 = () => {  
  const navigate = useNavigate();
  const location = useLocation();
  const programRegFormData = location.state;

  const [q6, setQ6] = useState();

  // console.log(programRegFormData)
  // console.log({programRegFormData, q6})


  const onLogoButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPreviousButtonClick = useCallback(() => {
    navigate("/stepper-1");
  }, [navigate]);
  
  
  const onNextButtonClick = useCallback(() => {
    if (q6 !== undefined && q6?.trim() !== '') {      
      const updatedFormData = {
        ...programRegFormData,
        "What is the name of your school?": q6
      };
      navigate("/stepper-3", {
        state: updatedFormData
      });
    } else {      
      alert("Please answer all questions before proceeding.");
    }
  }, [navigate, q6, programRegFormData]);

  
  return (
    <div className="stepper-form-p-1">
      <header className="search-user">
        <img className="logo-icon2" loading="eager" alt="" src="/logo@2x.png" onClick={onLogoButtonClick} />
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
            <div className="connector-l-1 wcolor" />
            <div className="connector-l-2" />
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
          <div className="stepper-c-3">
            <img
              className="vuesaxlineartick-circle-icon2"
              alt=""
              src="/vuesaxlineartickcircle-1.svg"
            />
            <div className="personal-questions">Personal Questions</div>
          </div>
        </div>
        </div>
        <section className="form-grp-1">

          {/* <Frameemail /> */}
          <div className="frameemail3">
            <div className="text-desc10">
              <div className="no-text10">
                <div className="div9">1.</div>
                <div className="c-111">
                  <div className="where-should-we1">
                    What is the name of your school? This question
                    is required.*
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-1-parent5">
              <div className="spacer-112" />
              <div className="opt-311">
                <input className="email2" onChange={e=> setQ6(e.target.value)} value={q6} placeholder="School Name" type="text" />                
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
                <div className="next" onClick={onNextButtonClick}>Next</div>
              </button>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default StepperForm2;