import { IShopBagSneaker } from "./sneaker";

export interface IShopBagStore {
  sneakers: IShopBagSneaker[],
  isLoading: boolean,

  addSneaker: (sneaker: IShopBagSneaker) => void;
  removeSneaker: (id: number) => void;
  getAllSneakers: () => IShopBagSneaker[];
  setIsLoading: (value: boolean) => void,
}
