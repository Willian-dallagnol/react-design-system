export const theme = {
  colors: {
    primary: '#6C63FF',
    primaryHover: '#5A52D5',
    primaryLight: '#EEEDFE',

    success: '#198754',
    successHover: '#146C43',
    successLight: '#D1E7DD',

    danger: '#DC3545',
    dangerHover: '#B02A37',
    dangerLight: '#F8D7DA',

    warning: '#FFC107',
    warningText: '#664D03',

    neutral: '#6C757D',
    neutralHover: '#565E64',
    neutralLight: '#F8F9FA',

    text: '#212529',
    textSecondary: '#6C757D',
    textMuted: '#ADB5BD',

    surface: '#FFFFFF',
    background: '#F4F3FF',
    border: '#DEE2E6',
    borderLight: '#F1F0FF',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    xxxl: '2rem',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  borderRadius: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    full: '9999px',
  },
  shadows: {
    card: '0 2px 16px rgba(108, 99, 255, 0.08)',
    cardHover: '0 8px 32px rgba(108, 99, 255, 0.18)',
    button: '0 2px 6px rgba(0,0,0,0.08)',
  },
  transitions: {
    fast: '0.15s ease',
    normal: '0.25s ease',
    slow: '0.4s ease',
  },
} as const

export type Theme = typeof theme
