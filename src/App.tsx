import { useState } from 'react';
import { GlobalStyle } from './assets/styles/global';
import { GlobalReset } from './assets/styles/reset';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

export function App() {
  const [isNewTranslationModalOpen, setIsNewTranslationModalOpen] = useState(false);
  
  function handleOpenNewTranslationModal() {
    setIsNewTranslationModalOpen(true)
  }

  function handleCloseNewTranslationModal() {
    setIsNewTranslationModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <div className="App">
        <GlobalStyle />
        <GlobalReset />

        <Header onOpenNewTranslationModal={handleOpenNewTranslationModal} />
        <Dashboard />
        
        <NewTransactionModal 
          isModalOpen={isNewTranslationModalOpen}
          onRequestClose={handleCloseNewTranslationModal}
        />
      </div>
    </TransactionsProvider>
  );
}

// TransactionsContext envolve toda a aplicação permitindo qualquer componente ter acesso ao contexto
// Array vazio foi setado como valor inicial