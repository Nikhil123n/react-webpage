import React from "react";
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import GetStartedFormDefaultV from "./pages/get-started-form-default-v";
import StepperForm1 from "./pages/StepperForm1";
import StepperForm2 from "./pages/StepperForm2";
import StepperForm3 from "./pages/StepperForm3";

import CertificateProgram from "./pages/CertificateProgram";
import Certificate from "./pages/certificate";
import Competition from "./pages/competition";
import Fellowship from "./pages/fellowship";
import Conference from "./pages/conference";
import Internship from "./pages/internship";
import Masterclass from "./pages/masterclass";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "";
        break;
      case "/program-reg":
        title = "Program Registration Form";
        metaDescription = "";
        break;
      case "/stepper-1":
        title = "";
        metaDescription = "";
        break;
      case "/certificate":
        title = "";
        metaDescription = "";
        break;
      case "/certificates-program":
        title = "";
        metaDescription = "";
        break;
      case "/competition":
        title = "";
        metaDescription = "";
        break;
      case "/fellowship":
        title = "";
        metaDescription = "";
        break;
      case "/conference":
        title = "";
        metaDescription = "";
        break;
      case "/intenship":
        title = "";
        metaDescription = "";
        break;
        case "/masterclass":
          title = "";
          metaDescription = "";
          break;
    
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/program-reg"
        element={<GetStartedFormDefaultV />}
      />
      <Route path="/stepper-1" element={<StepperForm1 />} />
      <Route path="/stepper-2" element={<StepperForm2 />} />
      <Route path="/stepper-3" element={<StepperForm3 />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/competition" element={<Competition />} />
      <Route path="/fellowship" element={<Fellowship />} />
      <Route path="/conference" element={<Conference />} />
      <Route path="/internship" element={<Internship />} />
      <Route path="/masterclass" element={<Masterclass />} />
      <Route path="/certificates-program" element={<CertificateProgram />} />
      
    </Routes>    
  );
}
export default App;
