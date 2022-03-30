import styled from 'styled-components'

export const CoverContent = styled.div`
  margin: 0;
  padding: 0;
`

export const CoverTitle = styled.h1`
  font-family: 'Inter';
  display: flex;
  flex-direction: column;
  font-weight: 800;
  line-height: 1.75em;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
  margin: 55px 0 20px;
  p {
    font-size: 2.5em;
    color: #C4C4C4;
    padding: 0;
    margin: 0;
    @media only screen and (min-width: 480px) {
      line-height: .75em;
      font-size: .75em;
    }
    &:first-child {
      color: black;
    }
  }
  @media only screen and (min-width: 480px) {
    margin: 110px 0 50px;
    font-size: 7.5em;
  }
`

export const CoverImageContainer = styled.div`
  margin: auto;
  width: 100%;
  height: 300px;
  position: relative;
  @media only screen and (min-width: 480px) {
    width: 1050px;
  }
`

export const CoverSubtitle = styled.h2`
  font-family: 'Azeret Mono';
  font-weight: 400;
  text-align: center;
  font-size: 20px;
  line-height: 43px;
  color: #FF2E00;
  @media only screen and (min-width: 480px) {
    font-size: 37px;
  }
`

export const CoverArrowContainer = styled.div`
  display: block;
  margin: -25px auto 28px;
  width: 57px;
  @media only screen and (min-width: 480px) {
    width: 105px;
  }
`

export const CoverBio = styled.p`
  font-family: 'Azeret Mono';
  padding: 30px 40px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0;
  text-align: justify;
  strong {
    font-weight: 800;
  }
`
