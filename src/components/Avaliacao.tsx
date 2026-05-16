import React from 'react'
import styled from 'styled-components'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'

interface AvaliacaoProps {
  nota: number
  total: number
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

const Estrelas = styled.div`
  display: flex;
  gap: 2px;
  color: ${({ theme }) => theme.colors.warning};
`

const Texto = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const Avaliacao: React.FC<AvaliacaoProps> = ({ nota, total }) => {
  const estrelas = Array.from({ length: 5 }, (_, i) => {
    if (i + 1 <= Math.floor(nota)) return 'cheia'
    if (i < nota) return 'meia'
    return 'vazia'
  })

  return (
    <Wrapper aria-label={`Avaliação: ${nota} de 5 estrelas`}>
      <Estrelas>
        {estrelas.map((tipo, i) => (
          <span key={i}>
            {tipo === 'cheia' && <FaStar size={14} />}
            {tipo === 'meia' && <FaStarHalfAlt size={14} />}
            {tipo === 'vazia' && <FaRegStar size={14} />}
          </span>
        ))}
      </Estrelas>
      <Texto>
        {nota.toFixed(1)} ({total.toLocaleString('pt-BR')})
      </Texto>
    </Wrapper>
  )
}
