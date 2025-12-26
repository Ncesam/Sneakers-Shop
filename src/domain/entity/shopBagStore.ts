import { IShopBagSneaker } from "./sneaker";

export interface IShopBagStore {
  sneakers: IShopBagSneaker[],
  isLoading: boolean,

  addSneaker: (sneaker: IShopBagSneaker) => void;
  removeSneaker: (id: string) => void;
  getAllSneakers: () => IShopBagSneaker[];
  decrementCountSneakers: (id: string) => void;
  incrementCountSneakers: (id: string) => void;
  setIsLoading: (value: boolean) => void,
  setSneakers: (sneakers: IShopBagSneaker[]) => void;
  getSneaker: (sneakerId: string, variantId: string) => IShopBagSneaker | undefined
}
