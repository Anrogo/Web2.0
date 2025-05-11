import React from "react";
import { getMyAge } from "@/utils/date-helper";

const AboutMe: React.FC = () => {
    return (
      <>
        <p>Página About me</p>
        <span>Edad: {getMyAge()}</span>
      </>
    );
  };

export default AboutMe;