import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { FaShoppingCart, FaCheck, FaTrash } from 'react-icons/fa'
import { Produto, StatusEstoque } from '../types'
import { Button } from './Button'
import { Badge, BadgeDesconto } from './Badge'
import { Avaliacao } from './Avaliacao'
import { Contador } from './Contador'

interface CardProdutoProps {
  produto: Produto
  adicionado: boolean
  onAdicionar: (id: number, quantidade: number) => void
  onRemover: (id: number) => void
}

const entrar = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`

const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow ${({ theme }) => theme.transitions.normal},
              transform ${({ theme }) => theme.transitions.normal};
  animation: ${entrar} 0.35s ease both;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-4px);
  }
`

const ImagemWrapper = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.borderLight};
`

const Imagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.slow};

  ${Card}:hover & {
    transform: scale(1.04);
  }
`

const BadgeWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
`

const Corpo = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  flex: 1;
`

const Categoria = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

const Nome = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;
`

const PrecoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
`

const Preco = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.success};
`

const PrecoOriginal = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: line-through;
`

const Divisor = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 4px 0;
`

const LinhaAcao = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
`

const getStatusEstoque = (produto: Produto): StatusEstoque => {
  if (!produto.emEstoque) return 'esgotado'
  return 'disponivel'
}

const statusLabel: Record<StatusEstoque, string> = {
  disponivel: '✓ Em estoque',
  poucos: '⚠ Últimas unidades',
  esgotado: '✗ Esgotado',
}

export const CardProduto: React.FC<CardProdutoProps> = ({
  produto,
  adicionado,
  onAdicionar,
  onRemover,
}) => {
  const [quantidade, setQuantidade] = useState(1)
  const [loading, setLoading] = useState(false)

  const status = getStatusEstoque(produto)
  const precoTotal = produto.preco * quantidade

  const handleAdicionar = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onAdicionar(produto.id, quantidade)
    }, 600)
  }

  return (
    <Card>
      <ImagemWrapper>
        <Imagem src={produto.imagem} alt={produto.nome} loading="lazy" />
        {produto.desconto && (
          <BadgeWrapper>
            <BadgeDesconto>−{produto.desconto}%</BadgeDesconto>
          </BadgeWrapper>
        )}
      </ImagemWrapper>

      <Corpo>
        <Categoria>{produto.categoria}</Categoria>
        <Nome>{produto.nome}</Nome>

        <Avaliacao nota={produto.avaliacao} total={produto.totalAvaliacoes} />

        <Badge status={status}>{statusLabel[status]}</Badge>

        <PrecoWrapper>
          <Preco>
            {precoTotal.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Preco>
          {produto.precoOriginal && (
            <PrecoOriginal>
              {(produto.precoOriginal * quantidade).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </PrecoOriginal>
          )}
        </PrecoWrapper>

        <Divisor />

        {produto.emEstoque && !adicionado && (
          <LinhaAcao>
            <Contador
              valor={quantidade}
              onChange={setQuantidade}
              max={10}
            />
            <Button
              variant="primary"
              size="md"
              loading={loading}
              onClick={handleAdicionar}
              aria-label={`Adicionar ${produto.nome} ao carrinho`}
              style={{ flex: 1 }}
            >
              <FaShoppingCart size={14} />
              Adicionar
            </Button>
          </LinhaAcao>
        )}

        {adicionado && (
          <LinhaAcao>
            <Button
              variant="secondary"
              size="md"
              style={{ flex: 1, pointerEvents: 'none' }}
            >
              <FaCheck size={14} />
              No carrinho
            </Button>
            <Button
              variant="danger"
              size="md"
              onClick={() => onRemover(produto.id)}
              aria-label={`Remover ${produto.nome} do carrinho`}
            >
              <FaTrash size={13} />
            </Button>
          </LinhaAcao>
        )}

        {!produto.emEstoque && (
          <Button variant="ghost" size="md" disabled fullWidth>
            Produto esgotado
          </Button>
        )}
      </Corpo>
    </Card>
  )
}
