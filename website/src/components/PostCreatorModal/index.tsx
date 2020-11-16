import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Modal, ModalProps } from '../Models/Modal';

import { Container } from './styles';

const PostCreatorModal: React.FC<ModalProps> = ({onClose, state}) => {
  return (
    <Modal onClose={onClose} state={state}>
      <Container>
        <h2>Criar uma publicação</h2>

        <section className="h-grid">
          <label><strong>Título:</strong> <input type="text"/></label>

          <label>
            <strong>Tipo:</strong>
            <select>
              <option value="">Completo</option>
              <option value="">Compacto</option>
            </select>
          </label>
        </section>

        <section>
          <h3>Conteúdo</h3>
          <textarea cols={55} rows={10}/>
        </section>

        <section>
          <h3>Fotos</h3>
          <div className="image-picker">
            <div className="new-image"><FiPlus size={20}/></div>
            <img src="https://d26lpennugtm8s.cloudfront.net/stores/746/397/products/laranja_ceu1-53852a66aa8037bd7415221636647098-640-0.jpg"/>
          </div>
        </section>

        <button>Publicar</button>
      </Container>
    </Modal>
  );
};

export default PostCreatorModal;
