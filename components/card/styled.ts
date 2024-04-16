import styled from "styled-components";
import { CONFIG } from "../../common/constants";

export const CardTitle = styled.h1`
  @media only screen and (max-width: 320px) {
    font-size: 2em;
    text-align: center;
  }
  font-family: ${CONFIG.fontFamily.secondary};
  display: flex;
  flex-direction: column;
  font-weight: 800;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
  margin: 55px 0 20px;
  font-size: 50px;
  color: #c4c4c4;
  text-align: center;
  @media only screen and (min-width: 1320px) {
    line-height: 0.35em;
    font-size: 70px;
  }
  @media only screen and (min-width: 680px) {
    padding: 0;
    margin: 0;
    line-height: 0.875em;
    font-size: 90px;
    text-align: left;
  }
  span {
    color: black;
  }
  @media only screen and (min-width: 480px) {
    margin: 0 0 20px;
  }
`;

export const CardSubtitle = styled.h2`
  @media only screen and (max-width: 320px) {
    line-height: 1.2em;
  }
  font-family: ${CONFIG.fontFamily.primary};
  font-weight: 400;
  text-align: center;
  font-size: 20px;
  line-height: 43px;
  color: #ff2e00;
  @media only screen and (min-width: 480px) {
    font-size: 37px;
    text-align: left;
  }
`;

export const CardProfileContainer = styled.div`
  width: 127px;
  display: block;
  margin: auto;
  @media only screen and (min-width: 480px) {
    width: 212px;
    margin: 0 40px 0 10px;
  }
`;

export const CardProfile = styled.div`
  max-width: 1167px;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 480px) {
    flex-direction: row;
  }
`;

export const CardProfileTitle = styled.div``;
