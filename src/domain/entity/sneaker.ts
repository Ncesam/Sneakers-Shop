
export interface ISneaker {
    id: number
    name: string
    description: string
    variants: Array<IVariantSneaker>
    cost: number
}

interface IVariantSneaker {
    name: string
    color?: string
    imageURI?: string;
}