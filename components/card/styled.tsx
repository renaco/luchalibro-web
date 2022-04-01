import styled from 'styled-components'
import { CONFIG } from './../../common/constants'

export const CardTitle = styled.h1`
  font-family: ${CONFIG.fontFamily.secondary};
  display: flex;
  flex-direction: column;
  font-weight: 800;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
  margin: 55px 0 20px;
  p {
    font-size: 50px;
    color: #C4C4C4;
    padding: 0;
    margin: 0;
    text-align: center;
    @media only screen and (min-width: 1320px) {
      line-height: .35em;
      font-size: 70px;
    }
    @media only screen and (min-width: 480px) {
      line-height: .875em;
      font-size: 90px;
      text-align: left;
    }
    &:first-child {
      color: black;
    }
  }
  @media only screen and (min-width: 480px) {
    margin: 0 0 30px;
  }
`

export const CardSubtitle = styled.h2`
  font-family: ${CONFIG.fontFamily.primary};
  font-weight: 400;
  text-align: center;
  font-size: 20px;
  line-height: 43px;
  color: #FF2E00;
  @media only screen and (min-width: 480px) {
    font-size: 37px;
    text-align: left;
  }
`

export const CardProfileContainer = styled.div`
  width: 127px;
  display: block;
  margin: auto;
  @media only screen and (min-width: 480px) {
    width: 212px;
    margin: 0 20px 0 10px;
  }
`

export const CardProfile = styled.div`
  max-width: 1167px;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 480px) {
    flex-direction: row;
  }
`

export const CardProfileTitle = styled.div`
  
`
