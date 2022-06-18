import { Container } from "./styles";

interface CardProps {
  card: {
    title: string;
    img: string;
    alt: string;
    value: string;
    classe?: string
  }
}

export function Card({card}: CardProps) {
  return (
    <Container className={card.classe ?? ''}>
      <header>
        <p>{card.title}</p>
        <img src={card.img} alt={card.alt} />
      </header>
      <strong>{card.value}</strong>
    </Container>
  );
}