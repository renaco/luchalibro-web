import React from 'react'
import Image from 'next/image'
import { FooterContainer, FooterTittle, FooterText, FooterImageContainer, FooterDisclaimer } from './styled'

export const Footer = () => {
  const handlerScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <FooterContainer>
      <FooterTittle>CONTACTO</FooterTittle>
      <FooterText>+51 1 951034749</FooterText>
      <FooterText>cvasquez@luchalibro.com</FooterText>
      <FooterImageContainer>
        <Image src="/arrow.svg" layout="responsive" alt="arrow" width={57} height={65} onClick={handlerScrollTop} />
      </FooterImageContainer>
      <FooterDisclaimer>
        © 2022 - all rights reserved / Christopher Vasquez
      </FooterDisclaimer>
    </FooterContainer>
  )
}