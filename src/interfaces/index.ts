export interface IProduct {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface IUser {
  id?: number;
  username: string;
  password: string;
  level: number;
  vocation: string;
}
