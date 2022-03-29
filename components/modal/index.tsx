import React from 'react'
import { ModalOverlay, ModalIframe, ModalClose } from './styles'
import Image from 'next/image'

export const Modal = ({ ...props }) => {
  const handleClose = () => {
    props.handleModalClose()
  }
  return (
    <ModalOverlay>
      <ModalIframe>
        <iframe width="560" height="315" src={props.link} title={props.link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </ModalIframe>
      <ModalClose>
        <Image onClick={handleClose} src="/close.svg" width={24} height={24} alt={props.link} />
      </ModalClose>
    </ModalOverlay>
  )
}