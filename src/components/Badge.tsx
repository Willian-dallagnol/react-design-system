import styled, { css } from 'styled-components'
import { StatusEstoque } from '../types'

interface BadgeProps {
  status: StatusEstoque
}

const statusConfig = {
  disponivel: css`
    background: ${({ theme }) => theme.colors.successLight};
    color: ${({ theme }) => theme.colors.success};
  `,
  poucos: css`
    background: #FFF3CD;
    color: ${({ theme }) => theme.colors.warningText};
  `,
  esgotado: css`
    background: ${({ theme }) => theme.colors.dangerLight};
    color: ${({ theme }) => theme.colors.danger};
  `,
}

export const Badge = styled.span<BadgeProps>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  letter-spacing: 0.03em;
  ${({ status }) => statusConfig[status]}
`

interface BadgeDescontoProps {
  children: React.ReactNode
}

export const BadgeDesconto = styled.span<BadgeDescontoProps>`
  display: inline-flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.warning};
  color: ${({ theme }) => theme.colors.warningText};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
`
