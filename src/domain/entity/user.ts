export interface IUser {
    email: string
    username: string
    password: string
    avatar: string
}

export interface IBankCard {
  userId: string
  name: string
  cardNumber: number
  icon: string
}
