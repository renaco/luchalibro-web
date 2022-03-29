import React, { useState } from "react";
import Image from 'next/image'
import { ContentSection, TitleSection, ButtonSection, PlayContent, DescriptionContent } from './styles'
import { Modal } from './../modal'

export const Section = ({ ...props }) => {
  const [statusModal, setStatusModal] = useState(false)
  const handleModal = () => {
    setStatusModal(true)
  }

  const handleModalClose = () => {
    setStatusModal(false)
  }
  return (
    <ContentSection>
      <Image src={props.movie.image} width={430} height={613} alt={props.movie.title} />
      <DescriptionContent>
        <TitleSection>{props.movie.title} </TitleSection>
        <PlayContent onClick={handleModal}>
          <Image src="/play.svg" width={50} height={50} alt={props.movie.title} />
          <ButtonSection>ver trailer</ButtonSection>
        </PlayContent>
      </DescriptionContent>
      {statusModal && <Modal
        status={statusModal}
        handleModalClose={handleModalClose}
        link={props.movie.link}
      />}
    </ContentSection>
  )
}