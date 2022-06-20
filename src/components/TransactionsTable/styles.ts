import styled from "styled-components";
import { respond } from "../../util/StyledBreakpointRespond";

export const Container = styled.div`
  margin-top: 4rem;

  ${respond.below('md', {
     marginTop: '2rem'
  })}

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    border-collapse: initial;
    font-size: 1rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);

      &:first-child {
        color: var(--text-tittle);
        border-bottom-left-radius: 1rem;
        border-top-left-radius: 1rem;

        ${respond.below('md', {
          borderTopRightRadius: '1rem',
          borderBottomLeftRadius: '0rem',
        })}
      }

      &:last-child {
        border-bottom-right-radius: 1rem;
        border-top-right-radius: 1rem;

        ${respond.below('md', {
          borderBottom: 'none',
          borderTopRightRadius: '0rem',
          borderBottomLeftRadius: '1rem',
        })}
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }

  table.reponsive.card {
    table-layout: fixed;

    ${respond.below('md', {
      border: '0'
    })}

    thead {
      ${respond.below('md', {
        border: 'none',
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: '1px'
      })}
    }

    tr {
      ${respond.below('md', {
        display: 'block',
        marginBottom: '1.4rem'
      })}
    }

    td {
        ${respond.below('md', {
        display: 'block',
        borderBottom: '1px solid var(--background)',
        textAlign: 'right'
      })}

      &:before {
        ${respond.below('md', {
          /*
          * aria-label has no advantage, it won't be read inside a table
          content: attr(aria-label);
          */
          content: 'attr(data-label)',
          float: 'left',
          textTransform: 'uppercase',
          fontSize: '.9rem',
          color: 'var(--text-body)'
        })}
      }
    }
  }
`