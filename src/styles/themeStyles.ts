import 'styled-components'

const rootPixel = 14

const pixelToRem = (size: number) => `${size / rootPixel}rem`

const fonts = {
  // regular
  R900: `
  font-size: ${pixelToRem(72)};
  font-weight: 500;
  `,
  R800: `
  font-size: ${pixelToRem(56)};
  font-weight: 500;
  `,
  R700: `
  font-size: ${pixelToRem(40)};
  font-weight: 500;
  `,
  R600: `
  font-size: ${pixelToRem(32)};
  font-weight: 500;
  `,
  R500: `
  font-size: ${pixelToRem(24)};
  font-weight: 500;
  `,
  R400: `
  font-size: ${pixelToRem(20)};
  font-weight: 500;
  `,
  R300: `
  font-size: ${pixelToRem(18)};
  font-weight: 500;
  `,
  R250: `
  font-size: ${pixelToRem(17)};
  font-weight: 500;
  `,
  R200: `
  font-size: ${pixelToRem(16)};
  font-weight: 500;
  `,
  R150: `
  font-size: ${pixelToRem(15)};
  font-weight: 500;
  `,
  R100: `
  font-size: ${pixelToRem(14)};
  font-weight: 500;
  `,
  R75: `
  font-size: ${pixelToRem(13)};
  font-weight: 500;
  `,
  R50: `
  font-size: ${pixelToRem(12)};
  font-weight: 500;
  `,
  R25: `
  font-size: ${pixelToRem(10)};
  font-weight: 500;
  `,

  // medium
  M900: `
  font-size: ${pixelToRem(72)};
  font-weight: 600;
  `,
  M800: `
  font-size: ${pixelToRem(56)};
  font-weight: 600;
  `,
  M700: `
  font-size: ${pixelToRem(40)};
  font-weight: 600;
  `,
  M600: `
  font-size: ${pixelToRem(32)};
  font-weight: 600;
  `,
  M500: `
  font-size: ${pixelToRem(24)};
  font-weight: 600;
  `,
  M400: `
  font-size: ${pixelToRem(20)};
  font-weight: 600;
  `,
  M300: `
  font-size: ${pixelToRem(18)};
  font-weight: 600;
  `,
  M250: `
  font-size: ${pixelToRem(17)};
  font-weight: 600;
  `,
  M200: `
  font-size: ${pixelToRem(16)};
  font-weight: 600;
  `,
  M150: `
  font-size: ${pixelToRem(15)};
  font-weight: 600;
  `,
  M100: `
  font-size: ${pixelToRem(14)};
  font-weight: 600;
  `,
  M75: `
  font-size: ${pixelToRem(13)};
  font-weight: 600;
  `,
  M50: `
  font-size: ${pixelToRem(12)};
  font-weight: 600;
  `,
  M25: `
  font-size: ${pixelToRem(10)};
  font-weight: 600;
  `,

  // bold
  B900: `
  font-size: ${pixelToRem(72)};
  font-weight: 700;
  `,
  B800: `
  font-size: ${pixelToRem(56)};
  font-weight: 700;
  `,
  B700: `
  font-size: ${pixelToRem(40)};
  font-weight: 700;
  `,
  B600: `
  font-size: ${pixelToRem(32)};
  font-weight: 700;
  `,
  B500: `
  font-size: ${pixelToRem(24)};
  font-weight: 700;
  `,
  B400: `
  font-size: ${pixelToRem(20)};
  font-weight: 700;
  `,
  B300: `
  font-size: ${pixelToRem(18)};
  font-weight: 700;
  `,
  B250: `
  font-size: ${pixelToRem(17)};
  font-weight: 700;
  `,
  B200: `
  font-size: ${pixelToRem(16)};
  font-weight: 700;
  `,
  B150: `
  font-size: ${pixelToRem(15)};
  font-weight: 700;
  `,
  B100: `
  font-size: ${pixelToRem(14)};
  font-weight: 700;
  `,
  B75: `
  font-size: ${pixelToRem(13)};
  font-weight: 700;
  `,
  B50: `
  font-size: ${pixelToRem(12)};
  font-weight: 700;
  `,
  B25: `
  font-size: ${pixelToRem(10)};
  font-weight: 700;
  `,
}

// color
const colors = {
  // primary
  primary25: '#F4FAFF',
  primary50: '#DBEDFF',
  primary100: '#B7DBFF',
  primary200: '#81BEFF',
  primary300: '#56A6F9',
  primary400: '#2A91FD',
  primary500: '#0075EF',
  primary600: '#0970DB',
  primary700: '#0763C3',
  primary800: '#0757AB',
  primary900: '#024A95',

  // gray
  gray25: '#FAFAFA',
  gray50: '#F4F4F4',
  gray100: '#EEEEEE',
  gray200: '#DDDDDD',
  gray300: '#CCCCCC',
  gray400: '#AAAAAA',
  gray500: '#999999',
  gray600: '#777777',
  gray700: '#666666',
  gray800: '#333333',
  gray900: '#111111',

  // opacity/white
  white900: '#FFFFFF',

  // red
  red25: '#FFF8F9',
  red50: '#FFEAED',
  red100: '#FFCED2',
  red200: '#FFAEAD',
  red300: '#FF8684',
  red400: '#FF6464',
  red500: '#F5373D',
  red600: '#D2292E',
  red700: '#BE1C1A',
  red800: '#92030B',
  red900: '#890007',

  // purple - post primary
  purple25: '#F5EDFF',
  purple50: '#EDDEFF',
  purple100: '#E4CFFF',
  purple200: '#DABDFF',
  purple300: '#CAA5F9',
  purple400: '#AF72FA',
  purple500: '#893EE5',
  purple600: '#7128CA',
  purple700: '#691EC7',
  purple800: '#4F139A',
  purple900: '#31006E',

  // blue
  blue25: '#F8FAFD',
  blue50: '#F6F8FC',
  blue100: '#F0F6FB',
  blue200: '#E8F0F8',
  blue300: '#DCE6F0',
  blue400: '#CCDAEA',
  blue500: '#B5C5D6',
  blue600: '#B5C5D6',
  blue700: '#9FB2C7',
  blue800: '#839BB6',
  blue900: '#6B85A3',
}

// z-index
const zIndex = {
  hide: -1,
  base: 1,
  floating: 99,
}

export type FontTheme = typeof fonts
export type ColorTheme = typeof colors
export type ZIndexTheme = typeof zIndex

export default {
  fonts,
  colors,
  zIndex,
}
