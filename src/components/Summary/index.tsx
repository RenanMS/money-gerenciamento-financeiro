import { Card } from "../Card";
import { Container } from "./styles";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

const datas = [
  {
    title: 'Entradas',
    img: incomeImg,
    alt: 'Entradas',
    value: 'R$ 1000,00'
  },
  {
    title: 'Saídas',
    img: outcomeImg,
    alt: 'Saídas',
    value: '- R$ 500,00'
  },
  {
    title: 'Total',
    img: totalImg,
    alt: 'Total',
    value: 'R$ 500,00',
    classe: 'highlight-background'
  }
]

export function Summary() {
  return (
    <Container>
      {
        datas.map(data => {
          return <Card key={data.title} card={data}/>
        })
      }
    </Container>
  );
} 