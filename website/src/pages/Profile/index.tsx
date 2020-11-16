import React, { useState } from 'react';
import PostCard from '../../components/PostCard';
import UserProfileHeader from '../../components/UserProfileHeader';
import DefaultPageModel from '../Models/DefaultPageModel';
import { Route, Switch } from 'react-router-dom';

import UserCard from '../../components/UserCard';
import { Container } from './styles';
import PostDetailsModal from '../../components/PostDetailsModal';
import AboutCard from '../../components/AboutCard';

const Profile: React.FC = () => {
  const [postDetailsState, setPostDetailsState] = useState(false);

  return (
    <DefaultPageModel pageName='Profile'>
      <PostDetailsModal onClose={() => setPostDetailsState(false)} state={postDetailsState}/>

      <Container className="pageContent">
        <UserProfileHeader/>

        <Switch>
          <Route exact path='/profile/1'>
            <PostCard viewDetails={() => setPostDetailsState(true)}/>
          </Route>

          <Route path='/profile/1/friends'>
            <UserCard/>
          </Route>

          <Route path='/profile/1/about'>
            <AboutCard title="Melhor Amigo" desc="Meu melhor amigo é o Blablabla"/>
            <AboutCard 
              title="Músicas Favoritas" 
              desc="Eu AMO as músicas da Madonna"
              images={[
                "https://http2.mlstatic.com/D_NQ_NP_452711-MLB20625856738_032016-O.jpg",
              ]}
            />
            <AboutCard 
              title="Comidas Favoritas" 
              desc="Meu prato favorito é um belo arroz, feijão e bife :)"
              images={[
                "https://media-cdn.tripadvisor.com/media/photo-s/09/47/a1/43/cantina-monjolo.jpg"
              ]}
            />
          </Route>
        </Switch>

      </Container>
    </DefaultPageModel>
  );
};

export default Profile;
