import { Card } from "../Card";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {

  const {transactions} =  useTransactions()
  
  const summary = transactions.reduce((acc, transaction) => {

    if (transaction.typeTransaction === 'deposit') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc

  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>
      
        <Card card={{
          title: 'Entradas',
          img: incomeImg,
          alt: 'Entradas',
          value: summary.deposits
        }}/>

        <Card card={{
          title: 'Saídas',
          img: outcomeImg,
          alt: 'Saídas',
          value: summary.withdraws * -1
        }}/>

        <Card card={{
          title: 'Total',
          img: totalImg,
          alt: 'Total',
          value: summary.total,
          classe: 'highlight-background'
        }}/>
      
    </Container>
  )
}
