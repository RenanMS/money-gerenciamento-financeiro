export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | number

export interface Breakpoints {
  [key: string]: string
}

export const breakpoints : Breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px'
}