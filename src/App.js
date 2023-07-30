import React, { useState } from 'react';
import AppNavbar from "./layouts/appNavbar";
import LandingPage from './sections/landingPage';
import OurApproach from './sections/ourApproach';
import Services from './sections/services';
import AboutUs from './sections/aboutUs';
import ContactUs from './sections/contactUs';
// import Pricing from './sections/pricing';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/utils.css';

function App() {
  const [ourApproachSectionRef, setOurApproachSectionRef] = useState(null);
  const [ourServicesSectionRef, setOurServicesSectionRef] = useState(null);
  const [aboutUsSectionRef, setAboutUsSectionRef] = useState(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "ourApproachSection":
        if (ourApproachSectionRef) {
          ourApproachSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "ourServicesSection":
        if (ourServicesSectionRef) {
          ourServicesSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "aboutUsSection":
        if (aboutUsSectionRef) {
          aboutUsSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      // Add more cases for other sections if needed
      default:
        break;
    }
  };

  return (
    <>
      <main>
        <AppNavbar scrollToSection={scrollToSection} />
        <LandingPage />
        <OurApproach sectionRef={setOurApproachSectionRef} />
        <Services sectionRef={setOurServicesSectionRef} />
        <AboutUs sectionRef={setAboutUsSectionRef} />
        <ContactUs />
      </main>
    </>
  );
}

export default App;
