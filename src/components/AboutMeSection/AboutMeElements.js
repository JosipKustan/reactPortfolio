import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  justify-content: center;
  padding-top: 4vh;
  padding-bottom: 4vh;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding-left: 30px;
  padding-right: 30px;
`;

export const SectionTitle = styled.h1`
  color: #fff;
  font-size: 2.7rem;
  text-align: center;
  text-shadow: 2px 2px 2px #000;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 1280px) {
    font-size: 3.3rem;
  }
`;

export const AboutMeImage = styled.img`
  height: 430px;
  mix-blend-mode: normal;
  width: 300px;
`;

export const SectionParagraf = styled.p`
  color: #fff;
  font-size: 2vh;
  text-align: center;
  max-width: 600px;
  margin-top: 4vh;
`;
