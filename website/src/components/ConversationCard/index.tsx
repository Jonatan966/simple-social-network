import React from 'react';
import {FiSettings} from 'react-icons/fi';

import testImg from '../../images/tests-img.jpg';
import { Container } from './styles';

const ConversationCard: React.FC<{onClick: Function}> = ({onClick}) => {
  return (
    <Container>
      <img src={testImg} alt="Pessoa Tal"/>
      <div className="mainContainer">
        <label className="userInfo">
          <h1>Pessoa Tal</h1>
          <button><FiSettings size={25}/></button>
        </label>

        <div className="conversationMessages">
          <h3>Últimas mensagens</h3>
          <label><strong>Jonas [25/02/2020]: </strong>Bla bla bla bla bla</label>
          <label><strong>Jonas [25/02/2020]: </strong>Bla bla bla bla bla</label>
        </div>

        <button onClick={() => onClick()}>Abrir Conversa</button>
      </div>
    </Container>
  );
};

export default ConversationCard;
