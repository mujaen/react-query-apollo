import { css, FlattenSimpleInterpolation } from 'styled-components'

interface MediaType {
  mobile: (args: TemplateStringsArray) => FlattenSimpleInterpolation
  desktop: (args: TemplateStringsArray) => FlattenSimpleInterpolation
}

const breakpoints = {
  mobile: '480px',
  desktop: '768px',
}

export const media = Object.keys(breakpoints).reduce((medias, device) => {
  medias[device] = (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${breakpoints[device]}) {
      ${css(...args)};
    }
  `
  return medias
}, {} as MediaType)
