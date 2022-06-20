import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transactions {
  id: number;
  title: string;
  typeTransaction: string;
  category: string;
  amount: number;
  createAt: string;
}

// Herda todos os compos exceto 'id' | 'createAt'
type TransactionsInput = Omit<Transactions, 'id' | 'createAt'>

// Informa qual campo que herdar
// type TransactionsInput = Pick<Transactions, 'title' | 'amount' | 'typeTransaction'| 'category'>

// Criar uma nova interface também soluciona mas as soluções acima são mais convenientes
// interface Transactions {
//   title: string;
//   typeTransaction: string;
//   category: string;
//   amount: number;
// }

// Quando um contexto recebe algum conteúdo é necessário informar qual o tipo de filhos.
// ReactNode é o mesmo que informar que o contexto pode receber qualquer coisa.
interface TransactionsProviderProps {
  children: ReactNode;
}

// Umas das formas de compartilhar informação por toda a aplicação é
// utilizando contexto.

// É necessário iniciar um valor para o contexto.
// Para está aplicação é necessário um array que receba objetos que representa uma transação.

interface TransactionsContextData {
  transactions: Transactions[];
  createTransaction: (transactions: TransactionsInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  // Quando iniciamos um contexto com objeto vazio e em casos de erro
  // temos que forçar o contexto a entender que o objeto vazio está
  // recebendo o tipo desejado
  {} as TransactionsContextData
);

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

  async function createTransaction(transactionInput: TransactionsInput) {

    // Toda transação deve conter a data de criação.
    // Configure o miragejs (recomendado) para add a data quando receber a nova trasação
    // ou informe a data diretamente no objeto enviado. 

    const response = await api.post('transactions', {
      ...transactionInput,
      createAt: new Date()
    })

    const { transaction } = response.data;

    // setTransactions recebe um novo vetor que copiando o vetor original e
    // adiciona uma nova transação.
    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      { children }
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}