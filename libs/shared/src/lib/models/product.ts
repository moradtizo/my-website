import { Category } from "./category";

export interface Product {
  _id?: string;
  title?: string;
  description?:string;
  content?: string;
  brand?:string;
  countStock?:number;
  price?:number;
  rating?:number;
  isFeaturd?:boolean;
  thumbnail?:string;
  category?:Category[]
 }
 export interface ResProduct{
  // Category: Product[] | undefined;
  success?: boolean;
  products:Product[];
}
export interface ResOneProduct{
  success?: boolean;
  products:Product;
}
