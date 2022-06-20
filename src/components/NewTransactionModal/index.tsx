import { FormEvent, useState, useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import Modal from 'react-modal'
import { api } from '../../services/api';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, RadioBox, TransactionsTypeContainer } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps{
  isModalOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isModalOpen, onRequestClose}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext)

  const [typeTransaction, setTypeTransaction] = useState('deposit')
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount: value,
      category,
      typeTransaction
    })

    // Caso de tudo certo no POST

    // Reseta os campos do modal
    setTitle('')
    setValue(0)
    setCategory('')
    setTypeTransaction('deposit')

    // Fecha o modal
    onRequestClose();
  }

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
      
      <Container onSubmit={handleCreateTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          title="Clique e digite o título da transação"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          title="Clique e digite o valor da transação"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionsTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setTypeTransaction('deposit') }}
            isActive={typeTransaction == 'deposit' }
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setTypeTransaction('withdraw') }}
            isActive={typeTransaction == 'withdraw' }
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionsTypeContainer>        

        <input
          placeholder="Categoria"
          title="Clique e digite a categoria da transação"
          value={category}
          onChange={event => setCategory(event.target.value)}
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