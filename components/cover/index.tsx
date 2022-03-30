import React, { useRef } from 'react'
import Image from 'next/image'
import { CoverContent, CoverTitle, CoverSubtitle, CoverImageContainer, CoverImageContainerDesktop, CoverBio, CoverArrowContainer } from './styles'

export const Cover = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)

  const handlerEvent = () => {
    titleRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <CoverContent>
      <CoverTitle>
        <p>Christopher</p>
        <p>Vásquez</p>
      </CoverTitle>
      <CoverImageContainer>
        <Image src="/christopher-mobile.jpg" layout='responsive'
          width={428} height={250}
          alt="Christopher Vásquez" />
      </CoverImageContainer>
      <CoverImageContainerDesktop>
        <Image src="/christopher-desktop.jpg" alt="Christopher Vásquez" layout='responsive' width={1315} height={433} />
      </CoverImageContainerDesktop>
      <CoverArrowContainer>
        <Image src="/arrow.svg" layout="responsive" alt="arrow" width={57} height={65} onClick={handlerEvent} />
      </CoverArrowContainer>
      <CoverSubtitle ref={titleRef}>Guionista / Scriptwriter</CoverSubtitle>
      <CoverBio>Tiene experiencia en el cine narrativo y cine publicitario, videoclips y televisión. Como guionista ha escrito la película peruana <strong>Chicha tu Madre</strong>, que se estrenó en el Festival de Venecia, y el actor ganó el premio a mejor actor en el Festival de Huelva. Su segundo guion <strong>Rosa Chumbe</strong>, ganó el Concurso de Proyectos de Largometraje otorgado por el MINCUL. La protagonista ganó el premio a mejor actriz en el BAFICI. Ha adaptado al cine la novela peruana <strong>Los Inocentes</strong> de Oswaldo Reynoso, el guion ganó el premio DAFO del MINCUL así como Ibermedia y se encuentra en producción. Como coguionista ha escrito <strong>La Grabadora</strong> guion ganador de DAFO y que se encuentra en pre-producción. Es creador de la idea original para la primera miniserie peruana de Movistar <strong>El día de mi suerte</strong>, una ficción sobre el cantante Héctor Lavoe. Ha publicado tres libros de ficción y es creador del Campeonato de Improvisación Literaria – <strong>LuchaLibro</strong>, la primera franquicia internacional de literatura de su país. Es consultor creativo y docente en el IPP - Instituto Peruano de Publicidad.
      </CoverBio>
    </CoverContent>
  )
}
