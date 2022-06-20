import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
  const {transactions} =  useTransactions();

  return (
    <Container>
      <table className="reponsive card">
        <thead>
          <tr>
            <th data-scope="col">Título</th>
            <th data-scope="col">Valor</th>
            <th data-scope="col">Categoria</th>
            <th data-scope="col">Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id} data-scope="row">
              <td data-label="Título">{transaction.title}</td>
              <td data-label="Valor" className={transaction.typeTransaction}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
                </td>
              <td data-label="Categoria">{transaction.category}</td>
              <td data-label="Data">
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createAt)
                )}
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </Container>
  );
}