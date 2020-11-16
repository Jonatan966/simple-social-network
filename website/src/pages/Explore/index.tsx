import React, { useState } from 'react';
import PostCard from '../../components/PostCard';
import PostDetailsModal from '../../components/PostDetailsModal';
import UserCard from '../../components/UserCard';
import DefaultPageModel from '../Models/DefaultPageModel';

import {Container} from './styles';

const Explore: React.FC = () => {
  const [postDetailsState, setPostDetailsState] = useState(false);

  return (
    <DefaultPageModel pageName='Explore'>
      <PostDetailsModal onClose={() => setPostDetailsState(false)} state={postDetailsState}/>
      <Container className="pageContent">
        <h1>Pessoas com interesses semelhantes aos seus</h1>
        <UserCard/>
        <UserCard/>
        <UserCard/>

        <h1>Posts sugeridos</h1>
        <PostCard viewDetails={() => setPostDetailsState(true)}/>
        <PostCard viewDetails={() => setPostDetailsState(true)}/>
        <PostCard viewDetails={() => setPostDetailsState(true)}/>
        <PostCard viewDetails={() => setPostDetailsState(true)}/>

      </Container>
    </DefaultPageModel>
  );
};

export default Explore;
