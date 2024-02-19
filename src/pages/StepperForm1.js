import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StepperForm1.css";
import styled from 'styled-components';




const RadioButton = styled.input`
  opacity: 0;
  position: fixed;
  width: 0;
`;

const Label = styled.label`
  display: inline-block;
  // background-color: #ddd;  
  font-family: var(--font-inter);
  font-size: var(--font-size-base);
  width: 6rem;    
  cursor: pointer;  
  height: 50.37px;
  width: 100%;  
  color: #ddd;
  padding: var(--padding-sm) var(--padding-base) var(--padding-mini);

  &:hover {
    background-color: #888;
    border: 0.1px solid #ddd;
    // border-color: white;
  }
`;

const StepperForm1 = () => {    
  const navigate = useNavigate();
  const [q1, setQ1] = useState();
  const [checked, setChecked] = useState("Business");
  console.log(q1);

  
  const onPreviousButtonClick = useCallback(() => {
    navigate("/");
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
            <div className="connector-l-1" />
            <div className="connector-l-2" />
            <div className="stepper-c-2">
              <img
                className="vuesaxlineartick-circle-icon1"
                alt=""
                src="/vuesaxlineartickcircle-1.svg"
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

          {/* <Program Recommendation /> */}
          <div className="frameemail">
            <div className="textdesc">
              <div className="financial-dynamic-presentation">1.</div>
              <div className="where-should-we">
                Where should we email your program recommendations? This question is
                required.*
              </div>
            </div>
            <div className="opt-frame">
              <div className="spacer-18" />
              
              <div className="email-input">
                <div className="opt-5">
                  <RadioButton
                    type="radio"
                    id="lang-1"
                    name="q1"
                    value="A. Grade 5-7"             
                    onChange={e=> setQ1(e.target.value)}                        
                  />
                  <Label htmlFor="lang-1" className="label-1" >A. Grade 5-7</Label>
                </div>
              </div>
              <div className="grade-opt-c">
                <div className="opt-6">
                  <RadioButton
                    type="radio"
                    id="lang-2"
                    name="q1"
                    value="B. Grade 8-10"
                    onChange={e=> setQ1(e.target.value)}   
                  />
                  <Label htmlFor="lang-2" className="label-2">B. Grade 8-10</Label>
                </div>
              </div>
              <div className="email-input1">
                <div className="opt-7">
                  <RadioButton
                    type="radio"
                    id="lang-3"
                    name="q1"
                    value="C. Grade 11-12"
                    onChange={e=> setQ1(e.target.value)}   
                  />
                  <Label htmlFor="lang-3" className="label-3">C. Grade 11-12</Label>
                </div>
              </div>
              <div className="email-input2">
                <div className="opt-8">
                    <RadioButton
                      type="radio"
                      id="lang-4"
                      name="q1"
                      value="D. College student"
                      onChange={e=> setQ1(e.target.value)}   
                    />
                    <Label htmlFor="lang-4" className="label-4">D. College student</Label>
                </div>
              </div>
            </div>
          </div>
          
          {/* <Field of Interest /> */}
          <div className="frameemail1">
            
              <div className="parent">
                <div className="div8">2.</div>
                <div className="socialimpact">
                  <div className="what-fields-interest">
                    What fields interest you most? This question is required.*
                  </div>
                  <div className="choose-all-that">Choose all that apply.</div>
                </div>
              </div>
              <div className="opt-group-a-parent">
                <div className="opt-group-a">
                  <div className="spacer-19" />
                  <div className="opt-1">
                    <RadioButton
                      type="radio"
                      id="interest-1"
                      value="Business"                                     
                    />
                    <Label htmlFor="interest-1" className="form-cheked">A. Business</Label>
                  </div>
                </div>
                <div className="opt-2">
                  <div className="b-science-and">
                    <RadioButton
                        type="radio"
                        id="interest-2"
                        value="B. Science and Technology"                                     
                      />
                      <Label htmlFor="interest-2" >B. Science and Technology</Label>
                  </div>
                </div>
                <div className="opt-38">
                  <div className="educational-questions1">
                    <div className="c-leadership">
                      <RadioButton
                          type="radio"
                          id="interest-3"
                          value="C. Leadership"                                     
                        />
                        <Label htmlFor="interest-3" >C. Leadership</Label>
                    </div>
                  </div>
                </div>
                <div className="opt-4">
                    <div className="d-social-impact-wrapper">
                        <div className="d-social-impact">
                          <RadioButton
                            type="radio"
                            id="interest-4"
                            value="D. Social Impact"                                     
                          />
                          <Label htmlFor="interest-4" >D. Social Impact</Label>
                        </div>
                    </div>
                </div>
                <div className="opt-51">
                    <div className="e-communication-wrapper">
                        <div className="e-communication">
                          <RadioButton
                              type="radio"
                              id="interest-5"
                              value="E. Communication"                                     
                            />
                            <Label htmlFor="interest-5" >E. Communication</Label>
                        </div>
                    </div>
                </div>
              </div>            
            
          </div>

          {/* <Start a program /> */}
          <div className="frameemail1">
            
              <div className="parent">
                <div className="div8">3.</div>
                <div className="socialimpact">
                  <div className="what-fields-interest">
                    When would you be ready to start a program? This question is required.*
                  </div>                  
                </div>
              </div>
              <div className="opt-group-a-parent">
                <div className="opt-group-a">
                  <div className="spacer-19" />
                  <div className="opt-1">
                    <RadioButton
                      type="radio"
                      id="program-1"
                      value="A. Immediately"                                     
                    />
                    <Label htmlFor="program-1" >A. Immediately</Label>
                  </div>
                </div>
                <div className="opt-2">
                  <div className="b-science-and">
                    <RadioButton
                        type="radio"
                        id="program-2"
                        value="B. In the next 2-3 months"                                     
                      />
                      <Label htmlFor="program-2" >B. In the next 2-3 months</Label>
                  </div>
                </div>
                <div className="opt-39">
                  <div className="c-during-summer">
                  <RadioButton
                          type="radio"
                          id="program-3"
                          value="C. During summer or winter break"                                     
                        />
                        <Label htmlFor="program-3" >C. During summer or winter break</Label>
                  </div>
                </div>
                <div className="opt-41">
                  <div className="d-havent-decided">
                          <RadioButton
                            type="radio"
                            id="program-4"
                            value="D. Haven’t decided yet"                                     
                          />
                          <Label htmlFor="program-4" >D. Haven’t decided yet</Label>
                    </div>                    
                </div>                
              </div>            
            
          </div>          

          {/* <FrameComponent1 /> */}
          <div className="frameemail1">
            
            <div className="parent">
              <div className="div8">4.</div>
              <div className="socialimpact">
                <div className="what-fields-interest">
                  What would you like to gain from a program?
                </div>
                <div className="choose-all-that">Choose all that apply.</div>
              </div>
            </div>
            <div className="opt-group-a-parent">
              <div className="opt-group-a">
                <div className="spacer-19" />
                <div className="opt-1">
                  <RadioButton
                    type="radio"
                    id="gain-1"
                    value="A. Immediately"                                     
                  />
                  <Label htmlFor="gain-1" >A. Immediately</Label>
                </div>
              </div>
              <div className="opt-2">
                <div className="b-science-and">
                  <RadioButton
                      type="radio"
                      id="gain-2"
                      value="B. In the next 2-3 months"                                     
                    />
                    <Label htmlFor="gain-2" >B. In the next 2-3 months</Label>
                </div>
              </div>
              <div className="opt-39">
                <div className="c-during-summer">
                <RadioButton
                        type="radio"
                        id="gain-3"
                        value="C. During summer or winter break"                                     
                      />
                      <Label htmlFor="gain-3" >C. During summer or winter break</Label>
                </div>
              </div>
              <div className="opt-41">
                <div className="d-havent-decided">
                        <RadioButton
                          type="radio"
                          id="gain-4"
                          value="D. Haven’t decided yet"                                     
                        />
                        <Label htmlFor="gain-4" >D. Haven’t decided yet</Label>
                  </div>                    
              </div>                
            </div>            
          
        </div>  


          <div className="text-desc-parent3">
            <div className="text-desc9">
              <div className="no-text9">
                <div className="gain-desc">4.</div>
                <div className="c-19">
                  <div className="what-would-you">
                    What would you like to gain from a program?
                  </div>
                  <div className="choose-all-that1">Choose all that apply</div>
                </div>
              </div>
            </div>

            {/* <div className="opt-group-a-parent">
                <div className="opt-2">
                  <div className="b-science-and">A. Earning a certificate from an Ivy League organization</div>
                </div>
                <div className="opt-2">
                  <div className="b-science-and">B. Exploring a future career field with experts</div>
                </div>
                <div className="opt-38">
                  <div className="educational-questions1">
                    <div className="c-leadership">C. Learning new skills and knowledge</div>
                  </div>
                </div>
                <div className="opt-4">
                    <div className="d-social-impact-wrapper">
                        <div className="d-social-impact">D. Building my profile for college and career</div>
                    </div>
                </div>             
              </div> */}


            <div className="opt-grp-1">
              <div className="spacer-111" />
              <div className="c-110">
                <div className="opt-12">
                  <div className="a-earning-a">
                  <RadioButton
                      type="radio"
                      id="program-1"
                      value="A. Earning a certificate from an Ivy League organization"                                     
                    />
                    <Label htmlFor="program-1" >A. Earning a certificate from an Ivy League organization</Label>                    
                  </div>
                </div>
                <div className="opt-22">
                  <div className="b-exploring-a">
                  <RadioButton
                      type="radio"
                      id="program-1"
                      value="B. Exploring a future career field with experts"                                     
                    />
                    <Label htmlFor="program-1" >B. Exploring a future career field with experts</Label>                    
                    
                  </div>
                </div>
                <div className="opt-310">
                  <div className="c-learning-new">
                  <RadioButton
                      type="radio"
                      id="program-1"
                      value="C. Learning new skills and knowledge"                                     
                    />
                    <Label htmlFor="program-1" >C. Learning new skills and knowledge</Label>  
                  </div>
                </div>
                <div className="opt-42">
                  <div className="d-building-my">
                  <RadioButton
                      type="radio"
                      id="program-1"
                      value="D. Building my profile for college and career"                                     
                    />
                    <Label htmlFor="program-1" >D. Building my profile for college and career</Label>  
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <Frameemail /> */}
          <div className="frameemail3">
            <div className="text-desc10">
              <div className="no-text10">
                <div className="div9">5.</div>
                <div className="c-111">
                  <div className="where-should-we1">
                    Where should we email your program recommendations? This question
                    is required.*
                  </div>
                  <div className="youll-receive-an">
                    You'll receive an email with our upcoming programs that might be a
                    fit for you.
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-1-parent5">
              <div className="spacer-112" />
              <div className="opt-311">
                <input className="email2" placeholder="Email" type="text" />                
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

export default StepperForm1;
