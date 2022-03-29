import React from 'react';
import { BannerContent, BannerStyled } from './styled'

export const Selected = () => {
  return (
    <BannerContent>
      {[1, 2, 3, 4].map((item, index) => {
        return (
          <BannerStyled key={index}>Selected / Work /</BannerStyled>
        )
      })}
    </BannerContent>
  )
}