import { IListSneakersResponse } from "@domain/apiTypes/sneaker";


class API {
  private static BASE_URL = "";

  public static async request(method: string,url: string, headers: Record<string, any>, body: Record<string, any>) {
    try {
      let jsonBody = JSON.stringify(body);
      const response = await fetch(`${this.BASE_URL}${url}`, {
        body: jsonBody,
        headers: headers,
        method: method
      })
      if (!response.ok) {
        throw {
          status: response.status,
          message: response.json()
        }
      }
      return response.json()
    } catch (error) {
      throw error;
    }

  }
}


export class SneakerClient {
  public static async fetchCategory(category: string){
    const jsonResponse = await API.request("GET", `/api/collections/sneakers/records?perPage=10&expand=variants(sneaker_id)&filter=(category~'${category}')`, {
      'Content-Type': "application/json",
    }, {})
    return jsonResponse as IListSneakersResponse
  }
}


// export class UserClient {
//   public static async getFavoriteSneakers(userId: string) {
//     const jsonResponse = await API.request("PATCH", `/api/collectons/users/records/${userId}`, {}, {})
//   }

//   public static async addFavoriteSneaker(id: number, userId: string) {
//     const body = {
//       favorites:
//     }
//     const jsonResponse = await API.request("PATCH", `/api/collectons/users/records/${userId}`, {}, )
//   }
// }
