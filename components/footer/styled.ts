import styled from "styled-components";
import { CONFIG } from "../../common/constants";

export const FooterContainer = styled.footer`
  margin: auto;
  padding: 100px 35px 30px;
  @media only screen and (max-width: 320px) {
    padding: 20px;
  }
  @media only screen and (max-width: 360px) {
    padding: 70px 30px 30px;
  }
  @media only screen and (min-width: 480px) {
    padding: 0;
    max-width: ${CONFIG.sizes.desktop};
  }
`;

export const FooterTittle = styled.h5`
  @media only screen and (max-width: 320px) {
    font-size: 2.5em;
  }
  font-family: "Inter";
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: 160px;
  letter-spacing: 0;
  text-align: left;
  color: #d7d7d7;
  @media only screen and (min-width: 480px) {
    font-size: 60px;
  }
`;

export const FooterText = styled.pre`
  @media only screen and (max-width: 320px) {
    font-size: 1em;
  }
  font-family: "Azeret Mono";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0;
  text-align: left;
`;

export const FooterImageContainer = styled.div`
  transform: rotate(0.5turn);
  width: 57px;
  margin-left: 0;
  margin-top: 60px;
  margin-bottom: 60px;
  @media only screen and (min-width: 480px) {
    margin-left: auto;
  }
`;

export const FooterDisclaimer = styled.p`
  font-family: "Azeret Mono";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0;
  text-align: left;
  width: 80%;
  margin-bottom: 26px;
  @media only screen and (min-width: 480px) {
    margin-bottom: 78px;
  }
`;
