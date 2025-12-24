import { IListSneakersResponse } from "@domain/apiTypes/sneaker";
import { useMMKV } from "react-native-mmkv";


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


class SneakerClient {

  public static async fetchSneakers() {
    const jsonResponse = await API.request("GET", "/api/collections/sneakers/records?perPage=10&expand=variants(sneaker_id)&filter=(category~'popular')", {
      'Content-Type': "application/json",
    }, {})
    return jsonResponse as IListSneakersResponse
  }

  public static fetchCategory(){
    const jsonResponse = await API.request("GET", "/api/collections/sneakers/records?perPage=10&expand=variants(sneaker_id)&filter=(category~'popular')", {
      'Content-Type': "application/json",
    }, {})
    return jsonResponse as IListSneakersResponse
  }

}
