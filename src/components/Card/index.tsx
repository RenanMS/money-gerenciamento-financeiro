import { Container } from "./styles";

interface CardProps {
  card: {
    title: string;
    img: string;
    alt: string;
    value: number;
    classe?: string
  }
}

export function Card({card}: CardProps) {
  return (
    <Container className={card.classe ?? ''} title={card.alt}>
      <header>
        <p>{card.title}</p>
        <img src={card.img} alt={card.alt} />
      </header>
      <strong>
        {
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(card.value)
        }
      </strong>
    </Container>
  );
}