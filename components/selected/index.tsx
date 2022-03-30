import React from 'react';
import { Banner, BannerContent, BannerStyled } from './styled'

export const Selected = () => {
  return (
    <Banner>
      {[1, 2].map((index) => {
        return (
          <BannerContent key={index}>
            {[1, 2, 3, 4].map((i) => {
              return (
                <BannerStyled key={i}>Selected / Work /</BannerStyled>
              )
            })}
          </BannerContent>
        )
      }
      )}
    </Banner>
  )
}