import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

  useEffect(() => {
    api.get('transactions')
      .then(res => console.log(res.data))
  },[])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Criação layout</td>
            <td className="deposit">R$ 1000,00</td>
            <td>Design</td>
            <td>24/04/2022</td>
          </tr>
          <tr>
            <td>Despesas gerais</td>
            <td className="withdraw">- R$500,00</td>
            <td>Design</td>
            <td>24/04/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}