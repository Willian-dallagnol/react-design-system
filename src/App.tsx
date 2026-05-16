import React from 'react'
import styled from 'styled-components'
import { CardProduto } from './components/CardProduto'
import { Header } from './components/Header'
import { useCarrinho } from './hooks/useCarrinho'
import { produtos } from './data/produtos'

const Main = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 640px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`

const PageTitle = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const Titulo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
`

const Subtitulo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 6px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

function App() {
  const { adicionar, remover, estaNoCarrinho, totalItens } = useCarrinho()

  return (
    <>
      <Header totalItens={totalItens} />
      <Main>
        <PageTitle>
          <Titulo>Produtos em destaque</Titulo>
          <Subtitulo>
            Mini design system com Styled Components + TypeScript + ThemeProvider
          </Subtitulo>
        </PageTitle>
        <Grid>
          {produtos.map((produto) => (
            <CardProduto
              key={produto.id}
              produto={produto}
              adicionado={estaNoCarrinho(produto.id)}
              onAdicionar={adicionar}
              onRemover={remover}
            />
          ))}
        </Grid>
      </Main>
    </>
  )
}

export default App
