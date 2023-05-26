// import { Product } from "./product";
import { Orderitems } from "./orderitems";
import { User } from "./user";


export interface Order {
  _id?:string;
  shippingAddress?:string;
  city?:string;
  country?:string;
  phone?:number;
  status?:string;
  total?:number;
  user?:User[];
  orderItems?:Orderitems[];

}
// export interface User{
//   _id?:string;
//   name?:string;
//   email?:string;
// }
// export interface OrderItems{
//   _id?:string;
//   product?:Product;
//   quantity?:number;
//   price?:number;
// }
export interface ResOrder {
  success?: boolean;
  orders:Order[];
}

