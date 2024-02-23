import "./input.css";

const Input = ({
  prop,
  country,
  selectYourCountry,
  classname,
  chevronDown,
  prop1,
  schoolName,
  schoolName1,
  onChange1,
  value1,
  onChange2,
  value2,
}) => {
  return (
    <div className="input-5-6">
      <div className="text-desc-group">
        <div className="text-desc1">
          <div className="no-text1">
            <div className="div">{prop}</div>
            <div className="column-11">
              <div className="country">{country}</div>
            </div>
          </div>
        </div>
        <div className="spacer-1-group">
          <div className="spacer-11" />
          <div className="opt-31">
            <input className={classname} placeholder={selectYourCountry} type="text" onChange={onChange1} value={value1}/>            
          </div>
        </div>
      </div>
      <div className="text-desc-container">
        <div className="text-desc2">
          <div className="no-text2">
            <div className="div1">{prop1}</div>
            <div className="column-12">
              <div className="school-name">{schoolName}</div>
            </div>
          </div>
        </div>
        <div className="spacer-1-container">
          <div className="spacer-12" />
          <div className="opt-32">
            {/* <div className="school-name1">{schoolName1}</div> */}
            <input className="school-name1" placeholder={schoolName1} type="text" onChange={onChange2} value={value2}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
