import Modal from 'react-modal'

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
    >
      <h2>Nova transação</h2>
    </Modal>
  )
}