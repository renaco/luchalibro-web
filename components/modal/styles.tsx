import styled from 'styled-components'

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(0 0 0 / 70%);
  z-index: 3;
`

export const ModalIframe = styled.div`
  display: block;
  margin: 10em auto;
  overflow: hidden;
  position: relative;
  width: 85%;
  @media only screen and (min-width: 480px) {
    width: 560px;
  }
  ::after {
    padding-top: 56.25%;
    display: block;
    content: '';
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const ModalClose = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: default;
  background: white;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`