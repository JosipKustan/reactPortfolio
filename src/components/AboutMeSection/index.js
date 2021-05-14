import React from "react";
import {
  SectionContainer,
  SectionTitle,
  AboutMeImage,
  SectionParagraf,
} from "./AboutMeElements";

const AboutMeComponent = () => {
  return (
    <SectionContainer id="aboutMe_page">
      <SectionTitle> Who am I? </SectionTitle>
      <AboutMeImage />
      <SectionParagraf>
        {" "}
        I am a passionate amature maker of things and Software Engineer student!{" "}
      </SectionParagraf>
    </SectionContainer>
  );
};

export default AboutMeComponent;
