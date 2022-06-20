import styled from "styled-components";
import { respond } from "../../util/StyledBreakpointRespond";

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  max-width: 1120px;

  margin: 0 auto;
  padding: 2rem 1rem 10rem;

  ${respond.between('sm','md', {
    padding: '2rem 1rem 9.8rem'
  })}

  ${respond.below('sm', {
    padding: '2rem 1rem 6.8rem'
  })}

  ${respond.below(375, {
    flexDirection: 'column',
  })}

  button {
    font-size: 1rem;
    color: var(--white);
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    ${respond.below(375, {
      marginTop: '1rem',
    })}
  }
`