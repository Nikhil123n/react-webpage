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
import Certificate from "./pages/certificate";
import FAQ from "./pages/faq";

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
        title = "";
        metaDescription = "";
        break;
      case "/program-reg":
        title = "";
        metaDescription = "";
        break;
      case "/stepper-1":
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
      <Route path="/faq" element={<FAQ />} />
    </Routes>    
  );
}
export default App;
