# React Design System — Styled Components

Mini design system de e-commerce construído com **React + TypeScript + Styled Components**, demonstrando padrões reais de estilização com CSS-in-JS.

## ✨ O que este projeto demonstra

- **ThemeProvider** com tokens de design centralizados (cores, espaçamentos, tipografia, sombras)
- **GlobalStyle** para reset e estilos globais tipados
- **Componentes reutilizáveis** com variantes via props (`Button`, `Badge`, `Contador`, `Avaliacao`)
- **TypeScript** com interfaces e tipos bem definidos
- **Props dinâmicas** que alteram estilos (`variant`, `size`, `status`, `loading`)
- **Acessibilidade**: `aria-label`, `aria-live`, `aria-busy`, roles semânticos
- **Custom hook** `useCarrinho` com lógica separada da UI

## 🛠️ Tecnologias

- React 18
- TypeScript 5
- Styled Components 6
- Vite 4
- React Icons

## 📁 Estrutura

```
src/
├── components/
│   ├── Button.tsx       # Botão com 4 variantes e estados
│   ├── Badge.tsx        # Badge de status e desconto
│   ├── Avaliacao.tsx    # Estrelas com meia estrela
│   ├── Contador.tsx     # Input de quantidade acessível
│   ├── CardProduto.tsx  # Card principal composto
│   └── Header.tsx       # Navegação com contador de carrinho
├── hooks/
│   └── useCarrinho.ts   # Lógica de carrinho isolada
├── styles/
│   ├── theme.ts         # Tokens de design (cores, espaços, etc.)
│   └── GlobalStyle.ts   # Reset CSS global tipado
├── types/
│   └── index.ts         # Interfaces e tipos compartilhados
├── data/
│   └── produtos.ts      # Mock de produtos
└── main.tsx             # ThemeProvider + GlobalStyle
```

## 🚀 Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
npm run preview
```

## 📐 Sistema de tema

Todos os estilos derivam de um único `theme.ts`:

```ts
colors.primary    → '#6C63FF'   // cor de ação principal
colors.success    → '#198754'   // preço e confirmação
colors.danger     → '#DC3545'   // remoção e erros
spacing.md        → '16px'      // gap padrão
borderRadius.lg   → '16px'      // cards
```

Para trocar o visual inteiro, basta editar `theme.ts`.

## 🔧 Exemplo de componente tipado

```tsx
<Button variant="primary" size="lg" loading={false} fullWidth>
  Adicionar ao carrinho
</Button>

<Badge status="disponivel">✓ Em estoque</Badge>
<Badge status="esgotado">✗ Esgotado</Badge>
```
