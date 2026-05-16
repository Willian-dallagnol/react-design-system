import React from 'react'
import styled from 'styled-components'

interface ContadorProps {
  valor: number
  onChange: (valor: number) => void
  min?: number
  max?: number
}

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`

const Btn = styled.button`
  background: ${({ theme }) => theme.colors.neutralLight};
  border: none;
  width: 36px;
  height: 36px;
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  transition: background ${({ theme }) => theme.transitions.fast};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primaryLight};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.textMuted};
    cursor: not-allowed;
  }
`

const Valor = styled.span`
  width: 40px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize.md};
  border-left: 1.5px solid ${({ theme }) => theme.colors.border};
  border-right: 1.5px solid ${({ theme }) => theme.colors.border};
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`

export const Contador: React.FC<ContadorProps> = ({
  valor,
  onChange,
  min = 1,
  max = 99,
}) => {
  return (
    <Wrapper aria-label="Quantidade">
      <Btn
        onClick={() => onChange(Math.max(min, valor - 1))}
        disabled={valor <= min}
        aria-label="Diminuir quantidade"
      >
        −
      </Btn>
      <Valor aria-live="polite">{valor}</Valor>
      <Btn
        onClick={() => onChange(Math.min(max, valor + 1))}
        disabled={valor >= max}
        aria-label="Aumentar quantidade"
      >
        +
      </Btn>
    </Wrapper>
  )
}
