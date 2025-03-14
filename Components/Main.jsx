"use client";
import Hero from "./LandingPages/Hero";
import TechnologyPage from "./LandingPages/TechnologyPage";
import ProductsPage from "./LandingPages/ProductsPage";
import AboutUsPage from "./LandingPages/AboutUsPage";
import Footerpage from "./LandingPages/Footerpage";
import Gallery from "./LandingPages/Gallery";
import ChatBot from "./ChatBot/ChatBot";
import OurAims from "./LandingPages/OurAims";
import TeamSection from "./LandingPages/TeamSection";


const Main = () => {
  return (
    <div className="w-full h-auto overflow-hidden">
      <Hero  />
      <TechnologyPage />
      <OurAims/>
      <ProductsPage  />
      <AboutUsPage/>
      <TeamSection/>
      <Gallery/>
      <Footerpage/>
      <ChatBot/>
    </div>
  );
};

export default Main;
