import styled from "styled-components";
import { CONFIG } from "../../common/constants";

export const SectionContent = styled.div`
  margin: auto;
  background: ${(props) => (props.theme === "dark" ? "#000" : "#EFEFEF")};
  @media only screen and (min-width: 768px) {
    max-width: ${CONFIG.sizes.desktop};
    display: flex;
    margin-bottom: 100px;
  }
`;

export const SectionImage = styled.div`
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 50%;
    max-width: 485px;
  }
`;

export const SectionDescription = styled.div`
  padding: 25px;
  @media only screen and (max-width: 320px) {
    padding: 35px 45px 60px;
  }
  @media only screen and (min-width: 768px) {
    max-width: 768px;
    width: 50%;
  }
  @media only screen and (min-width: 1024px) {
    max-width: auto;
  }
`;

export const SectionTitle = styled.h4`
  color: #646464;
  font-family: "Inter";
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  line-height: 70px;
  letter-spacing: 0;
  @media only screen and (max-width: 320px) {
    font-size: 2.4em;
    line-height: 1;
  }
  @media only screen and (min-width: 640px) {
    line-height: 1;
    margin-bottom: 100px;
  }
  @media only screen and (min-width: 1160px) {
    font-size: 7em;
    line-height: 1.1em;
  }
`;

export const SectionPlay = styled.span`
  display: flex;
  align-items: center;
  margin: 50px 0;
  @media only screen and (min-width: 640px) {
    margin: 0;
  }
`;

export const SectionButton = styled.span`
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
  cursor: pointer;
  font-family: "Azeret Mono";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0;
  padding-left: 25px;
`;
