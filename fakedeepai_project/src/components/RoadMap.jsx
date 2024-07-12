import robotImage from '../../public/robot.png';
import rocket from '../../public/rocket.png';
import moon from '../../public/moon.png';
import moneyBox from '../../public/money-box.png';
import '../styles/roadMap.css'
import Sparkle from "react-sparkle";
import { TracingBeam } from '../UI/TracingBeam';
import { useEffect, useRef } from 'react';


const Roadmap = () => {
  const imgContainerRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imgContainerRef.current.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 }); // Adjust the threshold as needed

    if (imgContainerRef.current) {
      observer.observe(imgContainerRef.current);
    }

    return () => {
      if (imgContainerRef.current) {
        observer.unobserve(imgContainerRef.current);
      }
    };
  }, []);

  return (
    <section className="roadMap-container bg-[#010314] py-16 relative">
            <Sparkle className="sparkles-background" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="h2-para text-center mb-12">Roadmap</h2>
        <div className="relative ">


          {/* Vertical Line with Robot Image */}
      {/* <div className="roadMap-line absolute inset-0 flex justify-center">
        <div className="line w-[8px] bg-[#0047ff] relative"></div>
        <img src={robot} alt="Robot" className="robot absolute h-[50px] w-[50px]" />
      </div>
           */}
          {/* Launch Phase */}
          <TracingBeam  
          robot={robotImage}
          className="tracingBeam "
          >
          <div className="rocket-container flex flex-col md:flex-row items-center mb-12">
            <div className="rocket-middle-container  rocket-container flex-1 md:pr-8">
              <h3 className="h2-para01 text-2xl font-semibold text-white mb-4">LAUNCH PHASE</h3>
              <ul className="list-disc pl-5 space-y-2 text-white">
                <li>Startup Partnerships</li>
                <li>Private Beta Launch</li>
                <li>Deploy AI Models with Video Generation Capabilities</li>
                <li>Adding Analytics Module in DeepSea Console</li>
                <li>Dynamic Scaling of Side Chains</li>
                <li>Integration with L1 Models</li>
                <li>1000 TPS</li>
                <li>Ads Going Live</li>
              </ul>
            </div>

            {/* <div data-aos="fade-up" data-aos-duration="3000"></div>*/}
            <div data-aos="fade-up" data-aos-duration="3000"   className="rocket-img img-container007 flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
              <img src={rocket} alt="Rocket" className="" />
            </div>
          </div>
          
          {/* Moon Phase */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12">
            <div className="rocket-middle-container moon-container flex-1 ">
              <h3 className="h2-para01 text-2xl font-semibold text-white mb-4">MOON PHASE</h3>
              <ul className="list-disc pl-5 space-y-2 text-white">
                <li>Launch of DeepSea AI Platform</li>
                <li>Implementation of Generative Adversarial Network Model</li>
                <li>Launch Two New Networks</li>
                <li>Introduction of NFT Feature</li>
                <li>Dynamic Gas Pricing</li>
                <li>10,000 TPS</li>
                <li>KYC Push</li>
              </ul>
            </div>

            {/* <div data-aos="fade-right" data-aos-offset="300"  data-aos-easing="ease-in-sine"></div>*/}
            <div data-aos="fade-right" data-aos-duration="3000"  className="img-container02  flex-1 flex justify-center md:justify-start mt-8 md:mt-0" ref={imgContainerRef}>
              <img src={moon} alt="Moon" className="" />
            </div>
          </div>
          
          {/* Revenue Phase */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="rocket-middle-container moneyBox-container flex-1 md:pr-8">
              <h3 className="h2-para01 text-2xl font-semibold text-white mb-4">REVENUE PHASE</h3>
              <ul className="list-disc pl-5 space-y-2 text-white">
                <li>Token Sale</li>
                <li>Exchange Listing</li>
                <li>Ad Revenue Sharing</li>
                <li>ARP for Other Projects</li>
              </ul>
            </div>

            {/* <div data-aos="fade-right" data-aos-offset="300"  data-aos-easing="ease-in-sine"></div>*/}

            <div data-aos="fade-left" data-aos-duration="3000" className="img-container03 flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
              <img src={moneyBox} alt="Money Box" className="" />
            </div>
          </div>
          
          </TracingBeam>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
