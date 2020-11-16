import React, { useState } from 'react';
import ConversationCard from '../../components/ConversationCard';
import ConversationModal from '../../components/ConversationModal';
import DefaultPageModel from '../Models/DefaultPageModel';

import {Container} from './styles';

const Conversations: React.FC = () => {
  const [conversationCardState, setConversationCardState] = useState(false);

  function openConversationCard() {
    setConversationCardState(true);
  }

  return (
    <DefaultPageModel pageName='Conversations'>
      <ConversationModal 
        onClose={() => setConversationCardState(false)} 
        state={conversationCardState}
      />

      <Container className="pageContent">
        <h1>Lista de Conversas</h1>

        <ConversationCard onClick={openConversationCard}/>
        <ConversationCard onClick={openConversationCard}/>
        <ConversationCard onClick={openConversationCard}/>
        <ConversationCard onClick={openConversationCard}/>
      </Container>
    </DefaultPageModel>
  );
};

export default Conversations;
