import React from 'react';
import { Banner, BannerContent, BannerStyled } from './styled'

export const Selected = () => {
  return (
    <Banner>
        {['-350px', '-100px'].map((position, index) => {
        return (
          <BannerContent key={index}>
            <div style={{
              display: 'flex',
              transform: `translateX(${position})`
            }}>
              {[1, 2, 3, 4].map((i) => {
                return (
                  <BannerStyled key={i}> Selected / Work /</BannerStyled>
                )
              })}
            </div>
          </BannerContent>
        )
      }
      )}
    </Banner>
  )
}