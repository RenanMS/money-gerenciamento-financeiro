import styled from "styled-components";
import { respond } from "../../util/StyledBreakpointRespond";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  
  margin-top: -7rem;
  overflow-x: auto;

  ${respond.between('sm','md', {
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '-10rem'
  })}

   ${respond.below('sm', {
    marginRight: '-1rem'
  })}
`