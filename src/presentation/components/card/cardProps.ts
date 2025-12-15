import { ImageURISource } from "react-native";


export interface CardProps {
    isInShopCart?: boolean,
    isFavorite?: boolean,
    title: string,
    price: string | number,
    isBestSeller?: boolean,
    imageURI?: ImageURISource,
}