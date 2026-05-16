import { useState } from 'react'

interface ItemCarrinho {
  id: number
  quantidade: number
}

export function useCarrinho() {
  const [itens, setItens] = useState<ItemCarrinho[]>([])

  const adicionar = (id: number, quantidade: number) => {
    setItens((prev) => {
      const existente = prev.find((i) => i.id === id)
      if (existente) {
        return prev.map((i) =>
          i.id === id ? { ...i, quantidade: i.quantidade + quantidade } : i
        )
      }
      return [...prev, { id, quantidade }]
    })
  }

  const remover = (id: number) => {
    setItens((prev) => prev.filter((i) => i.id !== id))
  }

  const estaNoCarrinho = (id: number) => itens.some((i) => i.id === id)

  const totalItens = itens.reduce((acc, i) => acc + i.quantidade, 0)

  return { itens, adicionar, remover, estaNoCarrinho, totalItens }
}
