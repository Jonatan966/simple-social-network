import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiHome, FiUser, FiMessageCircle, FiCompass } from 'react-icons/fi';
import { GiMagnifyingGlass } from 'react-icons/gi';

import { Container } from './styles';
import PostCreatorModal from '../PostCreatorModal';

interface NavigationBarProps {
  pageName: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({pageName}) => {
  const [postCreatorModalState, setPostCreatorModal] = useState(false);

  return (
    <>
      <PostCreatorModal onClose={() => setPostCreatorModal(false)} state={postCreatorModalState}/>
      <Container>
        <Link 
          title="Home" 
          to="/" 
          className={pageName === 'Landing' ? 'selected' : ''}
        >
          <FiHome/>
        </Link>

        <Link 
          title="Explorar" 
          to="/explore"
          className={pageName === 'Explore' ? 'selected' : ''}
        >
          <FiCompass/>
        </Link>

        <Link 
          title="Escrever. . ." 
          to="?" 
          className="plusBtn selected"
          onClick={() => setPostCreatorModal(true)}
        >
          <FiPlus/>
        </Link>

        <Link 
          title="Conversas" 
          to="/conversations"
          className={pageName === 'Conversations' ? 'selected' : ''}
        >
          <FiMessageCircle/>
        </Link>

        <Link 
          title="Meu Perfil" 
          to="/profile/1"
          className={pageName === 'Profile' ? 'selected' : ''}
        >
          <FiUser/>
        </Link>
      </Container>
    </>
  );
};

export default NavigationBar;
