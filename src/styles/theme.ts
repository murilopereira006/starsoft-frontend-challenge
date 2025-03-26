export const theme = {
  colors: {
    primary: '#ff8310',
    background: '#232323',
    foreground: '#191a20',
    gray: '#393939',

    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
    },
  },
  typography: {
    fontFamily: {
      primary: 'Poppins, sans-serif',
    },
    sizes: {
      base: '1rem', // 16px
      small: '0.875rem', // 14px
      large: '1.25rem', // 20px
      xlarge: '1.5rem', // 24px
    },
  },
  spacing: {
    base: '1rem', // 16px
    small: '0.5rem', // 8px
    medium: '1.5rem', // 24px
    large: '2rem', // 32px
  },
  sizes: {
    thin: '0.3125rem', // 5px
    small: '0.625rem', // 10px
    medium: '1.5625rem', // 25px
    large: '3.125rem', // 50px
    xlarge: '4.6875rem', // 75px
  },
  borders: {
    radius: {
      medium: '8px',
      full: '9999px',
    },
  },
  layout: {
    headerHeight: '100px',
    footerHeight: '75px',
  },
} as const;

export type Theme = typeof theme;
