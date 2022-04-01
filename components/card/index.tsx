import React from 'react'
import Image from 'next/image'
import { CardSubtitle, CardProfileContainer, CardProfileTitle, CardProfile, CardTitle } from './styled'

export const Card = () => {
  return (
    <CardProfile>
      <CardProfileContainer>
        <Image src="/cover-desktop.png" layout="responsive" alt="Card" width={127} height={127} />
      </CardProfileContainer>
      <CardProfileTitle>
        <CardTitle>
          <p>Christopher</p>
          <p>Vásquez</p>
        </CardTitle>
        <CardSubtitle>Guionista / Scriptwriter</CardSubtitle>
      </CardProfileTitle>
    </CardProfile>
  )
}