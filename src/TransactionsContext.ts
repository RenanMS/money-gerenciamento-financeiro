import { createContext } from "react";

// Umas das formas de compartilhar informação por toda a aplicação é
// utilizando contexto.

// É necessário iniciar um valor para o contexto.
// Para está aplicação é necessário um array que receba objetos que representa uma transação
export const TransactionsContext = createContext([])


// Acessando a váriavel TransactionsContext note que temos trê propriedades 
// TransactionsContext.Consumer
// TransactionsContext.Provider
// TransactionsContext.displayName

// No componente App.tsx vamos usar TransactionsContext.Provider que é fornecer
// algo que toda a aplicação possa utilizar.

// Uma vez que o valor do contexto é alterado ele se reflete por todos os
// componentes e esses componentes são atualizados em tela novamente.