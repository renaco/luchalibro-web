import styled from 'styled-components'
import { CONFIG } from './../../common/constants'

export const CoverContent = styled.div`
  margin: 0;
  padding: 0;
`

export const CoverImageContainer = styled.div`
  margin: auto;
  width: 100%;
  padding: 75px 0 60px;
  background: #000;
  position: relative;
  display: block;
  @media only screen and (min-width: 480px) {
    display: none;
  }
`

export const CoverImageContainerDesktop = styled.div`
  display: none;
  @media only screen and (min-width: 480px) {
    display: block;
    width: 100%;
    background: #000;
    padding: 110px 0 65px;
  }
`
export const CoverImageContainerDesktopItem = styled.div`
  margin: auto;
  @media only screen and (min-width: 1315px) {
    width: 1315px;
  }
`

export const CoverArrowContainer = styled.div`
  display: block;
  margin: -25px auto 28px;
  width: 57px;
  @media only screen and (min-width: 480px) {
    margin: -25px auto 70px;
    width: 105px;
  }
`

export const CoverBio = styled.p`
  font-family: ${CONFIG.fontFamily.primary};
  padding: 30px 40px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0;
  text-align: justify;
  strong {
    font-weight: 800;
  }
  @media only screen and (min-width: 480px) {
    padding: 55px 0 186px;
    max-width: 1165px;
    margin: auto;
    line-height: 34px;
    width: 90%;
  }
`
