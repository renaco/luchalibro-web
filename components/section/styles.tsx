import styled from 'styled-components'
import { CONFIG } from './../../common/constants'

export const SectionContent = styled.div`
  margin: auto;
  background: ${props => props.theme === 'dark' ? '#000' : '#EFEFEF'};
  @media only screen and (min-width: 480px) {
    max-width: ${CONFIG.sizes.desktop};
    display: flex;
    margin-bottom: 100px;
  }
`

export const SectionImage = styled.div`
  width: 100%;
  @media only screen and (min-width: 480px) {
    width: 548px;
    height: 781px;
  }
`

export const SectionDescription = styled.div`
  padding: 35px 45px 60px;
  @media only screen and (min-width: 480px) {
    max-width: 768px;
  }
`

export const SectionTitle = styled.h4`
  color: #646464;
  font-family: 'Inter';
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  line-height: 70px;
  letter-spacing: 0;
  margin-bottom: 100px;
  @media only screen and (min-width: 480px) {
    font-size: 135px;
    line-height: 135px;
  }
`

export const SectionPlay = styled.div`
  display: flex;
  align-items: center;
`

export const SectionButton = styled.span`
  color: ${props => props.theme === 'dark' ? 'white' : 'black'};
  cursor: pointer;
  font-family: 'Azeret Mono';
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0;
  padding-left: 25px;
`
