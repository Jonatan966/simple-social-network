import React, { useEffect, useState } from 'react';

import { Container } from './styles';

export interface ModalProps {
  state: boolean;
  onClose: Function;
}

export const Modal: React.FC<ModalProps> = ({state, onClose, children}) => {
  const [openState, setOpenState] = useState(false);
  useEffect(() => {
    setOpenState(state);
  }, [state]);

  function closeModal() {
    setOpenState(false);
    onClose();
  }

  return (
    <Container style={{display: (openState ? 'flex' : 'none')}}>
      {children}

      <button onClick={closeModal}>Fechar</button>
    </Container>
  );
};