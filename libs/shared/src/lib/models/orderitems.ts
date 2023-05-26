import { Product } from "./product";

export interface Orderitems {
  _id?:string;
  product?:Product[];
  quantity?:number;
}
