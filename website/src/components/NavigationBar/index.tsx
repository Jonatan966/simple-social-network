import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiHome, FiUser, FiMessageCircle, FiCompass } from 'react-icons/fi';
import { GiMagnifyingGlass } from 'react-icons/gi';

import { Container } from './styles';

interface NavigationBarProps {
  pageName: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({pageName}) => {
  return (
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
  );
};

export default NavigationBar;
