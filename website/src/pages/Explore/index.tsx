import React from 'react';
import PostCard from '../../components/PostCard';
import UserCard from '../../components/UserCard';
import DefaultPageModel from '../Models/DefaultPageModel';

import {Container} from './styles';

const Explore: React.FC = () => {
  return (
    <DefaultPageModel pageName='Explore'>
      <Container className="pageContent">
        <h1>Pessoas com interesses semelhantes aos seus</h1>
        <UserCard/>
        <UserCard/>
        <UserCard/>

        <h1>Posts sugeridos</h1>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>

      </Container>
    </DefaultPageModel>
  );
};

export default Explore;
