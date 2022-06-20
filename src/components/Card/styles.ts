import styled from "styled-components";
import { respond } from "../../util/StyledBreakpointRespond";

export const Container =  styled.div`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);

  flex: 1;

  ${respond.between('sm','md', {
    display: 'flex',
    padding: '.5rem 1rem',
    position: 'relative'
  })}

  ${respond.below('sm', {
    minWidth: '75vw',
  })}

  &:last-child {
    ${respond.below('sm', {
      marginRight: '1rem',
    })}
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${respond.between('sm','md', {
       marginBottom: '0rem',
    })}

    p {
      ${respond.between('sm','md', {
       width: '84px'
      })}
    }

    img {
      ${respond.between('sm','md', {
       position: 'absolute',
       right: '1rem'
      })}
    }

  }

  strong {
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 3rem;
    white-space: nowrap;
  }

  &.highlight-background {
    background: var(--green);
    color: var(--white);
  }
`