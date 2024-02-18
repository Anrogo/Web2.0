import React from "react";
import MainLayout from "@/components/Layout";
import AboutMe from "@/components/About-me";

const AboutMePage: React.FC = () => {
  return (
    <MainLayout>
      <AboutMe />
    </MainLayout>
  );
};

export default AboutMePage;