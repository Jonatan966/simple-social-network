import React from 'react';
import { FiBell } from 'react-icons/fi';

import { Container } from './styles';

const TopBar: React.FC = () => {
  return (
    <Container>
      <input placeholder='Digite para pesquisar. . .' type="text"/>
      <label><FiBell size={25}/></label>
      <button>Minha Foto</button>
    </Container>
  );
};

export default TopBar;
