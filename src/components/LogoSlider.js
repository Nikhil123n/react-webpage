import React from 'react';
import './LogoSlider.css';

function App() {
    const row1 = [                 
        "un-global-compact.png",
        "take-the-world-forward-fellowship.png",
        "harvard-student-agency-ttoring.png",
        "HKUST-enterpreneurship-center.png",
        "the-academies-harvard-student-agencies.png",
        "wolve-of-wall-street.png",        
    ];

    const row2 = [
        "debate-mate.png",
        "womens-debate-institue.png",
        "tie-silicon-valley.png",
        "HMCSF.png",
        "harvard-model-congress.png",
        "wave-learning-festival.png",
    ];

    return (
        <div className="app-container"> 
            <div className="wrapper">
                {/* <div className="text">With </div>
                <div className="note">Osi is</div> */}
                <div className="marquee">
                    <div className="marquee-group">
                        {
                            row1.map((imageSrc, index) =>(
                                <div className="image-group" key={index}>
                                    <img className="image" src={imageSrc} alt={`Image ${index}`} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="marquee-group">
                        {
                            row1.map((imageSrc, index) =>(
                                <div className="image-group" key={index}>
                                    <img className="image" src={imageSrc} alt={`Image ${index}`} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="marquee">
                    <div className="marquee-group2">
                        {
                            row2.map((imageSrc, index) =>(
                                <div className="image-group" key={index}>
                                    <img className="image" src={imageSrc} alt={`Image ${index}`} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="marquee-group2">
                        {
                            row2.map((imageSrc, index) =>(
                                <div className="image-group" key={index}>
                                    <img className="image" src={imageSrc} alt={`Image ${index}`} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
