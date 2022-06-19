import { useState } from 'react';
import { GlobalReset } from './assets/styles/reset';
import { GlobalStyle } from './assets/styles/global';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from 'react-modal'

Modal.setAppElement('#root');

export function App() {
  const [isNewTranslationModalOpen, setIsNewTranslationModalOpen] = useState(false);
  
  function handleOpenNewTranslationModal() {
    setIsNewTranslationModalOpen(true)
  }

  function handleCloseNewTranslationModal() {
    setIsNewTranslationModalOpen(false)
  }

  return (
    <div className="App">
      <GlobalReset />
      <GlobalStyle />
      
      <Header onOpenNewTranslationModal={handleOpenNewTranslationModal} />
      <Dashboard />

      <Modal
          isOpen={isNewTranslationModalOpen}
          onRequestClose={handleCloseNewTranslationModal}
          contentLabel="Modal cadastre uma nova transação"
        >
          <h2>Nova transação</h2>
        </Modal>
    </div>
  );
}
