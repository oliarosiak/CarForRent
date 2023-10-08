import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import PopUpCard from 'components/popUpCard/PopUpCard';
import {
  Overlay,
  CarInfoCard,
  CloseButton,
  CloseButtonImg,
} from './Modal.styled';
import closeButton from '../../images/close-x.svg';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onCloseModal, info }) => {
  const overlayClickHandler = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const escKeyHandler = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', escKeyHandler);
    return () => {
      window.removeEventListener('keydown', escKeyHandler);
    };
  }, [onCloseModal]);

  return createPortal(
    <Overlay onClick={overlayClickHandler}>
      <CarInfoCard>
        <CloseButton onClick={() => onCloseModal()}>
          <CloseButtonImg src={closeButton} alt="close button" />
        </CloseButton>
        <PopUpCard characteristics={info} />
      </CarInfoCard>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
