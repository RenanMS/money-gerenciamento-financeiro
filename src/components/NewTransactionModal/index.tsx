import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { Container } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps{
  isModalOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isModalOpen, onRequestClose}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal cadastre uma nova transação"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-close-modal"
      >
        <img src={closeImg} alt="Fechar modal" title="Clique para fechar modal"/>
      </button>
      
    </Modal>
  )
}