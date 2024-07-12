import CardSection from "./components/Card";
import { Features } from "./components/Features";
import { Navbar } from "./components/Navbar";
import { RevenueSharing } from "./components/Revenue";
import Tokenomics from "./components/Tokenomics";
import { UseCases } from "./components/UseCases";
import WhyUs from "./components/WhyUsSection";

import { HeroSection } from "./components/HeroSection";

import Roadmap from "./components/RoadMap";
import { Footer } from "./components/Footer";
import FAQ from "./components/FaqSection";

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <HeroSection/>
        <Features />
        <WhyUs/>
        <RevenueSharing />
        <Roadmap/>
        <Tokenomics/>
        <FAQ/>
         <UseCases/>
        <CardSection/>
         <Footer/>
      </div>
    </>
  );
}

export default App;
