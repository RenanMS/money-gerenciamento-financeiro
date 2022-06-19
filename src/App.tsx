import { useState } from 'react';
import { GlobalStyle } from './assets/styles/global';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

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
      <Header onOpenNewTranslationModal={handleOpenNewTranslationModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal 
        isModalOpen={isNewTranslationModalOpen}
        onRequestClose={handleCloseNewTranslationModal}
      />
    </div>
  );
}
