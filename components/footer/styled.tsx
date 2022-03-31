import styled from 'styled-components'
import { CONFIG } from './../../common/constants'

export const FooterContainer = styled.footer`
  margin: auto;
  padding: 100px 45px 30px;
  @media only screen and (min-width: 480px) {
    padding: 0;
    max-width: ${CONFIG.sizes.desktop};
  }
`

export const FooterTittle = styled.h5`
  font-family: 'Inter';
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: 160px;
  letter-spacing: 0;
  text-align: left;
  color: #D7D7D7;
  @media only screen and (min-width: 480px) {
    font-size: 60px;
  }
`

export const FooterText = styled.p`
  font-family: 'Azeret Mono';
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0;
  text-align: left;
`

export const FooterImageContainer = styled.div`
  transform: rotate(0.5turn);
  width: 57px;
  margin-left: auto;
`

export const FooterDisclaimer = styled.p`
  font-family: 'Azeret Mono';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0;
  text-align: left;
  width: 60%;
`