import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'

interface HeaderProps {
  totalItens: number
}

const Nav = styled.header`
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0 ${({ theme }) => theme.spacing.xl};
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 12px rgba(108, 99, 255, 0.06);
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.primary};
`

const LogoIcon = styled.span`
  font-size: 1.5rem;
`

const CarrinhoBtn = styled.button`
  position: relative;
  background: ${({ theme }) => theme.colors.primaryLight};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize.sm};
  transition: background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.border};
  }
`

const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  background: ${({ theme }) => theme.colors.danger};
  color: #fff;
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Header: React.FC<HeaderProps> = ({ totalItens }) => (
  <Nav>
    <Logo>
      <LogoIcon>🛒</LogoIcon>
      Design System
    </Logo>
    <CarrinhoBtn aria-label={`Carrinho com ${totalItens} itens`}>
      <FaShoppingCart size={16} />
      Carrinho
      {totalItens > 0 && <Badge aria-hidden="true">{totalItens}</Badge>}
    </CarrinhoBtn>
  </Nav>
)
