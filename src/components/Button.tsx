import styled, { css, keyframes } from 'styled-components'
import { TamanhoBotao, VarianteBotao } from '../types'

interface ButtonProps {
  variant?: VarianteBotao
  size?: TamanhoBotao
  fullWidth?: boolean
  loading?: boolean
}

const spin = keyframes`
  to { transform: rotate(360deg); }
`

const sizeStyles = {
  sm: css`
    padding: 6px 14px;
    font-size: ${({ theme }) => theme.fontSize.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  `,
  md: css`
    padding: 10px 20px;
    font-size: ${({ theme }) => theme.fontSize.md};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  `,
  lg: css`
    padding: 14px 28px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  `,
}

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: 2px solid transparent;
    &:hover:not(:disabled) { background: ${({ theme }) => theme.colors.primaryHover}; }
  `,
  secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primaryLight};
    }
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger};
    color: #fff;
    border: 2px solid transparent;
    &:hover:not(:disabled) { background: ${({ theme }) => theme.colors.dangerHover}; }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    border: 2px solid ${({ theme }) => theme.colors.border};
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.neutralLight};
      border-color: ${({ theme }) => theme.colors.neutral};
    }
  `,
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: 1;
  transition: all ${({ theme }) => theme.transitions.fast};
  white-space: nowrap;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  box-shadow: ${({ theme }) => theme.shadows.button};

  ${({ size = 'md' }) => sizeStyles[size]}
  ${({ variant = 'primary' }) => variantStyles[variant]}

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    box-shadow: none;
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }

  ${({ loading }) =>
    loading &&
    css`
      position: relative;
      color: transparent !important;
      pointer-events: none;
      &::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.4);
        border-top-color: #fff;
        border-radius: 50%;
        animation: ${spin} 0.6s linear infinite;
      }
    `}
`

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
}
