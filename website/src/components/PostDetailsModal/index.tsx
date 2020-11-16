import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalProps } from '../Models/Modal';
import PostCard from '../PostCard';

import userImg from '../../images/tests-img.jpg';
import { Container, PostCommentContainer } from './styles';

const PostComment: React.FC = () => {
  return (
    <PostCommentContainer>
      <div className="userDetails">
        <Link to="?">
          <img src={userImg} alt=""/>
          <strong>Jonas</strong>
        </Link>

        <span>12/12/2012 às 12:00 AM</span>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sint totam numquam nesciunt cum? Enim pariatur maiores facere dolorum. Odit assumenda inventore deserunt aliquam aperiam repellendus? Illum repudiandae qui repellendus.
      </p>

      <div className="actions">
        <button>Curtir</button>
        <button>Responder</button>
      </div>
    </PostCommentContainer>
  );
}

const PostDetailsModal: React.FC<ModalProps> = ({onClose, state}) => {
  return (
    <Modal onClose={onClose} state={state}>
      <PostCard/>
      <Container>
        <h1>Comentários</h1>

        <div className="commentArea">
          <input placeholder="Escreva uma mensagem. . ." type="text"/>
          <button>Enviar</button>
        </div>

        <hr/>

        <PostComment/>
        <PostComment/>
        <PostComment/>
        <PostComment/>
        <PostComment/>

      </Container>
    </Modal>
  );
};

export default PostDetailsModal;
