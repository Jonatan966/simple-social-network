import React from 'react';
import PostCard from '../../components/PostCard';
import UserProfileHeader from '../../components/UserProfileHeader';
import DefaultPageModel from '../Models/DefaultPageModel';

import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <DefaultPageModel pageName='Profile'>
      <Container className="pageContent">
        <UserProfileHeader/>

        <PostCard/>
      </Container>
    </DefaultPageModel>
  );
};

export default Profile;
