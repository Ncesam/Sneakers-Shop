import { ISneaker } from "@domain/entity/sneaker";


export interface IListSneakersResponse {
  page: number,
  perPage: number,
  totalItems: number,
  totalPages: number,
  items: ISneaker[]
}
