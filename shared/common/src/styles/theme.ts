import '@emotion/react'
const color = {
  main: '#288BE1',
  sub: '#45DFDA',
  error: '#DF454A',

  gray: {
    '200': '#383838',
    '400': '#6B6B6B',
    '500': '#858585',
    '700': '#B8B8B8',
    '800': '#D1D1D1',
    '900': '#EBEBEB',
  },
  blue: {
    '100': '#072036',
    '200': '#0E3B63',
    '300': '#14568F',
    '400': '#1A71BC',
    '500': '#288BE1',
    '800': '#AED3F4',
  },
  red: {
    '800': '#F5C6C8',
  },
  white: '#FFFFFF',
  black: '#000000',
} as const

const typo = {
  title_lg: {
    semibold: {
      fontSize: '3rem',
      lineHeight: '120%',
      fontWeight: '600',
    },
    medium: {
      fontSize: '3rem',
      lineHeight: '120%',
      fontWeight: '500',
    },
    regular: {
      fontSize: '3rem',
      lineHeight: '120%',
      fontWeight: '400',
    },
  },
  title_md: {
    semibold: {
      fontSize: '2.25rem',
      lineHeight: '120%',
      fontWeight: '600',
    },
    medium: {
      fontSize: '2.25rem',
      lineHeight: '120%',
      fontWeight: '500',
    },
    regular: {
      fontSize: '2.25rem',
      lineHeight: '120%',
      fontWeight: '400',
    },
  },
  title_sm: {
    semibold: {
      fontSize: '1.5rem',
      lineHeight: '130%',
      fontWeight: '600',
    },
    medium: {
      fontSize: '1.5rem',
      lineHeight: '130%',
      fontWeight: '500',
    },
    regular: {
      fontSize: '1.5rem',
      lineHeight: '130%',
      fontWeight: '400',
    },
  },
  text_lg: {
    semibold: {
      fontSize: '1.125rem',
      lineHeight: '140%',
      fontWeight: '600',
    },
    medium: {
      fontSize: '1.125rem',
      lineHeight: '140%',
      fontWeight: '500',
    },
    regular: {
      fontSize: '1.125rem',
      lineHeight: '140%',
      fontWeight: '400',
    },
  },
  text_md: {
    semibold: {
      fontSize: '1rem',
      lineHeight: '140%',
      fontWeight: '600',
    },
    medium: {
      fontSize: '1rem',
      lineHeight: '140%',
      fontWeight: '500',
    },
    regular: {
      fontSize: '1rem',
      lineHeight: '140%',
      fontWeight: '400',
    },
  },
  text_sm: {
    semibold: {
      fontSize: '0.875rem',
      lineHeight: '140%',
      fontWeight: '600',
    },
    medium: {
      fontSize: '0.875rem',
      lineHeight: '140%',
      fontWeight: '500',
    },
    regular: {
      fontSize: '0.875rem',
      lineHeight: '140%',
      fontWeight: '400',
    },
  },
  caption: {
    semibold: {
      fontSize: '0.75rem',
      lineHeight: '140%',
      fontWeight: '600',
    },
    medium: {
      fontSize: '0.75rem',
      lineHeight: '140%',
      fontWeight: '500',
    },
    regular: {
      fontSize: '0.75rem',
      lineHeight: '140%',
      fontWeight: '400',
    },
  },
} as const

const breakPoint = {
  360: '(max-width: 360px)',
  600: '(max-width: 600px)',
  1024: '(max-width: 1024px)',
  1280: '(max-width: 1280px)',
  1440: '(max-width: 1440px)',
  1728: '(max-width: 1728px)',
  1920: '(max-width: 1920px)',
} as const

export const theme = {
  color,
  typo,
  breakPoint,
}

type ExtendedTheme = typeof theme

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends ExtendedTheme {}
}
