export interface Produto {
  id: number
  nome: string
  preco: number
  precoOriginal?: number
  imagem: string
  avaliacao: number
  totalAvaliacoes: number
  desconto?: number
  emEstoque: boolean
  categoria: string
}

export type VarianteBotao = 'primary' | 'secondary' | 'danger' | 'ghost'
export type TamanhoBotao = 'sm' | 'md' | 'lg'
export type StatusEstoque = 'disponivel' | 'poucos' | 'esgotado'
