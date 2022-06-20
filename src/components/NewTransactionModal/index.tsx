import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionsTypeContainer } from './styles';

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
      
      <Container>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          title="Clique e digite o título da transação"
        />

        <input
          type="number"
          placeholder="Valor"
          title="Clique e digite o valor da transação"
        />

        <TransactionsTypeContainer>
          <button
            type="button"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            type="button"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionsTypeContainer>        

        <input
          placeholder="Categoria"
          title="Clique e digite a categoria da transação"
        />

        <button 
          type="submit" 
          title="Clique para cadastrar nova transação"
        >
          Cadastrar
        </button>

      </Container>
    </Modal>
  )
}