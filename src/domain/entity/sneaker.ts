export interface ISneaker {
    id: number
    name: string
    description?: string
    variants?: Array<IVariantSneaker>
    cost: number
    isInShopCart?: boolean,
    isFavorite?: boolean,
    isBestSeller?: boolean,
}

interface IVariantSneaker {
    id: number,
    name: string
    color?: string
    imageURI?: string;
}

export interface IShopBagSneaker {
  idSneaker: number,
  count: number,
  variantId: number,
}
