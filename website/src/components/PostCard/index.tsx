import React from 'react';
import { FiHeart, FiBookmark, FiMessageCircle } from 'react-icons/fi';

import { Container } from './styles';

const PostCard: React.FC<{viewDetails?: Function}> = ({viewDetails}) => {
  return (
    <Container>
      <div className="cardTop">
        <label htmlFor="?" className="postTitle">
          <h2>Título</h2>
          <h4>Horário</h4>
        </label>
        <a href="?">Jonas</a>
      </div>

      <div className="cardContent">
        <div className="btnContainer">
          <button title="Curtir"><FiHeart size={25}/></button>
          <button title="Opinar"><FiMessageCircle size={25}/></button>
          <button title="Salvar"><FiBookmark size={25}/></button>
        </div>

        <div className="postContent">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aperiam harum, veritatis, itaque dolorem ipsum a quasi sit dolorum optio, minus neque deleniti enim veniam quos rem architecto! A, tempore?</p>
          {
            viewDetails &&
            <button onClick={() => viewDetails()}>Clique aqui para ver mais</button>
          }
        </div>
      </div>
    </Container>
  );
};

export default PostCard;
