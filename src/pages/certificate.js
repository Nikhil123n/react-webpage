import NavigationLinks from "../components/NavigationLinks";
import Carousel from "../components/carousel";
import GridElements from "../components/gridElements";
import ConnectUs from "../components/ConnectUs";
import Footer from "../components/Footer";
import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./certificate.css";
import { faList } from "@fortawesome/free-solid-svg-icons";
// import jsonData from '../json/certificate.json'; (or)
const certificateFigureData = require('../json/certificate.json');
// console.log(certificateFigureData);
// console.log(certificateFigureData[0].image);




const Certificate = () => {  
  
  const StudentLoveProgram = 'none';

  return (
    <div className="home">
      <section className="top-level">
        <div className="figma-logo">
          <NavigationLinks />

          <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                  <li >
                      <a href="/" style={{fontSize:'30px'}}>
                          <img src="/home.png">
                          </img>
                      </a>
                  </li>      
                  <li class="breadcrumb-item"></li>                      
                  <li class=" active" style={{fontSize: '18px', color:'#F1B537', marginTop:'15px' }} >  Our Offerings  </li>
                  <li class="breadcrumb-item"></li>                      
                  <li class=" active" style={{fontSize: '18px', color:'#878D92', marginTop:'15px' }} >  Certificate Programs  </li>
              </ol>
          </nav>

          </div>
      </section>



      <Container>
          <Row>
            <Col style={{padding: '5px', marginLeft: '30px'}}>
              <InputGroup className="mb-3 certificate-input-group-btn" variant="outline-secondary" >
                <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch} className="angle-right-icon" swapOpacity size="lg" />            
                </InputGroup.Text>
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"                   
                  />
              </InputGroup>
            </Col>
            <Col>
                <DropdownButton variant="outline-secondary" id="dropdown-basic-button" title={"Filter by       "}>
                  <Dropdown.Item href="#/action-1">Date</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Category</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Type</Dropdown.Item>
                </DropdownButton>            
            </Col>          
            <Col>
                <Row style={{display: 'none'}}>
                  <Col>
                    <button style={{
                        border: '2px solid white',
                        backgroundColor: 'transparent',
                        padding: '10px',
                        cursor: 'pointer',
                      }}>
                      <FontAwesomeIcon icon={faList} style={{color:'white'}} />                      
                    </button>                  
                  </Col> 
                  <Col>
                    <button style={{
                        border: '2px solid white',
                        backgroundColor: 'transparent',                        
                        cursor: 'pointer',
                        paddingBottom: '10px',
                        cursor: 'pointer',
                        width: '40px', // Set the width of the button
                        height: '40px', // Set the height of the button
                      }}>
                      <img 
                        src="grid-white.svg" 
                        alt="icon" 
                        style={{
                          width: '30px', /* Adjust size as needed */
                          height: '30px', /* Adjust size as needed */
                          // backgroundColor: 'blue',
                          color: 'red',
                          fill: 'blue', /* Icon color */
                        }}
                      />
                    </button>                  
                    </Col>
                                   
                </Row>
                
            </Col>
          </Row>
          <GridElements 
            data={certificateFigureData}
            />

          {/* Caruosel data remains same for every page */}
          <Carousel />
      </Container>



          

      <ConnectUs 
        divNone={StudentLoveProgram}        
      />
      <Footer />
    </div>
  );
};

export default Certificate;