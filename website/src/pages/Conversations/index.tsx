import React from 'react';
import ConversationCard from '../../components/ConversationCard';
import DefaultPageModel from '../Models/DefaultPageModel';

import {Container} from './styles';

const Conversations: React.FC = () => {
  return (
    <DefaultPageModel pageName='Conversations'>
      <Container className="pageContent">
        <h1>Lista de Conversas</h1>

        <ConversationCard/>
        <ConversationCard/>
        <ConversationCard/>
        <ConversationCard/>
      </Container>
    </DefaultPageModel>
  );
};

export default Conversations;
