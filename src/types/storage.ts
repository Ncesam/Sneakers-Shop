


export interface IUserStorage {
    email: string;
    username: string;
    favorities: number;

    setEmail: (email: string) => void;
    setUserName: (username: string) => void;



    setFavorities: (favorities: number) => void;
    increaseFavorities: () => void;
}

export interface IFavoriteCardStorage {
    count: number;
    cards?: ICardItem[];
}

export interface ICardItem {
    title: string; 
    id: number;
    isFavorite: boolean;
    isInShopCart: boolean;
}