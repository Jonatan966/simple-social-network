import React from 'react';
import {FiClock} from 'react-icons/fi';
import {CgPoll} from 'react-icons/cg';
import {HiUserGroup} from 'react-icons/hi';

import { Container } from './styles';
import testImg from '../../images/tests-img.jpg';

const UserCard: React.FC = () => {
  return (
    <Container onClick={() => console.log('Teste!')}>
      <div className="mainContent">
        <img src={testImg} alt="Pessoa tal"/>
        <div className="mainDetails">
          <h1>Pessoa Tal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus exercitationem vel, voluptate repellat eius animi voluptatem molestias natus, consequatur enim laborum debitis ut? Molestias rem minus voluptatem dolor unde?
          </p>
        </div>
      </div>

      <div className="otherDetails">
        <label title="Primeiro acesso">
          <FiClock size={25}/>
          Há 32 semanas
        </label>

        <label title="Amizades">
          <HiUserGroup size={25}/>
          255 amigos
        </label>

        <label title="Publicações">
          <CgPoll size={25}/>
          50 posts
        </label>
      </div>
    </Container>
  );
};

export default UserCard;
