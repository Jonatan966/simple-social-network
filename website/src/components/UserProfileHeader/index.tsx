import React from 'react';
import { Link } from 'react-router-dom';

import backImg from '../../images/tests-img2.png';
import userImg from '../../images/tests-img.jpg';
import { Container } from './styles';

const UserProfileHeader: React.FC = () => {
  return (
    <Container>
      <img src={backImg} alt=""/>

      <div className="mainContent">
        <img src={userImg} alt=""/>
        
        <label className="mainSubContent">
          <h2>Pessoa Tal</h2>

          <label className="btnGrid">
            <button>Seguir</button>
            <button>Contactar</button>
          </label>
        </label>
        
        <label className="secondSubContent">
          <button>Enviar pedido de amizade</button>
          <button>Reportar</button>
        </label>
      </div>

      <label className="otherContent">
        <h1>Mensagem de Boas Vindas</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio ut tenetur dignissimos at voluptate, alias, sequi cupiditate, veritatis provident sapiente ad aliquid quasi accusantium maxime eos architecto excepturi. Exercitationem!
        </p>
      </label>

      <hr/>

      <label className="profileSubMenus">
        <Link className="selected" to="?">Publicações</Link>
        <Link to="?">Amigos</Link>
        <Link to="?">Sobre</Link>
      </label>
    </Container>
  );
};

export default UserProfileHeader;
