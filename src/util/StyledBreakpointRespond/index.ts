import { css, CSSObject } from 'styled-components'
import { breakpoints, Breakpoint, Breakpoints } from './breakpointsConfig'

const createBreakpoints = (breakpoints: Breakpoints, breakpoint: Breakpoint) => {
  let newBreakpoints = {
    ...breakpoints
  }

  if(Number(breakpoint)) {
    newBreakpoints[breakpoint] = breakpoint + 'px'
  }

  return newBreakpoints
}

export const respond = {
  above: (breakpoint: Breakpoint, args: CSSObject) => {
    const newBreakpoint = createBreakpoints(breakpoints, breakpoint)

    return css`
      @media (min-width: ${newBreakpoint[breakpoint]}) {
        ${css(args)}
      }`
  },
  below: (breakpoint: Breakpoint, args: CSSObject) => {
    const newBreakpoint = createBreakpoints(breakpoints, breakpoint)

    return css`
      @media (max-width: ${newBreakpoint[breakpoint]}) {
        ${css(args)}
      }`
  },
  between: (minBreakpoint: Breakpoint, maxBreakpoint: Breakpoint, args: CSSObject) => {
    let newBreakpoint = createBreakpoints(breakpoints, minBreakpoint)
        newBreakpoint = createBreakpoints(newBreakpoint, maxBreakpoint)

    const min = newBreakpoint[minBreakpoint]
    const max = newBreakpoint[maxBreakpoint]
    
    if(min < max) {
      return css`
        @media (min-width: ${min}) and (max-width: ${max}) {
          ${css(args)}
      }`
    }

    console.log(`O tamanho "min" deve ser maior que "max"`)
    return ''
  }
}