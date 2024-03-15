import React from "react";
import HeroSection from "../components/Sections/HeroSetion";
import AboutSection from "../components/Sections/AboutSection";
import VideoSection from "../components/Sections/VideoSection";
import QueriesSection from "../components/Sections/QueriesSection";

const page = () => {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <QueriesSection />
    </div>
  );
};

export default page;
