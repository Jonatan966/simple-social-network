import React from 'react';
import { Container } from './styles';
import PostCard from '../../components/PostCard';
import DefaultPageModel from '../Models/DefaultPageModel';

const Landing: React.FC = () => {
  return (
    <DefaultPageModel pageName='Landing'>
      <Container className="pageContent">
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </Container>
    </DefaultPageModel>
  );
};

export default Landing;
