import styled from 'styled-components'

export const Banner = styled.div`
  margin: 0 auto 85px auto;
  @media only screen and (min-width: 480px) {
    margin: 0 auto 120px auto;
  }
`

export const BannerContent = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
`

export const BannerStyled = styled.pre`
  font-family: 'Azeret Mono';
  font-size: 50px;
  font-weight: 400;
  line-height: 58px;
  letter-spacing: 0;
  @media only screen and (min-width: 480px) {
    font-size: 50px;
  }
`