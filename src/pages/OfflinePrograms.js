import NavigationLinks from "../components/NavigationLinks";
import GridElements from "../components/gridElements";
import Footer from "../components/Footer";
import React from "react";
const UpcomingOfflineProgramsFigureData = require('../json/UpcomingOfflinePrograms.json');
// import "./offlinePrograms.css";

const OfflinePrograms = () => {  
  
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
                    <li class=" active" style={{fontSize: '18px', color:'#878D92', marginTop:'15px' }} >  Offline Programs  </li>
                </ol>
            </nav>
  
            <GridElements 
              data={UpcomingOfflineProgramsFigureData}
              />
  
          </div>
        </section>
  
        <Footer />
      </div>
    );
  };
  
  export default OfflinePrograms;