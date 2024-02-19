import { useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FrameComponent from "../components/frame-component";
import Input from "../components/input";
import "./get-started-form-default-v.css";
import axios from "axios";

const GetStartedFormDefaultV = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const eventData = location.state;

  const onPreviousButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const [post, setPost] = useState({
    title: '',
    body: ''
  })
  const handleInput = (event) => {
    setPost({...post, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', {post})
    .then(response => console.log(response))
    .catch (err => console.log(err))
  }




  return (
    <div className="get-started-form-default-v-2">
      <header className="div-headermaincontent">
        <img className="logo-icon" loading="eager" alt="" src="/logo@2x.png" onClick={onPreviousButtonClick} />
      </header>
      <section className="artificial-intelligence-mach-parent">
      <h2 className="artificial-intelligence">{eventData}</h2>
        
        <form onSubmit={handleSubmit}>
        <div className="form-grp-2">
      
      <div className="input-1-2">
        <div className="name-frame">
          <div className="text-desc3">
            <div className="no-text3">
              <div className="empty-text">1.</div>
              <div className="column-13">
                <div className="name">Name</div>
                <div className="please-write-your">
                  Please write your full name
                </div>
              </div>
            </div>
          </div>
          <div className="school-opt-frame">
            <div className="frame-div">
              <div className="spacer-13" />
              <div className="opt-33">
                <input
                  className="full-name"
                  placeholder="Full name"
                  type="text"
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>         
        </div>
        
        <div className="parents-guardian-email-address">
          <div className="text-desc4">
            <div className="no-text4">
              <div className="city-text">2.</div>
              <div className="column-14">
                <div className="student-email-address">
                  Student Email Address*
                </div>
              </div>
            </div>
          </div>
          <div className="email-opt-frame">
            <div className="spacer-14" />
            <div className="opt-34">
              <input className="email" placeholder="Email" onChange={handleInput} type="text" />
              
            </div>
          </div>
        </div>
      </div>
      <div className="input-3-4">
        <FrameComponent
          studentInfo="3."
          studentMobileNumber="Student Mobile Number*"
          india="/india@2x.png"
          chevronDown="/chevrondown@2x.png"
        />
        <div className="text-desc-parent1">
          <div className="text-desc5">
            <div className="no-text5">
              <div className="logo-frame">4</div>
              <div className="column-15">
                <div className="city">City*</div>
              </div>
            </div>
          </div>
          <div className="spacer-1-parent1">
            <div className="spacer-15" />
            <div className="opt-35">              
              <input className="select-your-city" placeholder="Select your city" type="text" />
            </div>
          </div>
        </div>
      </div>
      <Input
        prop="5."
        country="Country*"
        selectYourCountry="Select your country"
        classname ="select-your-country"
        chevronDown="/chevrondown-1@2x.png"
        prop1="6."
        schoolName="School Name*"
        schoolName1="School name"
      />
      <Input
        prop="7."
        country="Currently studying in Class*"
        selectYourCountry="Select your class"
        classname="select-your-class"
        chevronDown="/chevrondown-3.svg"
        prop1="8."
        schoolName="Parent’s/ Guardian Name*"
        schoolName1="Your answer"
      />
      <div className="input-9-10">
        <FrameComponent
          studentInfo="9."
          studentMobileNumber="Parent's/ Guardian Mobile Number*"
          india="/india-1@2x.png"
          chevronDown="/chevrondown-4.svg"
        />
        <div className="text-desc-parent2">
          <div className="text-desc6">
            <div className="no-text6">
              <div className="div2">10.</div>
              <div className="column-16">
                <div className="parents-guardian-email">
                  Parent's/ Guardian Email Address*
                </div>
              </div>
            </div>
          </div>
          <div className="spacer-1-parent2">
            <div className="spacer-16" />
            <div className="opt-36">
              <input className="email1" placeholder="Email" type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="input-11-12">
        <div className="your-answer-input">
          <div className="text-desc7">
            <div className="no-text7">
              <div className="div3">11.</div>
              <div className="column-17">
                <div className="school-counsellor-principal">
                  School Counsellor/ Principal Name (Optional)
                </div>
              </div>
            </div>
          </div>
          <div className="spacer-1-parent3">
            <div className="spacer-17" />
            <div className="opt-37">              
              <input className="your-answer" placeholder="Your answer" type="text" />
            </div>
          </div>
        </div>
        <div className="your-answer-input1">
          <div className="text-desc8">
            <div className="no-text8">
              <div className="div4">12.</div>
              <div className="column-18">
                <div className="share-an-example">
                  Share an example of how you can use knowledge of Ai and ML to
                  solve a real-world problem *
                </div>
              </div>
            </div>
          </div>
          <textarea
            className="your-answer-input-child"
            placeholder="Your answer..."
            rows={5}
            cols={17}
          />
        </div>
      </div>
      <button className="submit-btn">
        <div className="submit1">Submit</div>
      </button>
    </div>
    </form>
      </section>
    </div>
  );
};

export default GetStartedFormDefaultV;
