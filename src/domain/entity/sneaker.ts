export interface ISneaker {
    id: string
    name: string
    description?: string
    variants?: Array<IVariantSneaker>
    cost: number
    isInShopCart?: boolean,
    isFavorite?: boolean,
    isBestSeller?: boolean,
}

interface IVariantSneaker {
    id: string,
    name: string
    color?: string
    imageURI?: string;
}

export interface IShopBagSneaker {
  sneakerId: string,
  count: number,
  variantId: string,
}
