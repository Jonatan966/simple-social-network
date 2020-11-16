import React from 'react';
import { Modal, ModalProps } from '../Models/Modal';

import userImg from '../../images/tests-img.jpg';
import { Container, ConversationBaloonContainer } from './styles';
import { FiSettings } from 'react-icons/fi';

const ConversationBaloon: React.FC<{isMy?: boolean}> = ({isMy = false}) => {
  return (
    <ConversationBaloonContainer isMy={isMy}>
      <label className="conversationDetails">
        <h3>Um ser</h3>
        <strong>25/10/2020</strong>
      </label>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nemo veritatis odio laborum, error sint repellat tempore praesentium! Iure consequatur aliquam ex porro deleniti ab molestias quae quia dolorem dolor.</p>

    </ConversationBaloonContainer>
  );
}

const ConversationModal: React.FC<ModalProps> = ({state, onClose}) => {
  return (
    <Modal onClose={onClose} state={state}>
      <Container>
        <label className="userDetails">
          <img src={userImg} alt="Pessoa Tal"/>
          <h1>Pessoa Tal</h1>
          <button><FiSettings size={25}/></button>
        </label>

        <div className="conversationArea">
          {/* <h1>Nada aqui :(</h1> */}

          <ConversationBaloon isMy/>
          <ConversationBaloon/>
          <ConversationBaloon isMy/>
          <ConversationBaloon/>
          <ConversationBaloon isMy/>
          <ConversationBaloon/>
          <ConversationBaloon isMy/>
          <ConversationBaloon/>
          <ConversationBaloon isMy/>

        </div>

        <label className="sendMessageArea">
          <input placeholder="Escreva alguma mensagem. . ." type="text"/>
          <button>Enviar</button>
        </label>
      </Container>
    </Modal>
  );
};

export default ConversationModal;
