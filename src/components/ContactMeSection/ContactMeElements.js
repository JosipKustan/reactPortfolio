import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  justify-content: center;
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

  @media screen and (min-width: 1280px) {
    font-size: 3.3rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionParagraf = styled.p`
  margin-top: 3vh;
  margin-bottom: 3vh;
  color: #fff;
  font-size: 1.3em;
  text-align: center;
  max-width: 600px;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 6em;
  color: #fff;

  @media screen and (min-width: 1280px) {
    font-size: 5em;
  }

  @media screen and (max-width: 768px) {
    font-size: 4em;
  }
`;

export const MailContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 4rem;
`;

export const MailText = styled.span`
  font-size: 1.5rem;
`;
