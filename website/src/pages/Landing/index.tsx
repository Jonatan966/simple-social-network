import React, { useState } from 'react';
import { Container } from './styles';
import PostCard from '../../components/PostCard';
import DefaultPageModel from '../Models/DefaultPageModel';
import PostDetailsModal from '../../components/PostDetailsModal';

const Landing: React.FC = () => {
  const [postDetailsState, setPostDetailsState] = useState(false);
  return (
    <>
      <PostDetailsModal onClose={() => setPostDetailsState(false)} state={postDetailsState}/>
      <DefaultPageModel pageName='Landing'>
        <Container className="pageContent">
          <PostCard viewDetails={() => setPostDetailsState(true)}/>
          <PostCard viewDetails={() => setPostDetailsState(true)}/>
          <PostCard viewDetails={() => setPostDetailsState(true)}/>
          <PostCard viewDetails={() => setPostDetailsState(true)}/>
          <PostCard viewDetails={() => setPostDetailsState(true)}/>
        </Container>
      </DefaultPageModel>
    </>
  );
};

export default Landing;
