import React from "react";
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import Gallery from "./pages/Gallery";
import 'bootstrap/dist/css/bootstrap.min.css';

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

import BlogMedia from "./pages/blogMedia";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/faq";
import BlogMediaCard from "./pages/BlogMediaCard";

import OfflinePrograms from "./pages/OfflinePrograms";
import GalleryEvents from "./pages/GalleryEvents";
import ImpactStories from "./pages/ImpactStories";
import Testimonials from "./pages/Testimonials";
import CommunityEvents from "./pages/CommunityEvents";


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
        title = "Registration Form";
        metaDescription = "";
        break;
      case "/certificate":
        title = "Certificates";
        metaDescription = "";
        break;
      case "/certificates-program":
        title = "Certificate Programs";
        metaDescription = "";
        break;
      case "/competition":
        title = "Competitions";
        metaDescription = "";
        break;
      case "/fellowship":
        title = "Fellowships";
        metaDescription = "";
        break;
      case "/conference":
        title = "Conferences";
        metaDescription = "";
        break;
      case "/intenship":
        title = "Internship";
        metaDescription = "";
        break;
      case "/masterclass":
        title = "Masterclass";
        metaDescription = "";
        break;

      case "/gallery":
        title = "Gallery";
        metaDescription = "";
        break;

      case "/blog-media":
        title = "Blog and Media";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "Contact us";
        metaDescription = "";
        break;
      case "/about-us":
        title = "About us";
        metaDescription = "";
        break;
      case "/faq":
        title = "FAQ's";
        metaDescription = "";
        break;
      case "/offline-programs":
        title = "Offline Programs";
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
      <Route path="/certificate-program" element={<CertificateProgram />} />

      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog-media" element={<BlogMedia />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/faq" element={<FAQ />} />

      <Route path="/offline-programs" element={<OfflinePrograms />} />

      <Route path="/gallery/gallery-events" element={<GalleryEvents />} />
      <Route path="/Gallery/impact-stories" element={<ImpactStories />} />
      <Route path="/Gallery/testimonials" element={<Testimonials />} />
      <Route path="/Gallery/community-events" element={<CommunityEvents />} />
      

      <Route path="/blog-media/carlas-journey-empowering-youth-advocating-for-change-and-mastering-the-art-of-debate/" element={<BlogMediaCard />} />
      
    </Routes>    
  );
}
export default App;
