import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transactions {
  id: number;
  title: string;
  typeTransaction: string;
  category: string;
  amount: number;
  createAt: string;
}

// Quando um contexto recebe algum conteúdo é necessário informar qual o tipo de filhos.
// ReactNode é o mesmo que informar que o contexto pode receber qualquer coisa.
interface TransactionsProviderProps {
  children: ReactNode;
}

// Umas das formas de compartilhar informação por toda a aplicação é
// utilizando contexto.

// É necessário iniciar um valor para o contexto.
// Para está aplicação é necessário um array que receba objetos que representa uma transação.

export const TransactionsContext = createContext<Transactions[]>([]);

// Acessando a váriavel TransactionsContext note que temos três propriedades 
// TransactionsContext.Consumer
// TransactionsContext.Provider
// TransactionsContext.displayName

// Antes: No componente App.tsx vamos usar TransactionsContext.Provider que é fornecer algo que toda a aplicação possa utilizar.
// Recente: Criamos um componente TransactionsProvider que contém um contexto.

// Uma vez que o valor do contexto é alterado ele se reflete por todos os
// componentes e esses componentes são atualizados em tela novamente.

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([])
  
  useEffect(() => {
    api.get('transactions')
      .then(res => setTransactions(res.data.transactions))
  },[])

  return (
    <TransactionsContext.Provider value={transactions}>
      { children }
    </TransactionsContext.Provider>
  )
}
