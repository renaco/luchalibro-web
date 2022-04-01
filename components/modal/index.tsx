import { ModalOverlay, ModalIframe, ModalClose } from './styles'
import Image from 'next/image'

export const Modal = ({ ...props }) => {
  const handleClose = () => {
    props.handleModalClose()
  }
  return (
    <ModalOverlay onClick={handleClose}>
      <ModalIframe>
        <iframe src={props.link}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
      </ModalIframe>
      <ModalClose>
        <Image onClick={handleClose} src="/close.svg" width={24} height={24} alt={props.link} />
      </ModalClose>
    </ModalOverlay>
  )
}